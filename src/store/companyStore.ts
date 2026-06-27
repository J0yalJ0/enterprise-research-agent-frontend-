import axios from "axios";
import { create } from "zustand";
import { CompanyData, NewsArticle, AgentState } from "../types";
import { apiService } from "../services/api";

interface CompanyStoreState {
  companyData: CompanyData | null;
  selectedCompanyName: string;
  newsArticles: NewsArticle[];
  isLoading: boolean;
  error: string | null;
  agentState: AgentState;
  analyzeCompany: (companyName: string) => Promise<void>;
  updateAgentState: (status: AgentState["status"], activity: string) => void;
}

export const useCompanyStore = create<CompanyStoreState>((set, get) => ({
  companyData: null,
  selectedCompanyName: "",
  newsArticles: [],
  isLoading: false,
  error: null,
  agentState: {
    status: "idle",
    activity: "Waiting for research triggers..."
  },

  analyzeCompany: async (companyName) => {
    const trimmedName = companyName.trim();
    if (!trimmedName) {
      set({ error: "Please enter a valid company name." });
      return;
    }

    set({
      selectedCompanyName: trimmedName,
      isLoading: true,
      error: null
    });

    get().updateAgentState("searching", `Initiating company research for ${trimmedName}...`);

    try {
      const companyData = await apiService.analyzeCompany(trimmedName);
      set({
        companyData,
        newsArticles: [],
        isLoading: false,
        error: null
      });

      get().updateAgentState("synthesizing", `Consolidating intelligence assets for ${companyData.name}.`);
      get().updateAgentState("completed", `Analysis completed for ${companyData.name}.`);
    } catch (error) {
      const message = axios.isAxiosError(error)
        ? error.response?.data?.detail || error.message
        : error instanceof Error
        ? error.message
        : "Analysis failed. Please try again.";

      set({
        error: message,
        isLoading: false
      });
      get().updateAgentState("idle", "Analysis failed. Please verify the company name and try again.");
    } finally {
      setTimeout(() => {
        get().updateAgentState("idle", "Ready for next command.");
      }, 2200);
    }
  },

  updateAgentState: (status, activity) => {
    set({ agentState: { status, activity } });
  }
}));
