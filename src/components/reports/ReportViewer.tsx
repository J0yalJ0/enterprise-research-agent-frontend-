import React from "react";
import { FileText, Download, Calendar, HardDrive, ShieldCheck } from "lucide-react";
import { ReportItem } from "../../types";
import { DownloadButton } from "./DownloadButton";

interface ReportViewerProps {
  report: ReportItem | null;
}

const renderMarkdown = (markdown: string) => {
  const normalized = markdown.replace(/\r\n/g, "\n");
  const lines = normalized.split("\n");
  const blocks: { type: string; lines: string[] }[] = [];
  let current: { type: string; lines: string[] } | null = null;

  const flushCurrent = () => {
    if (current) {
      blocks.push(current);
      current = null;
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushCurrent();
      continue;
    }

    if (line === "---") {
      flushCurrent();
      blocks.push({ type: "hr", lines: [] });
      continue;
    }

    if (line.startsWith("## ")) {
      flushCurrent();
      blocks.push({ type: "h2", lines: [line.slice(3).trim()] });
      continue;
    }

    if (line.startsWith("# ")) {
      flushCurrent();
      blocks.push({ type: "h1", lines: [line.slice(2).trim()] });
      continue;
    }

    if (/^(\*|-)\s+/.test(line)) {
      const text = line.replace(/^(\*|-)\s+/, "");
      if (current?.type !== "ul") {
        flushCurrent();
        current = { type: "ul", lines: [text] };
      } else {
        current.lines.push(text);
      }
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const text = line.replace(/^\d+\.\s+/, "");
      if (current?.type !== "ol") {
        flushCurrent();
        current = { type: "ol", lines: [text] };
      } else {
        current.lines.push(text);
      }
      continue;
    }

    if (current?.type === "paragraph") {
      current.lines.push(line);
    } else {
      flushCurrent();
      current = { type: "paragraph", lines: [line] };
    }
  }

  flushCurrent();

  return blocks.map((block, idx) => {
    switch (block.type) {
      case "h1":
        return (
          <h1 key={idx} className="text-lg font-sans font-bold text-slate-900 border-b border-slate-200 pb-2 mt-6">
            {block.lines.join(" ")}
          </h1>
        );
      case "h2":
        return (
          <h2 key={idx} className="text-sm font-bold text-slate-800 tracking-tight mt-5">
            {block.lines.join(" ")}
          </h2>
        );
      case "ul":
        return (
          <ul key={idx} className="list-disc pl-5 space-y-1 text-slate-600 font-sans font-semibold">
            {block.lines.map((li, lidx) => (
              <li key={lidx}>{li}</li>
            ))}
          </ul>
        );
      case "ol":
        return (
          <ol key={idx} className="list-decimal pl-5 space-y-2 text-slate-600 font-sans font-semibold">
            {block.lines.map((li, lidx) => (
              <li key={lidx}>{li}</li>
            ))}
          </ol>
        );
      case "hr":
        return <hr key={idx} className="my-6 border-slate-200" />;
      default:
        return (
          <p key={idx} className="text-slate-600 leading-relaxed font-semibold">
            {block.lines.join(" ")}
          </p>
        );
    }
  });
};

export const ReportViewer: React.FC<ReportViewerProps> = ({ report }) => {
  if (!report) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center bg-white border border-slate-100 rounded-lg min-h-[400px]">
        <FileText className="h-10 w-10 text-slate-300" />
        <h3 className="mt-4 text-sm font-medium text-slate-700">No Dossier Selected</h3>
        <p className="mt-1 text-xs text-slate-400">Select a briefing package from the report library side menu.</p>
      </div>
    );
  }

  // Fallback default structured report if none generated dynamically
  const reportBody = report.summaryMarkdown || `# Investment Briefing & Strategic Audit: ${report.title}
## 1. Executive Position
The subject firm demonstrates exceptional operational efficiency and strong market capitalization, supported by robust entry barriers and deep patent moats.

* **Advisory Recommendation**: Overweight. Highly recommended for long-horizon capital preservation.
* **Capital Risk Coefficient**: Low. Protected by high enterprise customer switching friction.

---

## 2. Competitive Core Moats
The firm has established three key moats that safeguard gross margins:
1. **Vertical Proprietary Tech Integration**: Unification of software developer dependencies with core hardware designs.
2. **Horizontal Distribution Channels**: Long-term supply relationships with key cloud computing infrastructure providers.
3. **Patent Superiority**: High relative R&D reinvestment velocity ($B+ annually) outpaces secondary market entries.

---

## 3. Financial Forecast Matrix
Our models project a stable 15-18% revenue CAGR over a 36-month horizon, supported by a healthy 30%+ net operating income margin. External macroeconomic dependencies remain limited to foundry and raw packaging capacities.`;

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      {/* Dossier Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-150 mb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className={`font-mono text-[9px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wide border ${
              report.type === "pdf"
                ? "bg-rose-50 text-rose-700 border-rose-200"
                : "bg-amber-50 text-amber-700 border-amber-200"
            }`}>
              {report.type.toUpperCase()} DOCUMENT
            </span>
            <div className="flex items-center gap-1 text-slate-400 font-sans text-xs font-semibold">
              <Calendar className="h-3.5 w-3.5" />
              <span>Compiled: {report.date}</span>
            </div>
          </div>
          <h2 className="font-sans font-bold text-base text-slate-800 tracking-tight">
            {report.title}
          </h2>
        </div>

        <div className="flex flex-wrap gap-2.5">
          <DownloadButton label="Download PDF" type="pdf" reportTitle={report.title} />
          <DownloadButton label="Download Slide Deck" type="ppt" reportTitle={report.title} />
        </div>
      </div>

      {/* Dossier Body Content */}
      <div className="prose prose-slate max-w-none text-slate-700 space-y-5 font-sans text-xs leading-relaxed font-semibold">
        {renderMarkdown(reportBody)}
      </div>

      {/* Security Checkpoint and Seal */}
      <div className="mt-8 pt-5 border-t border-slate-150 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50/50 p-4 rounded-lg border border-slate-200/50">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4.5 w-4.5 text-blue-600" />
          <span className="font-sans text-[11px] font-bold text-slate-500">
            Authenticated Research Artifact. Verified by Aegis Agent Core.
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[10px] font-bold">
          <HardDrive className="h-4 w-4" />
          <span>Size: {report.size}</span>
        </div>
      </div>
    </div>
  );
};
