import React from "react";
import { BookMarked, ExternalLink, Calendar } from "lucide-react";
import { MessageSource } from "../../types";

interface SourcesProps {
  sources: MessageSource[];
}

export const Sources: React.FC<SourcesProps> = ({ sources }) => {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 pb-4 border-b border-slate-150 mb-4">
        <BookMarked className="h-4.5 w-4.5 text-blue-600" />
        <h3 className="font-sans font-bold text-xs text-slate-800 uppercase tracking-wider">
          Semantic Source Grounding
        </h3>
      </div>

      {sources.length > 0 ? (
        <div className="space-y-4">
          <p className="font-sans text-[11px] text-slate-500 leading-relaxed font-semibold">
            The active AI query response was formulated using semantic matches across the following corporate databases:
          </p>
          {sources.map((src, idx) => (
            <div
              key={src.id}
              className="p-3.5 rounded-lg bg-slate-50/50 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all"
            >
              <div className="flex items-start justify-between gap-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-[10px] font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded-sm border border-blue-100">
                    [{idx + 1}]
                  </span>
                  <span className="font-sans text-xs font-bold text-slate-800 truncate max-w-[160px]">
                    {src.title}
                  </span>
                </div>
                <span className="font-sans text-[9px] font-bold px-2 py-0.5 rounded-sm bg-slate-100 text-slate-600 border border-slate-200 uppercase tracking-wider">
                  {src.source}
                </span>
              </div>
              <p className="mt-2 text-[11px] text-slate-600 leading-relaxed font-sans font-medium italic">
                "{src.snippet}"
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-slate-400 font-sans text-xs">
          No active search citations mapped. Ask a question to see sources.
        </div>
      )}
    </div>
  );
};
