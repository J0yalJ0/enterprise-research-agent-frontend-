import React from "react";

interface LoaderProps {
  message?: string;
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  message = "Analyzing enterprise datasets...",
  className = ""
}) => {
  return (
    <div className={`flex flex-col items-center justify-center p-12 text-center ${className}`}>
      <div className="relative flex h-12 w-12 items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-2 border-slate-100 border-t-blue-600"></div>
        <div className="absolute h-2 w-2 rounded-full bg-blue-600 animate-pulse"></div>
      </div>
      {message && (
        <p className="mt-4 text-xs font-mono text-slate-500 tracking-wider uppercase">
          {message}
        </p>
      )}
    </div>
  );
};
