import React, { useState } from "react";
import { AppLayout } from "./components/layout/AppLayout";

// Import all subpages
import DashboardPage from "./app/dashboard/page";
import ResearchPage from "./app/research/page";
import CompetitorsPage from "./app/competitors/page";
import NewsPage from "./app/news/page";
import ReportsPage from "./app/reports/page";
import SettingsPage from "./app/settings/page";

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>("dashboard");

  const renderActivePage = () => {
    switch (currentPath) {
      case "dashboard":
        return <DashboardPage />;
      case "research":
        return <ResearchPage />;
      case "competitors":
        return <CompetitorsPage />;
      case "news":
        return <NewsPage />;
      case "reports":
        return <ReportsPage />;
      case "settings":
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <AppLayout currentPath={currentPath} onNavigate={(path) => setCurrentPath(path)}>
      <div className="animate-fade-in transition-all duration-300">
        {renderActivePage()}
      </div>
    </AppLayout>
  );
}
