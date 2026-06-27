import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { SentimentDistribution } from "../../types";

interface SentimentChartProps {
  data: SentimentDistribution[];
}

export const SentimentChart: React.FC<SentimentChartProps> = ({ data }) => {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h3 className="font-sans font-bold text-xs text-slate-800 uppercase tracking-wider">
          Market Sentiment Distribution
        </h3>
        <p className="font-sans text-[11px] text-slate-400">
          Synthesized from global media, analyst bulletins, and news outlets.
        </p>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
            <XAxis
              dataKey="date"
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
              tickFormatter={(v) => `${v}%`}
            />
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
            <Legend
              verticalAlign="top"
              height={36}
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: "11px", fontFamily: "Inter, sans-serif" }}
            />
            <Bar dataKey="positive" name="Positive Sentiment" stackId="a" fill="#3B82F6" />
            <Bar dataKey="neutral" name="Neutral Position" stackId="a" fill="#93C5FD" />
            <Bar dataKey="negative" name="Negative Sentiment" stackId="a" fill="#FDA4AF" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
