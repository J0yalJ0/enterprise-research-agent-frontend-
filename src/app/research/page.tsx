import React from "react";
import { PageHeader } from "../../components/shared/PageHeader";
import { useCompanyStore } from "../../store/companyStore";
import { Building2, Landmark, HelpCircle, Layers, CheckCircle, Award, Compass } from "lucide-react";

export default function ResearchPage() {
  const { companyData } = useCompanyStore();

  if (!companyData) return null;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Strategic Asset Evaluation"
        description={`Detailed intelligence profile concerning core structures, business architectures, and operating vectors of ${companyData.name}.`}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Company Summary & Operations */}
        <div className="lg:col-span-2 space-y-6">
          {/* Overview */}
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 pb-4 border-b border-slate-150 mb-4">
              <Building2 className="h-4.5 w-4.5 text-blue-600" />
              <h2 className="font-sans font-bold text-xs text-slate-800 uppercase tracking-wider">
                Corporate Dossier Overview
              </h2>
            </div>
            <p className="font-sans text-xs text-slate-600 leading-relaxed">
              {companyData.overview}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-150">
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-bold tracking-wider uppercase block">Founded</span>
                <span className="text-xs font-bold text-slate-800">{companyData.founded}</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-bold tracking-wider uppercase block">Headquarters</span>
                <span className="text-xs font-bold text-slate-800 truncate block">{companyData.headquarters}</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-bold tracking-wider uppercase block">Global Employees</span>
                <span className="text-xs font-bold text-slate-800">{companyData.employees}</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-bold tracking-wider uppercase block">Sector Group</span>
                <span className="text-xs font-bold text-slate-800 truncate block">{companyData.industry}</span>
              </div>
            </div>
          </div>

          {/* Product Portfolio */}
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 pb-4 border-b border-slate-150 mb-4">
              <Layers className="h-4.5 w-4.5 text-blue-600" />
              <h2 className="font-sans font-bold text-xs text-slate-800 uppercase tracking-wider">
                Active Product Portfolio & Segments
              </h2>
            </div>
            <div className="space-y-4">
              {companyData.products.map((prod, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-slate-50/50 border border-slate-200 flex items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <span className="font-sans text-xs font-bold text-slate-800">
                      {prod.name}
                    </span>
                    <p className="font-sans text-[11px] text-slate-500 leading-relaxed">
                      {prod.description}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-[9px] font-bold px-2 py-0.5 rounded-sm bg-blue-50 text-blue-700 border border-blue-100 uppercase tracking-wider">
                    {prod.segment}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column - Business Model & Team */}
        <div className="lg:col-span-1 space-y-6">
          {/* Business Model Canvas */}
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 pb-4 border-b border-slate-150 mb-4">
              <Compass className="h-4.5 w-4.5 text-blue-600" />
              <h2 className="font-sans font-bold text-xs text-slate-800 uppercase tracking-wider">
                Operating Architecture
              </h2>
            </div>
            <div className="space-y-4">
              <div>
                <span className="font-sans text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Business Model Engine
                </span>
                <p className="mt-1 font-sans text-[11px] text-slate-600 leading-relaxed">
                  {companyData.businessModel}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-150">
                <span className="font-sans text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                  Primary Revenue Channels
                </span>
                <ul className="space-y-2">
                  {companyData.revenueStreams.map((stream, idx) => (
                    <li key={idx} className="flex gap-2 items-start text-[11px] font-sans text-slate-600">
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{stream}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Executive Leadership Team */}
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 pb-4 border-b border-slate-150 mb-4">
              <Award className="h-4.5 w-4.5 text-blue-600" />
              <h2 className="font-sans font-bold text-xs text-slate-800 uppercase tracking-wider">
                Executive Org Board
              </h2>
            </div>
            <div className="space-y-5">
              {companyData.leadership.map((member, index) => (
                <div key={index} className="flex gap-3.5 items-start">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="h-10 w-10 rounded-full object-cover border border-slate-200 shrink-0"
                  />
                  <div className="space-y-0.5">
                    <span className="font-sans font-bold text-xs text-slate-800 block">
                      {member.name}
                    </span>
                    <span className="font-sans text-[10px] text-blue-600 font-bold block">
                      {member.role}
                    </span>
                    <p className="font-sans text-[10px] text-slate-400 leading-normal mt-1">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
