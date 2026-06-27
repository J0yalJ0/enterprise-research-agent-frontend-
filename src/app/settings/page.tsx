import React, { useState } from "react";
import { PageHeader } from "../../components/shared/PageHeader";
import {
  User,
  Sliders,
  Key,
  Lock,
  CheckCircle2,
  AlertTriangle,
  Fingerprint
} from "lucide-react";

export default function SettingsPage() {
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [profile, setProfile] = useState({
    name: "Jomon Joyal",
    email: "jomonjoyal2002@gmail.com",
    role: "Senior Partner Analyst",
    firm: "Enterprise Research Agent"
  });

  const [workspace, setWorkspace] = useState({
    classification: "CONFIDENTIAL",
    auditLevel: "SOC-2 Type II",
    dataRetention: "30 Days"
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <PageHeader
        title="Workspace Configuration"
        description="Configure your analytical profile, audit parameters, security rules, and workspace API key triggers."
      />

      <form onSubmit={handleSave} className="space-y-6">
        {/* User Profile */}
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 pb-4 border-b border-slate-150 mb-4">
            <User className="h-4.5 w-4.5 text-blue-600" />
            <h2 className="font-sans font-bold text-xs text-slate-800 uppercase tracking-wider">
              Analyst Profile
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="font-sans text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Full Name</label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="w-full rounded-md border border-slate-200 bg-slate-50/25 px-3 py-2 font-sans text-xs text-slate-800 shadow-2xs focus:border-blue-600 focus:bg-white focus:outline-hidden font-semibold"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-sans text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Email Address</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="w-full rounded-md border border-slate-200 bg-slate-50/25 px-3 py-2 font-sans text-xs text-slate-800 shadow-2xs focus:border-blue-600 focus:bg-white focus:outline-hidden font-semibold"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-sans text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Institutional Role</label>
              <input
                type="text"
                value={profile.role}
                onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                className="w-full rounded-md border border-slate-200 bg-slate-50/25 px-3 py-2 font-sans text-xs text-slate-800 shadow-2xs focus:border-blue-600 focus:bg-white focus:outline-hidden font-semibold"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-sans text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Consultancy Firm</label>
              <input
                type="text"
                value={profile.firm}
                disabled
                className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 font-sans text-xs text-slate-500 shadow-none focus:outline-hidden font-semibold"
              />
            </div>
          </div>
        </div>

        {/* Workspace Rules */}
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 pb-4 border-b border-slate-150 mb-4">
            <Sliders className="h-4.5 w-4.5 text-blue-600" />
            <h2 className="font-sans font-bold text-xs text-slate-800 uppercase tracking-wider">
              Workspace Parameters
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="font-sans text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Data Classification</label>
              <select
                value={workspace.classification}
                onChange={(e) => setWorkspace({ ...workspace, classification: e.target.value })}
                className="w-full rounded-md border border-slate-200 bg-slate-50/25 px-3 py-2 font-sans text-xs text-slate-800 shadow-2xs focus:border-blue-600 focus:bg-white focus:outline-hidden cursor-pointer font-semibold"
              >
                <option value="PUBLIC">PUBLIC</option>
                <option value="INTERNAL">INTERNAL ONLY</option>
                <option value="CONFIDENTIAL">CONFIDENTIAL</option>
                <option value="STRICTLY_RESTRICTED">STRICTLY RESTRICTED</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="font-sans text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Audit Clearance</label>
              <input
                type="text"
                value={workspace.auditLevel}
                disabled
                className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 font-sans text-xs text-slate-500 shadow-none focus:outline-hidden font-semibold"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-sans text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Logging Retention</label>
              <select
                value={workspace.dataRetention}
                onChange={(e) => setWorkspace({ ...workspace, dataRetention: e.target.value })}
                className="w-full rounded-md border border-slate-200 bg-slate-50/25 px-3 py-2 font-sans text-xs text-slate-800 shadow-2xs focus:border-blue-600 focus:bg-white focus:outline-hidden cursor-pointer font-semibold"
              >
                <option value="7 Days">7 Days</option>
                <option value="30 Days">30 Days</option>
                <option value="90 Days">90 Days</option>
                <option value="Indefinite">Indefinite (Custom Premium)</option>
              </select>
            </div>
          </div>
        </div>

        {/* API Credentials Management */}
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 pb-4 border-b border-slate-150 mb-4">
            <Key className="h-4.5 w-4.5 text-blue-600" />
            <h2 className="font-sans font-bold text-xs text-slate-800 uppercase tracking-wider">
              Gemini & Secrets API Integrations
            </h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3">
              <Lock className="h-4.5 w-4.5 text-blue-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-sans text-xs font-bold text-slate-800">
                  Dynamic Environment Secret Management
                </span>
                <p className="font-sans text-[11px] text-slate-500 leading-relaxed font-semibold">
                  Your primary **GEMINI_API_KEY** is securely managed and automatically injected at runtime via our server-side secure credentials vault. No client-side key storage or manual code injection is required.
                </p>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-sans text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Active Gemini Model</label>
              <input
                type="text"
                disabled
                value="gemini-3.5-flash (Standard Production Target)"
                className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 font-sans text-xs text-slate-500 shadow-none focus:outline-hidden font-semibold"
              />
            </div>
          </div>
        </div>

        {/* Submit Bar */}
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-1.5 text-slate-400">
            <Fingerprint className="h-4.5 w-4.5" />
            <span className="font-sans text-[10px] font-bold uppercase tracking-wider">CONFIDENTIAL AUTH SYSTEM</span>
          </div>

          <div className="flex items-center gap-4">
            {saveSuccess && (
              <div className="flex items-center gap-1.5 text-emerald-600 font-sans text-xs font-bold animate-fade-in">
                <CheckCircle2 className="h-4 w-4" />
                <span>Configurations persistent.</span>
              </div>
            )}
            <button
              type="submit"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-sans font-bold rounded-md text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
            >
              Save Configurations
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
