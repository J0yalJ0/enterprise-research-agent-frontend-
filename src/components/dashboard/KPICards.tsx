import React from "react";
import {
  TrendingUp,
  ShieldCheck,
  Zap,
  Activity,
  AlertTriangle,
  Award
} from "lucide-react";
import { KPIMetrics } from "../../types";

interface KPICardsProps {
  metrics: KPIMetrics;
}

export const KPICards: React.FC<KPICardsProps> = ({ metrics }) => {
  const getProgressColor = (score: number, type: "score" | "risk") => {
    if (type === "risk") {
      if (score > 50) return "bg-rose-500";
      if (score > 30) return "bg-amber-500";
      return "bg-emerald-500";
    }
    if (score > 90) return "bg-blue-600";
    if (score > 80) return "bg-indigo-500";
    return "bg-amber-500";
  };

  const kpiData = [
    {
      title: "OVERALL ADVISORY SCORE",
      score: metrics.overallScore,
      icon: Award,
      type: "score" as const,
      description: "Aggregated financial strength, moat depth, and long-term viability index.",
      label: metrics.overallScore > 90 ? "Excellent Opportunity" : "Strong Accumulate"
    },
    {
      title: "GROWTH SCORE",
      score: metrics.growthScore,
      icon: TrendingUp,
      type: "score" as const,
      description: "CAGR projections, market share velocity, and enterprise software margins.",
      label: "Hyper-Growth Phase"
    },
    {
      title: "RISK EXPOSURE SCORE",
      score: metrics.riskScore,
      icon: ShieldCheck,
      type: "risk" as const,
      description: "Supplier concentration, regulatory exposure, and leverage risk metrics.",
      label: metrics.riskScore > 40 ? "Elevated Warning" : "Well Managed Risk"
    },
    {
      title: "INNOVATION COEFFICIENT",
      score: metrics.innovationScore,
      icon: Zap,
      type: "score" as const,
      description: "Patent volume growth, research capital velocity, and frontier model design.",
      label: "Disruptive Innovator"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpiData.map((kpi, idx) => {
        const Icon = kpi.icon;
        const colorClass = getProgressColor(kpi.score, kpi.type);
        const isRisk = kpi.type === "risk";

        return (
          <div
            key={idx}
            className="flex flex-col justify-between p-5 rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-150 hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-sans text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                  {kpi.title}
                </span>
                <div className={`p-1.5 rounded-md ${
                  isRisk && kpi.score > 40 
                    ? "bg-rose-50 text-rose-600 border border-rose-100"
                    : "bg-slate-50 text-slate-600 border border-slate-200"
                }`}>
                  <Icon className="h-4 w-4" />
                </div>
              </div>

              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="font-sans text-3xl font-extrabold text-slate-900 tracking-tight">
                  {kpi.score}
                </span>
                <span className="font-sans text-[11px] text-slate-400 font-bold">/ 100</span>
              </div>

              <p className="mt-2 text-[11px] text-slate-500 leading-relaxed font-sans min-h-[44px]">
                {kpi.description}
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between text-[10px] font-semibold mb-1.5">
                <span className={`px-2 py-0.5 rounded-sm font-sans ${
                  isRisk && kpi.score > 40
                    ? "bg-rose-50 text-rose-700 border border-rose-200"
                    : "bg-slate-50 text-slate-600 border border-slate-200"
                }`}>
                  {kpi.label}
                </span>
                <span className="font-mono text-slate-500 font-bold">{kpi.score}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${colorClass}`}
                  style={{ width: `${kpi.score}%` }}
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
