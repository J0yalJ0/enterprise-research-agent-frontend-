import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  ComposedChart
} from "recharts";
import { FinancialMetric } from "../../types";

interface RevenueChartProps {
  data: FinancialMetric[];
}

export const RevenueChart: React.FC<RevenueChartProps> = ({ data }) => {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h3 className="font-sans font-bold text-xs text-slate-800 uppercase tracking-wider">
          Revenue & Net Income Trajectory
        </h3>
        <p className="font-sans text-[11px] text-slate-400">
          In Billions (USD). Derived from historical Form 10-K filings.
        </p>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
            <XAxis
              dataKey="year"
              stroke="#94A3B8"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            <YAxis
              stroke="#94A3B8"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `$${v}B`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "6px",
                fontSize: "11px",
                fontFamily: "Inter, sans-serif"
              }}
              formatter={(value: any, name: any) => [`$${value}B`, name === "revenue" ? "Gross Revenue" : "Net Income"]}
            />
            <Legend
              verticalAlign="top"
              height={36}
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: "11px", fontFamily: "Inter, sans-serif" }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#3B82F6"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorRevenue)"
              name="revenue"
            />
            <Bar
              dataKey="netIncome"
              barSize={16}
              fill="#93C5FD"
              radius={[4, 4, 0, 0]}
              name="netIncome"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
