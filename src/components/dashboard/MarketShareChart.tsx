import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from "recharts";
import { MarketShareItem } from "../../types";

interface MarketShareChartProps {
  data: MarketShareItem[];
}

export const MarketShareChart: React.FC<MarketShareChartProps> = ({ data }) => {
  const COLORS = ["#3B82F6", "#60A5FA", "#93C5FD", "#BFDBFE", "#CBD5E1", "#E2E8F0"];

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm flex flex-col justify-between">
      <div>
        <h3 className="font-sans font-bold text-xs text-slate-800 uppercase tracking-wider">
          Market Sector Dominance
        </h3>
        <p className="font-sans text-[11px] text-slate-400">
          Evaluated market share percentage within primary operating segment.
        </p>
      </div>

      <div className="h-64 w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip
              contentStyle={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "6px",
                fontSize: "11px",
                fontFamily: "Inter, sans-serif"
              }}
              formatter={(v) => `${v}%`}
            />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={4}
              dataKey="share"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color || COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: "11px", fontFamily: "Inter, sans-serif" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
