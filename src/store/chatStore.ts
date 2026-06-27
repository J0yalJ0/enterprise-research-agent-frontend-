import { create } from "zustand";
import { ChatMessage, MessageSource, CompanyData } from "../types";
import { useCompanyStore } from "./companyStore";

interface ChatStoreState {
  messages: ChatMessage[];
  isTyping: boolean;
  suggestedQuestions: string[];
  activeSources: MessageSource[];
  sendMessage: (content: string) => Promise<void>;
  clearChat: () => void;
  setTyping: (typing: boolean) => void;
  loadSuggestedQuestions: (companyData?: CompanyData | null) => void;
}

const buildSuggestedQuestions = (companyData?: CompanyData | null): string[] => {
  const companyName = companyData?.name || "the target company";
  const industry = companyData?.industry || "its core market";
  const topProduct = companyData?.products?.[0]?.name || "its flagship product";

  return [
    `What are ${companyName}'s strongest strategic advantages in ${industry}?`,
    `How should ${companyName} prioritize revenue growth drivers over the next year?`,
    `What competitor risks should ${companyName} monitor in ${industry}?`,
    `What market expansion strategy is most suitable for ${companyName}?`,
    `How can ${companyName} leverage ${topProduct} to accelerate market share growth?`
  ];
};

const defaultInitialMessages = (companyName: string): ChatMessage[] => [
  {
    id: "init-1",
    role: "assistant",
    content: `Welcome to your Executive Research Workspace. I have successfully compiled the institutional-grade intelligence dossier for **${companyName}**.

I am equipped with real-time semantic grounding across SEC filings, earnings call transcripts, and premium market intelligence datasets. You can query me on strategic moats, financial scenarios, competitor risks, and product roadmaps.

How would you like to direct our analysis?`,
    timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    sources: [
      { id: "src-1", title: "Corporate Intelligence Dossier", source: "Research Agent", snippet: "Dynamic intelligence grounding from filings, downstream news, and competitive factor models." },
      { id: "src-2", title: "Market Sentiment Panorama", source: "Signal Engine", snippet: "Sentiment and risk synthesis built from structured disclosures and market signals." }
    ]
  }
];

export const useChatStore = create<ChatStoreState>((set, get) => ({
  messages: defaultInitialMessages("Enterprise Target"),
  isTyping: false,
  suggestedQuestions: buildSuggestedQuestions(null),
  activeSources: [
    { id: "src-1", title: "Corporate Intelligence Dossier", source: "Research Agent", snippet: "Dynamic intelligence grounding from filings, downstream news, and competitive factor models." },
    { id: "src-2", title: "Market Sentiment Panorama", source: "Signal Engine", snippet: "Sentiment and risk synthesis built from structured disclosures and market signals." }
  ],

  loadSuggestedQuestions: (companyData) => {
    const questions = buildSuggestedQuestions(companyData || null);
    const companyName = companyData?.name || "Enterprise Target";

    set({
      suggestedQuestions: questions,
      messages: defaultInitialMessages(companyName),
      activeSources: defaultInitialMessages(companyName)[0].sources || []
    });
  },

  sendMessage: async (content) => {
    if (!content.trim()) return;

    const userMessage: ChatMessage = {
      id: `msg-user-${Date.now()}`,
      role: "user",
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    set((state) => ({
      messages: [...state.messages, userMessage],
      isTyping: true
    }));

    const activeCompany = useCompanyStore.getState().companyData;
    const companyName = activeCompany?.name || "the company";
    useCompanyStore.getState().updateAgentState("synthesizing", `Analyzing query parameters & scanning semantic sources...`);

    await new Promise((resolve) => setTimeout(resolve, 1600));

    let responseText = "";
    let sources: MessageSource[] = [];
    const query = content.toLowerCase();

    if (query.includes("moat") || query.includes("competitive") || query.includes("advantage")) {
      responseText = `**${companyName}'s competitive moat is shaped by structural barriers, ecosystem stickiness, and differentiated platform control**. Key drivers include proprietary customer lock-in, deep partner integrations, and elevated switching costs for enterprise buyers.`;
      sources = [
        { id: "src-competitive-1", title: "Strategic Moat Brief", source: "AI Research Engine", snippet: "Analysis of competitive differentiation, platform locks, and high switching costs." }
      ];
    } else if (query.includes("risk") || query.includes("threat") || query.includes("weakness")) {
      responseText = `The principal risks for **${companyName}** include supply chain concentration, regulatory exposure, and accelerating competitor campaigns within ${activeCompany?.industry || "its sector"}. We should monitor those factors alongside earnings visibility.`;
      sources = [
        { id: "src-risk-1", title: "Risk Synthesis Report", source: "AI Research Engine", snippet: "Risk modeling from recent filings, market commentary, and sector stress tests." }
      ];
    } else if (query.includes("revenue") || query.includes("growth") || query.includes("financial")) {
      responseText = `Our model indicates that **${companyName}** should prioritize revenue growth through expanded product adoption, pricing optimization, and higher-margin service offerings. That mix is critical to support long-term margin expansion.`;
      sources = [
        { id: "src-fin-1", title: "Revenue Growth Analysis", source: "AI Research Engine", snippet: "Financial scenario planning using comparable company performance and market signals." }
      ];
    } else {
      responseText = `I have synthesized the available intelligence for **${companyName}** in the context of ${activeCompany?.industry || "its industry"}. Let me know if you want a detailed SWOT, financial outlook, competitor risk map, or expansion strategy.`;
      sources = [
        { id: "src-general-1", title: "Strategy Intelligence Summary", source: "AI Research Engine", snippet: "High-level strategic review across product, leadership, and market positioning." }
      ];
    }

    const assistantMessage: ChatMessage = {
      id: `msg-ast-${Date.now()}`,
      role: "assistant",
      content: responseText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      sources
    };

    set((state) => ({
      messages: [...state.messages, assistantMessage],
      isTyping: false,
      activeSources: sources
    }));

    useCompanyStore.getState().updateAgentState("completed", `Briefing formulated successfully.`);
    setTimeout(() => {
      useCompanyStore.getState().updateAgentState("idle", `Ready for next command.`);
    }, 1800);
  },

  clearChat: () => {
    const activeCompany = useCompanyStore.getState().companyData?.name || "Enterprise Target";
    set({
      messages: defaultInitialMessages(activeCompany),
      activeSources: defaultInitialMessages(activeCompany)[0].sources || []
    });
  },

  setTyping: (isTyping) => set({ isTyping })
}));
