import React from "react";
import { Building2, Bell, Menu } from "lucide-react";
import { useCompanyStore } from "../../store/companyStore";

interface NavbarProps {
  onToggleSidebar?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  const { companyData } = useCompanyStore();
  const targetName = companyData?.name || "Awaiting target company";

  return (
    <header className="sticky top-0 right-0 z-10 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white px-4 md:px-8 shrink-0">
      <div className="flex items-center gap-2 sm:gap-3.5">
        {onToggleSidebar && (
          <button
            onClick={onToggleSidebar}
            className="md:hidden p-1.5 rounded-md text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle sidebar"
          >
            <Menu className="h-5 w-5" />
          </button>
        )}

        <div className="hidden sm:flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
          <Building2 className="h-5 w-5 text-slate-600" />
        </div>
        <div className="flex flex-col">
          <span className="font-sans text-[9px] sm:text-[10px] font-bold tracking-wider text-slate-400 uppercase">
            Active Intelligence Target
          </span>
          <div className="relative mt-0.5 flex items-center max-w-[140px] sm:max-w-none">
            <span className="truncate font-sans font-bold text-xs sm:text-sm text-slate-800">
              {targetName}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-5">
        {companyData && (
          <div className="hidden lg:flex items-center gap-3 px-3 py-1.5 rounded-md bg-slate-50 border border-slate-200">
            <span className="font-mono text-xs font-semibold px-1.5 py-0.5 rounded-sm bg-blue-50 text-blue-600 border border-blue-100">
              {companyData.ticker}
            </span>
            <span className="font-sans text-[11px] text-slate-500">
              Sector: <strong className="text-slate-700 font-semibold">{companyData.industry}</strong>
            </span>
          </div>
        )}

        <button className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer">
          <Bell className="h-4.5 w-4.5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-blue-600"></span>
        </button>

        <div className="h-8 w-px bg-slate-200"></div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex flex-col text-right">
            <span className="font-sans font-bold leading-none text-xs text-slate-800">
              Demo User
            </span>
            <span className="font-sans text-[10px] text-slate-500 mt-0.5">
              Sample Account
            </span>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120"
              alt="Demo User"
              className="h-8 w-8 rounded-full object-cover border border-slate-300"
            />
            <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full border border-white bg-emerald-500"></span>
          </div>
        </div>
      </div>
    </header>
  );
};
