import React, { useState } from "react";
import { PageHeader } from "../../components/shared/PageHeader";
import { useCompanyStore } from "../../store/companyStore";
import {
  Users,
  Grid,
  ShieldCheck,
  ShieldAlert,
  ArrowUpRight,
  TrendingUp,
  Table
} from "lucide-react";

export default function CompetitorsPage() {
  const { companyData } = useCompanyStore();
  const [activeCompIndex, setActiveCompIndex] = useState(0);

  if (!companyData || !companyData.competitors || companyData.competitors.length === 0) {
    return (
      <div className="p-8 text-center bg-white border border-slate-100 rounded-lg">
        <Users className="h-10 w-10 text-slate-300 mx-auto" />
        <h3 className="mt-4 text-sm font-medium text-slate-700">Competitors profile unavailable</h3>
        <p className="mt-1 text-xs text-slate-400">Unable to locate competitors registers for this private entity.</p>
      </div>
    );
  }

  const competitor = companyData.competitors[activeCompIndex];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Competitive Intel & Peer Audit"
        description={`Analyzing market share positions, swot valuations, and structural performance gaps for ${companyData.name} vs. peer groups.`}
      />

      {/* Competitor Overview Table */}
      <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2 pb-4 border-b border-slate-150 mb-4">
          <Table className="h-4.5 w-4.5 text-blue-600" />
          <h2 className="font-sans font-bold text-xs text-slate-800 uppercase tracking-wider">
            Sector Peer Metrics Table
          </h2>
        </div>
        <div className="overflow-x-auto rounded-md border border-slate-200">
          <table className="w-full text-left font-sans text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                <th className="py-2.5 px-4">Competitor Name</th>
                <th className="py-2.5 px-4">Ticker</th>
                <th className="py-2.5 px-4">Market Cap</th>
                <th className="py-2.5 px-4">Annual Revenue</th>
                <th className="py-2.5 px-4 text-right">Segment Share</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 font-semibold">
              {/* Primary target company row */}
              <tr className="bg-blue-50/20 font-bold text-blue-900">
                <td className="py-3 px-4 flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                  {companyData.name} (Target)
                </td>
                <td className="py-3 px-4 font-mono">{companyData.ticker}</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">${companyData.financials[companyData.financials.length - 1]?.revenue}B</td>
                <td className="py-3 px-4 text-right font-mono text-blue-700 font-bold">
                  {companyData.marketShare[0]?.share}%
                </td>
              </tr>
              {/* Peer rows */}
              {companyData.competitors.map((comp, idx) => {
                const isActive = idx === activeCompIndex;
                return (
                  <tr
                    key={idx}
                    onClick={() => setActiveCompIndex(idx)}
                    className={`hover:bg-slate-50/50 cursor-pointer transition-colors ${
                      isActive ? "bg-slate-50 text-slate-900" : ""
                    }`}
                  >
                    <td className="py-3 px-4 flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-300"></span>
                      {comp.name}
                    </td>
                    <td className="py-3 px-4 font-mono text-slate-500 font-bold">{comp.ticker}</td>
                    <td className="py-3 px-4 text-slate-500">{comp.marketCap}</td>
                    <td className="py-3 px-4 text-slate-500">{comp.revenue}</td>
                    <td className="py-3 px-4 text-right font-mono text-slate-500 font-bold">{comp.share}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* SWOT Comparison Grid */}
      {competitor && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Grid className="h-4.5 w-4.5 text-slate-500" />
              <h2 className="font-sans font-bold text-xs text-slate-800 uppercase tracking-wider">
                Competitive SWOT Assessment: <strong className="text-blue-600 font-bold">{competitor.name}</strong>
              </h2>
            </div>

            {/* Toggle tabs */}
            <div className="flex flex-wrap gap-1.5 border border-slate-200 p-1 bg-white rounded-md">
              {companyData.competitors.map((comp, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCompIndex(idx)}
                  className={`px-3 py-1 text-[11px] font-sans font-bold rounded-sm transition-colors cursor-pointer ${
                    idx === activeCompIndex
                      ? "bg-slate-900 text-white"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {comp.ticker} SWOT
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* STRENGTHS */}
            <div className="p-5 rounded-lg border border-slate-200 bg-white shadow-xs">
              <div className="flex items-center gap-2 pb-3.5 border-b border-emerald-100 mb-3.5 text-emerald-700">
                <ShieldCheck className="h-4.5 w-4.5" />
                <h3 className="font-sans font-bold text-xs uppercase tracking-wider">Strengths & Core Competences</h3>
              </div>
              <ul className="space-y-2 text-xs font-sans text-slate-600 leading-normal">
                {competitor.strengths.map((str, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WEAKNESSES */}
            <div className="p-5 rounded-lg border border-slate-200 bg-white shadow-xs">
              <div className="flex items-center gap-2 pb-3.5 border-b border-amber-100 mb-3.5 text-amber-700">
                <ShieldAlert className="h-4.5 w-4.5" />
                <h3 className="font-sans font-bold text-xs uppercase tracking-wider">Weaknesses & Vulnerabilities</h3>
              </div>
              <ul className="space-y-2 text-xs font-sans text-slate-600 leading-normal">
                {competitor.weaknesses.map((weak, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                    <span>{weak}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* OPPORTUNITIES */}
            <div className="p-5 rounded-lg border border-slate-200 bg-white shadow-xs">
              <div className="flex items-center gap-2 pb-3.5 border-b border-blue-100 mb-3.5 text-blue-700">
                <ArrowUpRight className="h-4.5 w-4.5" />
                <h3 className="font-sans font-bold text-xs uppercase tracking-wider">Strategic Growth Opportunities</h3>
              </div>
              <ul className="space-y-2 text-xs font-sans text-slate-600 leading-normal">
                {competitor.opportunities.map((opp, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                    <span>{opp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* THREATS */}
            <div className="p-5 rounded-lg border border-slate-200 bg-white shadow-xs">
              <div className="flex items-center gap-2 pb-3.5 border-b border-rose-100 mb-3.5 text-rose-700">
                <TrendingUp className="h-4.5 w-4.5" />
                <h3 className="font-sans font-bold text-xs uppercase tracking-wider">Market Threat Overlays</h3>
              </div>
              <ul className="space-y-2 text-xs font-sans text-slate-600 leading-normal">
                {competitor.threats.map((thr, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0"></span>
                    <span>{thr}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
