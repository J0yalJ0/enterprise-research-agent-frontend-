import React, { useState } from "react";
import { Brain, Sparkles, RefreshCw, Layers, CheckCircle2, Terminal } from "lucide-react";
import { useCompanyStore } from "../../store/companyStore";

export const AgentStatus: React.FC = () => {
  const { agentState, analyzeCompany, companyData } = useCompanyStore();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleManualReIndex = async () => {
    if (!companyData?.name) return;

    setIsRefreshing(true);
    await analyzeCompany(companyData.name);
    setIsRefreshing(false);
  };

  const getStatusDetails = (status: typeof agentState.status) => {
    switch (status) {
      case "searching":
        return {
          bg: "bg-blue-50 border-blue-100",
          text: "text-blue-700",
          icon: <RefreshCw className="h-4 w-4 animate-spin text-blue-600" />,
          title: "Crawling Repositories"
        };
      case "synthesizing":
        return {
          bg: "bg-indigo-50 border-indigo-100",
          text: "text-indigo-700",
          icon: <Brain className="h-4 w-4 text-indigo-600 animate-pulse" />,
          title: "Synthesizing Moat Vectors"
        };
      case "generating":
        return {
          bg: "bg-amber-50 border-amber-100",
          text: "text-amber-700",
          icon: <Sparkles className="h-4 w-4 text-amber-500" />,
          title: "Rendering Executive Dossier"
        };
      case "completed":
        return {
          bg: "bg-emerald-50 border-emerald-100",
          text: "text-emerald-700",
          icon: <CheckCircle2 className="h-4 w-4 text-emerald-600" />,
          title: "Analysis Finalized"
        };
      default:
        return {
          bg: "bg-slate-50 border-slate-100",
          text: "text-slate-600",
          icon: <Layers className="h-4 w-4 text-slate-500" />,
          title: "Active Monitoring"
        };
    }
  };

  const details = getStatusDetails(agentState.status);

  const pipelineLogs = [
    { time: "17:02:11", action: "Grounding initialized against SEC Edgar, Form 10-K parsed." },
    { time: "17:02:12", action: "Corporate SWOT vector extraction compiled with high-fidelity margins." },
    { time: "17:02:13", action: "Completed real-time news crawler feed integration across 5 international hubs." },
    { time: "17:02:14", action: "Intelligence model awaiting executive queries." }
  ];

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between pb-4 border-b border-slate-150 mb-4">
        <div className="flex items-center gap-2.5">
          <Terminal className="h-4.5 w-4.5 text-slate-500" />
          <h2 className="font-sans font-bold text-xs text-slate-800 uppercase tracking-wider">
            Agent Operational Monitor
          </h2>
        </div>
        <button
          onClick={handleManualReIndex}
          disabled={!companyData?.name || agentState.status !== "idle" || isRefreshing}
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-sans font-semibold rounded-md border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-50 transition-colors cursor-pointer"
        >
          <RefreshCw className={`h-3 w-3 ${isRefreshing ? "animate-spin" : ""}`} />
          <span>Re-Analyze Target</span>
        </button>
      </div>

      <div className={`p-4 rounded-lg border flex items-start gap-3 ${details.bg} border-slate-200/50`}>
        <div className="mt-0.5">{details.icon}</div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className={`font-sans text-xs font-bold ${details.text}`}>
              {details.title.toUpperCase()}
            </span>
            <span className="font-mono text-[9px] text-slate-400 font-bold">TIMESTAMP: 2026-06-23</span>
          </div>
          <p className="mt-1 text-xs text-slate-700 leading-relaxed font-sans font-semibold">
            {agentState.activity}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <span className="font-sans text-[10px] font-bold text-slate-400 tracking-wider uppercase block mb-2.5">
          SYSTEM TELEMETRY TRACE LOGS
        </span>
        <div className="rounded-md bg-slate-900 border border-slate-850 p-3 font-mono text-[10px] text-slate-300 leading-normal space-y-1.5 shadow-inner">
          {pipelineLogs.map((log, index) => (
            <div key={index} className="flex gap-2.5 items-start">
              <span className="text-slate-500 select-none font-semibold">[{log.time}]</span>
              <span className="text-blue-400 select-none font-bold">SYS:</span>
              <span className="flex-1 text-slate-300">{log.action}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
