"use client";

import { useState, useRef, useEffect } from "react";
import "./chat.css";

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
const EVENT_ID = "1985454109689";
const POLL_INTERVAL = 2500;
const MAX_POLLS = 40;

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      type: "system",
      text: "Sistema listo. Describe qué campaña quieres lanzar.",
      time: "",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const pollRefs = useRef({});

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    return () => {
      Object.values(pollRefs.current).forEach(clearInterval);
    };
  }, []);

  function now() {
    if (typeof window === "undefined") return "";
    return new Date().toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function addMessage(msg) {
    setMessages((prev) => [...prev, { id: Date.now() + Math.random(), time: now(), ...msg }]);
  }

  function updateMessage(id, patch) {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, ...patch } : m))
    );
  }

  function startPolling(jobId, msgId) {
    let count = 0;
    const interval = setInterval(async () => {
      count++;
      if (count > MAX_POLLS) {
        clearInterval(interval);
        updateMessage(msgId, {
          type: "error",
          text: "La IA tardó demasiado. Intenta de nuevo.",
          polling: false,
        });
        return;
      }

      try {
        const res = await fetch(`${BACKEND_URL}/api/chat/status/${jobId}`);
        const json = await res.json();

        if (json.state === "completed" && json.result) {
          clearInterval(interval);
          delete pollRefs.current[jobId];

          if (json.result.draftId) {
            fetchDraft(json.result.draftId, msgId, json.result.chain);
          } else {
            updateMessage(msgId, {
              type: "system",
              text: json.result.subject
                ? `${json.result.subject}\n\n${json.result.body}`
                : `Cadena ejecutada: ${json.result.chain}.`,
              polling: false,
            });
          }
        } else if (json.state === "failed") {
          clearInterval(interval);
          updateMessage(msgId, {
            type: "error",
            text: "El job falló en el backend.",
            polling: false,
          });
        }
      } catch {
        clearInterval(interval);
        updateMessage(msgId, {
          type: "error",
          text: "Error al consultar el estado del job.",
          polling: false,
        });
      }
    }, POLL_INTERVAL);

    pollRefs.current[jobId] = interval;
  }

  async function fetchDraft(draftId, msgId, chain) {
    try {
      const res = await fetch(`${BACKEND_URL}/api/drafts/${draftId}`);
      const draft = await res.json();
      updateMessage(msgId, {
        type: "draft",
        text: "La IA ha preparado esta campaña:",
        draft,
        chain,
        polling: false,
      });
    } catch {
      updateMessage(msgId, {
        type: "error",
        text: "No se pudo cargar el borrador.",
        polling: false,
      });
    }
  }

  async function handleApprove(draftId, msgId) {
    updateMessage(msgId, { approving: true });
    try {
      const res = await fetch(`${BACKEND_URL}/api/drafts/${draftId}/approve`, {
        method: "PATCH",
      });
      if (res.ok) {
        updateMessage(msgId, {
          type: "approved",
          text: "Campaña aprobada y enviada.",
          approving: false,
        });
        addMessage({ type: "system", text: "La campaña ha sido ejecutada." });
      } else {
        updateMessage(msgId, { approving: false });
        addMessage({ type: "error", text: "Error al aprobar la campaña." });
      }
    } catch {
      updateMessage(msgId, { approving: false });
      addMessage({ type: "error", text: "Error de conexión al aprobar." });
    }
  }

  async function handleReject(draftId, msgId) {
    updateMessage(msgId, { approving: true });
    try {
      const res = await fetch(`${BACKEND_URL}/api/drafts/${draftId}/reject`, {
        method: "PATCH",
      });
      if (res.ok) {
        updateMessage(msgId, {
          type: "rejected",
          text: "Campaña rechazada.",
          approving: false,
        });
      } else {
        updateMessage(msgId, { approving: false });
        addMessage({ type: "error", text: "Error al rechazar la campaña." });
      }
    } catch {
      updateMessage(msgId, { approving: false });
      addMessage({ type: "error", text: "Error de conexión al rechazar." });
    }
  }

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    addMessage({ type: "user", text });
    setInput("");
    setLoading(true);

    const pendingId = Date.now() + 1;

    try {
      const res = await fetch(`${BACKEND_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: text, eventId: EVENT_ID }),
      });

      const json = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          id: pendingId,
          type: "thinking",
          text: "Analizando datos y preparando campaña...",
          jobId: json.jobId,
          polling: true,
          time: now(),
        },
      ]);

      startPolling(json.jobId, pendingId);
    } catch {
      addMessage({
        type: "error",
        text: "No se pudo conectar con el backend. ¿Está corriendo en localhost:4000?",
      });
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="chat-wrapper">
      <div className="chat-header">
        <div className="chat-header-dot" />
        <h2>Outbounding Automation</h2>
      </div>

      <div className="chat-messages">
        {messages.map((msg) => (
          <MessageRow
            key={msg.id}
            msg={msg}
            onApprove={handleApprove}
            onReject={handleReject}
          />
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="chat-input-area">
        <input
          className="chat-input"
          type="text"
          placeholder="Ej: las ventas están bajas para el evento de mañana..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />
        <button className="chat-button" onClick={sendMessage} disabled={loading}>
          {loading ? "..." : "Enviar"}
        </button>
      </div>
    </div>
  );
}

function MessageRow({ msg, onApprove, onReject }) {
  const isUser = msg.type === "user";

  return (
    <div className={`message-row ${isUser ? "user" : "agent"}`}>
      <div className={`bubble bubble-${msg.type}`}>

        {msg.type === "thinking" && (
          <div className="thinking-dots">
            <span /><span /><span />
          </div>
        )}

        <p>{msg.text}</p>

        {msg.type === "draft" && msg.draft && (
          <DraftCard
            draft={msg.draft}
            chain={msg.chain}
            msgId={msg.id}
            approving={msg.approving}
            onApprove={onApprove}
            onReject={onReject}
          />
        )}

        {msg.jobId && msg.type === "thinking" && (
          <span className="job-tag">job {msg.jobId}</span>
        )}

        <span className="time">{msg.time}</span>
      </div>
    </div>
  );
}

function DraftCard({ draft, chain, msgId, approving, onApprove, onReject }) {
  return (
    <div className="draft-card">
      <div className="draft-meta">
        <span className="chain-badge">{chain}</span>
        <span className="audience-badge">{draft.targetAudienceCount} destinatarios</span>
      </div>

      {draft.subject && (
        <div className="draft-field">
          <span className="draft-label">Asunto</span>
          <p className="draft-value">{draft.subject}</p>
        </div>
      )}

      {draft.body && (
        <div className="draft-field">
          <span className="draft-label">Mensaje</span>
          <p className="draft-value">{draft.body}</p>
        </div>
      )}

      {draft.metadata?.channels && (
        <div className="draft-channels">
          {draft.metadata.channels.map((c) => (
            <span key={c} className="channel-pill">{c}</span>
          ))}
        </div>
      )}

      <div className="draft-actions">
        <button
          className="btn-approve"
          onClick={() => onApprove(draft._id, msgId)}
          disabled={approving}
        >
          {approving ? "..." : "Confirmar y enviar"}
        </button>
        <button
          className="btn-reject"
          onClick={() => onReject(draft._id, msgId)}
          disabled={approving}
        >
          Rechazar
        </button>
      </div>
    </div>
  );
}