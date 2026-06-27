import React from "react";
import { PageHeader } from "../../components/shared/PageHeader";
import { ReportViewer } from "../../components/reports/ReportViewer";
import { useReportStore } from "../../store/reportStore";
import { useCompanyStore } from "../../store/companyStore";
import { FileText, PlusCircle, Trash2, Library } from "lucide-react";

export default function ReportsPage() {
  const { reports, isGenerating, activeReportId, setActiveReportId, deleteReport, generateReport } = useReportStore();
  const { companyData } = useCompanyStore();
  const companyId = companyData?.id ?? "unknown";

  const handleGeneratePDF = async () => {
    await generateReport(companyId, "pdf");
  };

  const handleGeneratePPT = async () => {
    await generateReport(companyId, "ppt");
  };

  const activeReport = reports.find((r) => r.id === activeReportId) || null;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Institutional Research Dossiers"
        description="Comprehensive briefing packages, financial models, and strategic slide decks ready for executive export."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Library & Generation panel */}
        <div className="lg:col-span-1 space-y-6">
          {/* Document Generation Control */}
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-150 mb-4">
              <PlusCircle className="h-4.5 w-4.5 text-blue-600" />
              <h2 className="font-sans font-bold text-xs text-slate-800 uppercase tracking-wider">
                Generate Custom Briefing
              </h2>
            </div>
            <div className="space-y-3">
              <p className="font-sans text-[11px] text-slate-500 leading-relaxed font-semibold">
                Direct the AI research agent to synthesize an up-to-the-minute dossier for{" "}
                <strong className="text-slate-700">{companyData?.name || "the active target"}</strong>:
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  onClick={handleGeneratePDF}
                  disabled={isGenerating}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-sans font-bold rounded-md border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-55 cursor-pointer"
                >
                  <FileText className="h-4 w-4 text-rose-500" />
                  <span>Render PDF</span>
                </button>
                <button
                  onClick={handleGeneratePPT}
                  disabled={isGenerating}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-sans font-bold rounded-md border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-55 cursor-pointer"
                >
                  <FileText className="h-4 w-4 text-amber-500" />
                  <span>Render PPT</span>
                </button>
              </div>
              {isGenerating && (
                <div className="pt-2 animate-pulse flex items-center gap-2 text-[10px] font-sans text-blue-600 font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-ping"></span>
                  <span>Compiling corporate vectors, rendering dossier...</span>
                </div>
              )}
            </div>
          </div>

          {/* Report Library Directory */}
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-150 mb-4">
              <Library className="h-4.5 w-4.5 text-slate-500" />
              <h2 className="font-sans font-bold text-xs text-slate-800 uppercase tracking-wider">
                Intelligence Library
              </h2>
            </div>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {reports.map((rep) => {
                const isActive = rep.id === activeReportId;
                const isPdf = rep.type === "pdf";

                return (
                  <div
                    key={rep.id}
                    className={`group p-3 rounded-md border flex items-start justify-between gap-2.5 transition-all cursor-pointer ${
                      isActive
                        ? "bg-slate-50 border-slate-200 text-slate-900"
                        : "bg-white border-slate-200/60 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex-1 min-w-0" onClick={() => setActiveReportId(rep.id)}>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className={`font-mono text-[8px] font-bold px-1.5 py-0.5 rounded-sm uppercase border ${
                          isPdf
                            ? "bg-rose-50 text-rose-700 border-rose-200"
                            : "bg-amber-50 text-amber-700 border-amber-200"
                        }`}>
                          {rep.type}
                        </span>
                        <span className="font-sans text-[9px] text-slate-400 font-bold">{rep.size}</span>
                      </div>
                      <span className="font-sans font-bold text-xs truncate block hover:text-blue-600">
                        {rep.title}
                      </span>
                      <span className="font-mono text-[9px] text-slate-400 mt-1 block">Compiled: {rep.date}</span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteReport(rep.id);
                      }}
                      className="opacity-0 group-hover:opacity-100 p-1 rounded-sm text-slate-400 hover:text-rose-600 hover:bg-slate-100 transition-all shrink-0 cursor-pointer"
                      title="Delete brief"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                );
              })}
              {reports.length === 0 && (
                <p className="text-center py-6 text-xs text-slate-400 font-sans font-semibold">
                  No dossiers currently stored.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: PDF/PPT Document Viewer */}
        <div className="lg:col-span-2">
          <ReportViewer report={activeReport} />
        </div>
      </div>
    </div>
  );
}
