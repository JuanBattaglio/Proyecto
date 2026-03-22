module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/outbounding_automation/apps/frontend/app/components/chat.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Chat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/outbounding_automation/apps/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/outbounding_automation/apps/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
const EVENT_ID = "1985454109689";
const POLL_INTERVAL = 2500;
const MAX_POLLS = 40;
function Chat() {
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: "welcome",
            type: "system",
            text: "Sistema listo. Describe qué campaña quieres lanzar.",
            time: ""
        }
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const bottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pollRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        bottomRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [
        messages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            Object.values(pollRefs.current).forEach(clearInterval);
        };
    }, []);
    function now() {
        if ("TURBOPACK compile-time truthy", 1) return "";
        //TURBOPACK unreachable
        ;
    }
    function addMessage(msg) {
        setMessages((prev)=>[
                ...prev,
                {
                    id: Date.now() + Math.random(),
                    time: now(),
                    ...msg
                }
            ]);
    }
    function updateMessage(id, patch) {
        setMessages((prev)=>prev.map((m)=>m.id === id ? {
                    ...m,
                    ...patch
                } : m));
    }
    function startPolling(jobId, msgId) {
        let count = 0;
        const interval = setInterval(async ()=>{
            count++;
            if (count > MAX_POLLS) {
                clearInterval(interval);
                updateMessage(msgId, {
                    type: "error",
                    text: "La IA tardó demasiado. Intenta de nuevo.",
                    polling: false
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
                            text: json.result.subject ? `${json.result.subject}\n\n${json.result.body}` : `Cadena ejecutada: ${json.result.chain}.`,
                            polling: false
                        });
                    }
                } else if (json.state === "failed") {
                    clearInterval(interval);
                    updateMessage(msgId, {
                        type: "error",
                        text: "El job falló en el backend.",
                        polling: false
                    });
                }
            } catch  {
                clearInterval(interval);
                updateMessage(msgId, {
                    type: "error",
                    text: "Error al consultar el estado del job.",
                    polling: false
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
                polling: false
            });
        } catch  {
            updateMessage(msgId, {
                type: "error",
                text: "No se pudo cargar el borrador.",
                polling: false
            });
        }
    }
    async function handleApprove(draftId, msgId) {
        updateMessage(msgId, {
            approving: true
        });
        try {
            const res = await fetch(`${BACKEND_URL}/api/drafts/${draftId}/approve`, {
                method: "PATCH"
            });
            if (res.ok) {
                updateMessage(msgId, {
                    type: "approved",
                    text: "Campaña aprobada y enviada.",
                    approving: false
                });
                addMessage({
                    type: "system",
                    text: "La campaña ha sido ejecutada."
                });
            } else {
                updateMessage(msgId, {
                    approving: false
                });
                addMessage({
                    type: "error",
                    text: "Error al aprobar la campaña."
                });
            }
        } catch  {
            updateMessage(msgId, {
                approving: false
            });
            addMessage({
                type: "error",
                text: "Error de conexión al aprobar."
            });
        }
    }
    async function handleReject(draftId, msgId) {
        updateMessage(msgId, {
            approving: true
        });
        try {
            const res = await fetch(`${BACKEND_URL}/api/drafts/${draftId}/reject`, {
                method: "PATCH"
            });
            if (res.ok) {
                updateMessage(msgId, {
                    type: "rejected",
                    text: "Campaña rechazada.",
                    approving: false
                });
            } else {
                updateMessage(msgId, {
                    approving: false
                });
                addMessage({
                    type: "error",
                    text: "Error al rechazar la campaña."
                });
            }
        } catch  {
            updateMessage(msgId, {
                approving: false
            });
            addMessage({
                type: "error",
                text: "Error de conexión al rechazar."
            });
        }
    }
    async function sendMessage() {
        const text = input.trim();
        if (!text || loading) return;
        addMessage({
            type: "user",
            text
        });
        setInput("");
        setLoading(true);
        const pendingId = Date.now() + 1;
        try {
            const res = await fetch(`${BACKEND_URL}/api/chat`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    prompt: text,
                    eventId: EVENT_ID
                })
            });
            const json = await res.json();
            setMessages((prev)=>[
                    ...prev,
                    {
                        id: pendingId,
                        type: "thinking",
                        text: "Analizando datos y preparando campaña...",
                        jobId: json.jobId,
                        polling: true,
                        time: now()
                    }
                ]);
            startPolling(json.jobId, pendingId);
        } catch  {
            addMessage({
                type: "error",
                text: "No se pudo conectar con el backend. ¿Está corriendo en localhost:4000?"
            });
        } finally{
            setLoading(false);
        }
    }
    function handleKeyDown(e) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "chat-wrapper",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chat-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chat-header-dot"
                    }, void 0, false, {
                        fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Outbounding Automation"
                    }, void 0, false, {
                        fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chat-messages",
                children: [
                    messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MessageRow, {
                            msg: msg,
                            onApprove: handleApprove,
                            onReject: handleReject
                        }, msg.id, false, {
                            fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: bottomRef
                    }, void 0, false, {
                        fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                lineNumber: 228,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chat-input-area",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "chat-input",
                        type: "text",
                        placeholder: "Ej: las ventas están bajas para el evento de mañana...",
                        value: input,
                        onChange: (e)=>setInput(e.target.value),
                        onKeyDown: handleKeyDown,
                        disabled: loading
                    }, void 0, false, {
                        fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "chat-button",
                        onClick: sendMessage,
                        disabled: loading,
                        children: loading ? "..." : "Enviar"
                    }, void 0, false, {
                        fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                lineNumber: 240,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
        lineNumber: 222,
        columnNumber: 5
    }, this);
}
function MessageRow({ msg, onApprove, onReject }) {
    const isUser = msg.type === "user";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `message-row ${isUser ? "user" : "agent"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `bubble bubble-${msg.type}`,
            children: [
                msg.type === "thinking" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "thinking-dots",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                            fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                            lineNumber: 267,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                            fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                            lineNumber: 267,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                            fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                            lineNumber: 267,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                    lineNumber: 266,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: msg.text
                }, void 0, false, {
                    fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                    lineNumber: 271,
                    columnNumber: 9
                }, this),
                msg.type === "draft" && msg.draft && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DraftCard, {
                    draft: msg.draft,
                    chain: msg.chain,
                    msgId: msg.id,
                    approving: msg.approving,
                    onApprove: onApprove,
                    onReject: onReject
                }, void 0, false, {
                    fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                    lineNumber: 274,
                    columnNumber: 11
                }, this),
                msg.jobId && msg.type === "thinking" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "job-tag",
                    children: [
                        "job ",
                        msg.jobId
                    ]
                }, void 0, true, {
                    fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                    lineNumber: 285,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "time",
                    children: msg.time
                }, void 0, false, {
                    fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                    lineNumber: 288,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
            lineNumber: 263,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
        lineNumber: 262,
        columnNumber: 5
    }, this);
}
function DraftCard({ draft, chain, msgId, approving, onApprove, onReject }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "draft-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "draft-meta",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chain-badge",
                        children: chain
                    }, void 0, false, {
                        fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "audience-badge",
                        children: [
                            draft.targetAudienceCount,
                            " destinatarios"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                lineNumber: 297,
                columnNumber: 7
            }, this),
            draft.subject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "draft-field",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "draft-label",
                        children: "Asunto"
                    }, void 0, false, {
                        fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                        lineNumber: 304,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "draft-value",
                        children: draft.subject
                    }, void 0, false, {
                        fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                        lineNumber: 305,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                lineNumber: 303,
                columnNumber: 9
            }, this),
            draft.body && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "draft-field",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "draft-label",
                        children: "Mensaje"
                    }, void 0, false, {
                        fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                        lineNumber: 311,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "draft-value",
                        children: draft.body
                    }, void 0, false, {
                        fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                        lineNumber: 312,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                lineNumber: 310,
                columnNumber: 9
            }, this),
            draft.metadata?.channels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "draft-channels",
                children: draft.metadata.channels.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "channel-pill",
                        children: c
                    }, c, false, {
                        fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                        lineNumber: 319,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                lineNumber: 317,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "draft-actions",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-approve",
                        onClick: ()=>onApprove(draft._id, msgId),
                        disabled: approving,
                        children: approving ? "..." : "Confirmar y enviar"
                    }, void 0, false, {
                        fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$outbounding_automation$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-reject",
                        onClick: ()=>onReject(draft._id, msgId),
                        disabled: approving,
                        children: "Rechazar"
                    }, void 0, false, {
                        fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                        lineNumber: 332,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
                lineNumber: 324,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/outbounding_automation/apps/frontend/app/components/chat.jsx",
        lineNumber: 296,
        columnNumber: 5
    }, this);
}
}),
"[project]/outbounding_automation/apps/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/outbounding_automation/apps/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/outbounding_automation/apps/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/outbounding_automation/apps/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/outbounding_automation/apps/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7093d2be._.js.map