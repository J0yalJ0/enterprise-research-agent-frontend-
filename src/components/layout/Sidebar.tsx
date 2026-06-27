import React from "react";
import {
  LayoutDashboard,
  Search,
  Users,
  Newspaper,
  FileText,
  ShieldCheck,
  Zap,
  X
} from "lucide-react";
import { useCompanyStore } from "../../store/companyStore";

interface SidebarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentPath, onNavigate, isOpen, onClose }) => {
  const { agentState } = useCompanyStore();

  const navigationItems = [
    { name: "Executive Dashboard", path: "dashboard", icon: LayoutDashboard },
    { name: "Strategic Research", path: "research", icon: Search },
    { name: "Competitor Analysis", path: "competitors", icon: Users },
    { name: "Market Intelligence", path: "news", icon: Newspaper },
    { name: "Research Dossiers", path: "reports", icon: FileText }
  ];

  return (
    <aside className={`fixed inset-y-0 left-0 z-30 flex w-64 flex-col bg-white text-slate-900 border-r border-slate-200 transition-transform duration-300 ease-in-out md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
      {/* Brand Header */}
      <div className="flex h-16 items-center justify-between px-6 border-b border-slate-200 bg-white">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 text-white font-sans font-bold text-base shadow-xs">
            Æ
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold tracking-tight text-sm text-slate-900 leading-none">
              Enterprise Research Agent
            </span>
            <span className="font-mono text-[9px] tracking-wider text-slate-400 font-bold uppercase mt-1">
              ENTERPRISE RESEARCH AGENT
            </span>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="md:hidden p-1 rounded-md text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Main Navigation links */}
      <nav className="flex-1 space-y-1 px-4 py-6 overflow-y-auto">
        <div className="px-3 mb-2.5">
          <span className="font-sans text-[10px] font-bold tracking-wider text-slate-400 uppercase">
            Platform Menu
          </span>
        </div>
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPath === item.path;
          return (
            <button
              key={item.path}
              id={`nav-${item.path}`}
              onClick={() => {
                onNavigate(item.path);
                if (onClose) onClose();
              }}
              className={`flex w-full items-center gap-3 px-3 py-2 text-xs font-sans font-medium rounded-md transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-blue-50 text-blue-700 font-semibold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Icon className={`h-4 w-4 ${isActive ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"}`} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

      {/* Agent Heartbeat Status Ticker */}
      <div className="p-4 border-t border-slate-200 bg-slate-50/50">
        <div className="flex flex-col gap-2 p-3 rounded-lg bg-slate-900 text-white shadow-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  agentState.status === "idle" ? "bg-emerald-400" : "bg-blue-400 animate-ping"
                }`}></span>
                <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${
                  agentState.status === "idle" ? "bg-emerald-400" : "bg-blue-500"
                }`}></span>
              </span>
              <span className="font-mono text-[9px] font-bold tracking-wider text-slate-400 uppercase">
                AGENT CORE
              </span>
            </div>
            <span className={`font-mono text-[8px] px-1.5 py-0.5 rounded-sm border ${
              agentState.status === "idle" 
                ? "bg-slate-800 border-slate-750 text-slate-300" 
                : "bg-blue-950 border-blue-900 text-blue-300"
            }`}>
              {agentState.status.toUpperCase()}
            </span>
          </div>
          <p className="font-sans text-[11px] leading-relaxed text-slate-300">
            {agentState.activity}
          </p>
        </div>

        {/* Security / Audit Tag */}
        <div className="mt-3.5 flex items-center justify-between px-1">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-slate-400" />
            <span className="font-sans text-[10px] text-slate-400">SOC-2 Certified</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="font-mono text-[9px] text-slate-400">Enterprise</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
