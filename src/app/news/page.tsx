import React, { useState } from "react";
import { PageHeader } from "../../components/shared/PageHeader";
import { useCompanyStore } from "../../store/companyStore";
import {
  Newspaper,
  TrendingUp,
  Award,
  Calendar,
  Layers,
  Sparkles,
  Info
} from "lucide-react";

export default function NewsPage() {
  const { newsArticles, companyData } = useCompanyStore();
  const [activeFilter, setActiveFilter] = useState<"all" | "positive" | "negative">("all");

  if (!companyData) return null;

  const filteredArticles = newsArticles.filter((art) => {
    if (activeFilter === "all") return true;
    return art.sentiment === activeFilter;
  });

  // Unique topics trending based on company
  const trendingTopics: Record<string, string[]> = {
    nvidia: ["Blackwell supply CoWoS limits", "CUDA hardware software locks", "Hyperscaler custom silicon margins"],
    microsoft: ["Azure Cloud 31% expansion YoY", "Office 365 Copilot monetization", "Nuclear-powered Midwest clustering"],
    tesla: ["Supervised FSD miles milestone", "Megapack utility production capacity", "Optimus manufacturing pilot tests"],
    amazon: ["AWS Bedrock Anthropic integrations", "Proteus logistics robotic deployments", "Rufus shopping conversational guides"],
    openai: ["Reasoning o-series compute overhead", "$6.6B venture capital restructuring", "Sovereign cloud compute clusters"]
  };

  const topics = trendingTopics[companyData.id] || trendingTopics.nvidia;

  const getSentimentStyle = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "bg-emerald-50 text-emerald-800 border-emerald-200";
      case "negative":
        return "bg-rose-50 text-rose-800 border-rose-200";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Market Intelligence & Sentinel"
        description={`Real-time news coverage, sentiment telemetry, and credibility reviews for ${companyData.name}.`}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 columns - Filter and News Feed */}
        <div className="lg:col-span-2 space-y-5">
          {/* Filters Bar */}
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between p-4 bg-white border border-slate-200 rounded-lg">
            <span className="font-sans text-xs font-bold text-slate-500 uppercase tracking-wider">
              News Stream Filters:
            </span>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {(["all", "positive", "negative"] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1.5 text-xs font-sans font-bold rounded-md border transition-colors cursor-pointer ${
                    activeFilter === filter
                      ? "bg-slate-900 border-slate-800 text-white"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)} Coverage
                </button>
              ))}
            </div>
          </div>

          {/* News Feed Stream */}
          <div className="space-y-4">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="p-5 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2 font-sans text-xs text-slate-500 font-semibold">
                        <Calendar className="h-4 w-4 shrink-0 text-slate-400" />
                        <span>{article.date}</span>
                        <span className="text-slate-200">•</span>
                        <strong className="text-slate-700 font-bold">{article.source}</strong>
                      </div>

                      {/* Sentiment Badge */}
                      <span className={`font-mono text-[9px] font-bold px-2 py-0.5 rounded-sm border uppercase ${getSentimentStyle(article.sentiment)}`}>
                        {article.sentiment}
                      </span>
                    </div>

                    <h3 className="font-sans font-bold text-sm text-slate-850 hover:text-blue-600 transition-colors cursor-pointer">
                      {article.title}
                    </h3>

                    <p className="font-sans text-xs text-slate-500 leading-relaxed font-semibold">
                      {article.summary}
                    </p>
                  </div>

                  {/* Impact Alert overlay */}
                  <div className="mt-4 pt-4 border-t border-slate-150 flex items-start gap-2.5 bg-slate-50/40 p-2.5 rounded-lg border border-slate-200/50">
                    <Info className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <span className="font-sans text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Impact Rating</span>
                      <p className="font-sans text-[11px] text-slate-700 font-bold">{article.impact}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center p-8 bg-white border border-slate-200 rounded-lg text-slate-400 font-sans text-xs">
                No matching stories found for the selected filter.
              </div>
            )}
          </div>
        </div>

        {/* Right 1 column - Trend and Credibility widgets */}
        <div className="lg:col-span-1 space-y-6">
          {/* Trending Topics */}
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 pb-3.5 border-b border-slate-150 mb-3.5">
              <TrendingUp className="h-4.5 w-4.5 text-blue-600" />
              <h2 className="font-sans font-bold text-xs text-slate-800 uppercase tracking-wider">
                Trending Strategic Topics
              </h2>
            </div>
            <div className="space-y-3">
              {topics.map((topic, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <div className="h-6 w-6 rounded-full bg-blue-50 text-blue-600 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 border border-blue-100/40">
                    #{index + 1}
                  </div>
                  <span className="font-sans text-xs text-slate-700 font-bold truncate hover:text-blue-600 cursor-pointer">
                    {topic}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Credibility and Source Quality Summary */}
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 pb-3.5 border-b border-slate-150 mb-3.5">
              <Award className="h-4.5 w-4.5 text-blue-600" />
              <h2 className="font-sans font-bold text-xs text-slate-800 uppercase tracking-wider">
                Audited Source Quality
              </h2>
            </div>
            <div className="space-y-4">
              <p className="font-sans text-[11px] text-slate-500 leading-relaxed font-semibold">
                All external source files undergo validation filters to guarantee compliance and remove spam:
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-sans text-slate-600 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                    High Credibility Source (e.g. Bloomberg)
                  </span>
                  <strong className="font-mono text-slate-800 font-bold">92%</strong>
                </div>
                <div className="flex justify-between items-center text-xs font-sans text-slate-600 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                    Medium Credibility Source (e.g. Wired)
                  </span>
                  <strong className="font-mono text-slate-800 font-bold">8%</strong>
                </div>
                <div className="flex justify-between items-center text-xs font-sans text-slate-600 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-rose-500"></span>
                    Low Credibility Source
                  </span>
                  <strong className="font-mono text-slate-800 font-bold">0%</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
