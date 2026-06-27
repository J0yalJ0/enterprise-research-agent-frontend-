import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";

interface AppLayoutProps {
  children: React.ReactNode;
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  currentPath,
  onNavigate
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800">
      {/* Sidebar - fixed left */}
      <Sidebar 
        currentPath={currentPath} 
        onNavigate={onNavigate} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Mobile Sidebar Overlay Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/40 z-20 md:hidden animate-fade-in"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content Pane - shifted right on desktop */}
      <div className="pl-0 md:pl-64 flex flex-col min-h-screen transition-all duration-300">
        {/* Header/Navbar - sticky top */}
        <Navbar onToggleSidebar={() => setIsSidebarOpen(true)} />

        {/* Content Body */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto max-w-(screen-2xl) mx-auto w-full">
          {children}
        </main>

        {/* Footer/Trademark */}
        <footer className="px-4 md:px-8 py-5 border-t border-slate-100 bg-white text-center">
          <p className="font-sans text-[11px] text-slate-400">
            &copy; {new Date().getFullYear()} Enterprise Research Agent. All rights reserved. SEC Edgar / Bloomberg Terminal groundings active. Confidentially protected under SOC-2 protocols.
          </p>
        </footer>
      </div>
    </div>
  );
};
