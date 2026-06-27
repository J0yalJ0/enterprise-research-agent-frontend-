import React, { useState, useRef, useEffect } from "react";
import { Send, ArrowRight, Brain, Sparkles, MessageSquareWarning } from "lucide-react";
import { useChatStore } from "../../store/chatStore";
import { Message } from "./Message";

export const ChatBox: React.FC = () => {
  const { messages, sendMessage, isTyping, suggestedQuestions } = useChatStore();
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isTyping) return;
    const txt = input;
    setInput("");
    await sendMessage(txt);
  };

  const handleSuggestedClick = async (question: string) => {
    if (isTyping) return;
    await sendMessage(question);
  };

  // Scroll to bottom on messages update
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col h-[calc(100vh-280px)] min-h-[500px] rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
      {/* Header Info */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-150 bg-slate-50/20">
        <div className="flex items-center gap-2">
          <Brain className="h-4.5 w-4.5 text-blue-600" />
          <span className="font-sans font-bold text-xs text-slate-800 uppercase tracking-wider">
            Grounded AI Synthesis Engine
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-sans text-[10px] font-bold text-slate-400">
          <Sparkles className="h-3.5 w-3.5 text-blue-500 animate-pulse" />
          <span>Active Context: SEC / Bloomberg Grounded</span>
        </div>
      </div>

      {/* Messages Stream */}
      <div ref={scrollRef} className="flex-1 p-5 overflow-y-auto space-y-4 bg-slate-50/10">
        {messages.map((msg) => (
          <Message key={msg.id} message={msg} />
        ))}

        {/* Dynamic Typing Indicator */}
        {isTyping && (
          <div className="flex gap-4 p-5 rounded-lg border bg-slate-50/50 border-slate-200 animate-pulse">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white border border-blue-500 shadow-sm">
              <Brain className="h-4.5 w-4.5 animate-pulse" />
            </div>
            <div className="flex-1 space-y-2">
              <span className="font-sans font-bold text-xs text-slate-800">
                Aegis AI Reasoning Grid
              </span>
              <div className="flex items-center gap-1.5 pt-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-bounce [animation-delay:-0.3s]"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-bounce [animation-delay:-0.15s]"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-bounce"></span>
                <span className="font-sans text-[10px] text-slate-400 font-bold pl-1.5">
                  Scanning vectors, compiling swot datasets...
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Suggested Questions */}
      <div className="px-5 py-3.5 border-t border-slate-150 bg-white">
        <span className="font-sans text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
          Suggested Analytical Queries:
        </span>
        <div className="flex flex-wrap gap-2">
          {suggestedQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSuggestedClick(q)}
              disabled={isTyping}
              className="inline-flex items-center gap-1.5 text-[11px] font-sans text-slate-600 px-3 py-1.5 rounded-md border border-slate-200 bg-slate-50/30 hover:bg-slate-50 hover:text-blue-600 disabled:opacity-50 transition-all text-left cursor-pointer font-semibold"
            >
              <span>{q}</span>
              <ArrowRight className="h-3 w-3 text-slate-400 shrink-0" />
            </button>
          ))}
        </div>
      </div>

      {/* Chat Input form */}
      <form onSubmit={handleSend} className="p-4 border-t border-slate-150 bg-white flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isTyping}
          placeholder="Ask a question about corporate moats, margins, or supply chain exposure..."
          className="flex-1 rounded-md border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 font-sans text-xs text-slate-800 placeholder-slate-400 shadow-xs transition-all focus:border-blue-600 focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-blue-600 disabled:bg-slate-50"
        />
        <button
          type="submit"
          disabled={!input.trim() || isTyping}
          className="inline-flex h-9.5 w-9.5 items-center justify-center rounded-md bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-40 transition-colors cursor-pointer"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
};
