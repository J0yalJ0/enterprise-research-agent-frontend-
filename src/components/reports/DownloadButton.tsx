import React, { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { useCompanyStore } from "../../store/companyStore";
import { apiService } from "../../services/api";

interface DownloadButtonProps {
  label: string;
  type: "pdf" | "ppt";
  reportTitle: string;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  label,
  type,
  reportTitle
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const companyData = useCompanyStore((state) => state.companyData);

  const handleDownload = async () => {
    if (!companyData) {
      return;
    }

    setIsDownloading(true);

    try {
      const fileBlob =
        type === "pdf"
          ? await apiService.generatePdf(companyData)
          : await apiService.generatePpt(companyData);

      const url = URL.createObjectURL(fileBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = type === "pdf" ? "company-report.pdf" : "company-report.pptx";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Failed to download report:", err);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading || !companyData}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans font-medium rounded-md border transition-all cursor-pointer ${
        type === "pdf"
          ? "bg-slate-900 border-slate-800 text-white hover:bg-slate-800 disabled:opacity-50"
          : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-50"
      }`}
    >
      {isDownloading ? (
        <Loader2 className="h-3.5 w-3.5 animate-spin" />
      ) : (
        <Download className="h-3.5 w-3.5" />
      )}
      <span>{isDownloading ? "Compiling..." : label}</span>
    </button>
  );
};
