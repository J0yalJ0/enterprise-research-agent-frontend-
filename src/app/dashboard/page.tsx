import React from "react";
import { CompanySearch } from "../../components/dashboard/CompanySearch";
import { KPICards } from "../../components/dashboard/KPICards";
import { AgentStatus } from "../../components/dashboard/AgentStatus";
import { RevenueChart } from "../../components/dashboard/RevenueChart";
import { SentimentChart } from "../../components/dashboard/SentimentChart";
import { MarketShareChart } from "../../components/dashboard/MarketShareChart";
import { PageHeader } from "../../components/shared/PageHeader";
import { useCompanyStore } from "../../store/companyStore";

export default function DashboardPage() {
  const { companyData, isLoading } = useCompanyStore();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Executive Advisory Dashboard"
        description="Institutional-grade intelligence portal tracking strategic assets, competitor SWOT indices, and agentic workflows."
        actions={<CompanySearch />}
      />

      {/* KPI Cards section */}
      {companyData && <KPICards metrics={companyData.kpis} />}

      {/* Main Charts & Status Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 cols for Charts */}
        <div className="lg:col-span-2 space-y-6">
          {companyData && <RevenueChart data={companyData.financials} />}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companyData && <SentimentChart data={companyData.sentimentHistory} />}
            {companyData && <MarketShareChart data={companyData.marketShare} />}
          </div>
        </div>

        {/* Right 1 col for Active Agent Monitor */}
        <div className="lg:col-span-1">
          <AgentStatus />
        </div>
      </div>
    </div>
  );
}
