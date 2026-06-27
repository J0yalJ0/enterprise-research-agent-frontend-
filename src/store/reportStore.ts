import { create } from "zustand";
import { ReportItem } from "../types";
import { useCompanyStore } from "./companyStore";

interface ReportStoreState {
  reports: ReportItem[];
  isGenerating: boolean;
  activeReportId: string | null;
  getReportsByCompany: (companyId: string) => ReportItem[];
  generateReport: (companyId: string, type: "pdf" | "ppt") => Promise<void>;
  setActiveReportId: (id: string | null) => void;
  deleteReport: (id: string) => void;
}

export const useReportStore = create<ReportStoreState>((set, get) => ({
  reports: [],
  isGenerating: false,
  activeReportId: null,

  getReportsByCompany: (companyId) => {
    return get().reports.filter((r) => r.companyId === companyId);
  },

  generateReport: async (companyId, type) => {
    const companyName = useCompanyStore.getState().companyData?.name || companyId;
    set({ isGenerating: true });

    useCompanyStore.getState().updateAgentState("generating", `Rendering custom ${type.toUpperCase()} dossier for ${companyName}...`);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const newReportId = `rep-gen-${Date.now()}`;
    const newReport: ReportItem = {
      id: newReportId,
      title: `${companyName} AI Research Briefing (${type.toUpperCase()})`,
      type,
      date: new Date().toISOString().split("T")[0],
      companyId,
      size: type === "pdf" ? "2.4 MB" : "8.1 MB",
      status: "ready",
      summaryMarkdown: `# ${companyName} AI Research Briefing (${type.toUpperCase()})
## Strategic Evaluation & Investment Recommendation
### Executive Summary
This report presents a synthesized strategic analysis of **${companyName}** compiled by the Enterprise AI Research Agent.

* **Overall Recommendation**: Maintain strategic conviction while monitoring near-term execution risks.
* **Core Value Engine**: Combination of differentiated products, scalable revenue streams, and disciplined capital allocation.
* **Risk Consideration**: Watch macro volume demand, regulatory exposure, and execution across international growth markets.

---

## 1. Competitive Strategic Framework
The analysis identifies several durable sources of advantage including product differentiation, customer retention, and scaled data networks.

## 2. Financial Outlook
Forecast drivers are built from revenue expansion, margin optimization, and recurring service uptake.

## 3. Strategic Priorities
Focus on expanding market share in adjacent segments, fortifying strategic partnerships, and executing disciplined product launches.
`
    };

    set((state) => ({
      reports: [newReport, ...state.reports],
      isGenerating: false,
      activeReportId: newReportId
    }));

    useCompanyStore.getState().updateAgentState("completed", `Dossier successfully rendered and added to Report Library.`);

    setTimeout(() => {
      useCompanyStore.getState().updateAgentState("idle", `Ready for next command.`);
    }, 2500);
  },

  setActiveReportId: (id) => {
    set({ activeReportId: id });
  },

  deleteReport: (id) => {
    set((state) => ({
      reports: state.reports.filter((r) => r.id !== id),
      activeReportId: state.activeReportId === id ? state.reports.find((rep) => rep.id !== id)?.id || null : state.activeReportId
    }));
  }
}));
