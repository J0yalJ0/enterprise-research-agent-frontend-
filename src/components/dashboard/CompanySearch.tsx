import React, { useState } from "react";
import { Search } from "lucide-react";
import { useCompanyStore } from "../../store/companyStore";
import { useChatStore } from "../../store/chatStore";

export const CompanySearch: React.FC = () => {
  const [company, setCompany] = useState("");
  const { analyzeCompany, isLoading, error } = useCompanyStore();
  const { loadSuggestedQuestions } = useChatStore();

  const handleAnalyze = async () => {
    await analyzeCompany(company);
    loadSuggestedQuestions(useCompanyStore.getState().companyData);
  };

  return (
    <div className="w-full max-w-2xl">
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />

          <input
            type="text"
            placeholder="Enter company name (Tesla, OpenAI, ASML...)"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAnalyze();
              }
            }}
            className="w-full rounded-lg border border-slate-200 py-2 pl-10 pr-4 focus:border-blue-600 focus:ring-1 focus:ring-blue-200"
          />
        </div>

        <button
          onClick={handleAnalyze}
          disabled={isLoading}
          className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700 disabled:opacity-50"
        >
          {isLoading ? "Analyzing..." : "Analyze"}
        </button>
      </div>

      {error && (
        <p className="mt-3 text-sm font-medium text-rose-600">{error}</p>
      )}
    </div>
  );
};
