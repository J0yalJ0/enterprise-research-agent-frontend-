import React from "react";
import { FolderOpen } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No intelligence files found",
  description = "No entries match the active filter or company query parameters.",
  icon = <FolderOpen className="h-8 w-8 text-slate-300" />,
  action
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center bg-white border border-dashed border-slate-200 rounded-lg shadow-xs">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-slate-50 border border-slate-100">
        {icon}
      </div>
      <h3 className="mt-4 text-sm font-medium text-slate-800">{title}</h3>
      <p className="mt-2 text-xs text-slate-500 max-w-sm leading-relaxed">{description}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
};
