import React from "react";
import { User, Sparkles, BookOpen } from "lucide-react";
import { ChatMessage } from "../../types";

interface MessageProps {
  message: ChatMessage;
}

export const Message: React.FC<MessageProps> = ({ message }) => {
  const isAssistant = message.role === "assistant";

  return (
    <div
      className={`flex gap-4 p-5 rounded-lg border transition-all duration-150 ${
        isAssistant
          ? "bg-slate-50/50 border-slate-100"
          : "bg-white border-slate-100"
      }`}
    >
      {/* Icon Badge */}
      <div
        className={`flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-lg border ${
          isAssistant
            ? "bg-blue-600 border-blue-500 text-white"
            : "bg-slate-100 border-slate-200 text-slate-700"
        }`}
      >
        {isAssistant ? <Sparkles className="h-4.5 w-4.5" /> : <User className="h-4.5 w-4.5" />}
      </div>

      {/* Content area */}
      <div className="flex-1 space-y-2">
        <div className="flex items-center justify-between">
          <span className="font-sans font-semibold text-xs text-slate-800">
            {isAssistant ? "Aegis AI Research System" : "Partner Analyst"}
          </span>
          <span className="font-mono text-[9px] text-slate-400">
            {message.timestamp}
          </span>
        </div>

        <div className="font-sans text-xs text-slate-700 leading-relaxed space-y-3.5 whitespace-pre-line">
          {message.content}
        </div>

        {/* Embedded Citations */}
        {isAssistant && message.sources && message.sources.length > 0 && (
          <div className="pt-3.5 mt-3 border-t border-slate-100 flex flex-wrap gap-2.5 items-center">
            <div className="flex items-center gap-1 text-slate-400">
              <BookOpen className="h-3.5 w-3.5" />
              <span className="font-sans text-[10px] font-semibold tracking-wide uppercase">Citations:</span>
            </div>
            {message.sources.map((src, idx) => (
              <span
                key={src.id}
                title={src.snippet}
                className="inline-flex items-center gap-1 font-mono text-[9px] font-semibold px-2 py-0.5 rounded-sm bg-slate-100 text-slate-600 border border-slate-200"
              >
                [{idx + 1}] {src.title} ({src.source})
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
