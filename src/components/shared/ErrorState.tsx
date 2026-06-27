import React from "react";
import { AlertCircle } from "lucide-react";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = "Research Pipeline Interrupted",
  message = "An error occurred while compiling external telemetry sources.",
  onRetry
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-red-50/50 border border-red-100 rounded-lg max-w-lg mx-auto">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-100/60 text-red-600">
        <AlertCircle className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-sm font-medium text-slate-900">{title}</h3>
      <p className="mt-2 text-xs text-red-700/80 leading-relaxed max-w-sm">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-5 inline-flex items-center px-3.5 py-1.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 transition-colors rounded-md shadow-xs cursor-pointer"
        >
          Retry Compilation
        </button>
      )}
    </div>
  );
};
