import React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  actions
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-6 border-b border-slate-200 mb-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-sans font-bold text-slate-900 tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="text-sm text-slate-500 font-sans leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {actions && (
        <div className="mt-4 md:mt-0 flex flex-wrap gap-2.5 items-center">
          {actions}
        </div>
      )}
    </div>
  );
};
