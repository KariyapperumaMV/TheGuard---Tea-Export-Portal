import { FC } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { RegionalChartProps } from "../types";

const RegionalMiniChart: FC<RegionalChartProps> = ({
  data,
  label1,
  label2,
  label3,
}) => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            label={{
              value: "Year-Month",
              position: "insideBottom",
              offset: -5,
            }}
          />
          <YAxis
            label={{ value: "USD Million", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={label1}
            name="Low Grown"
            stroke="#50C878"
          />
          <Line
            type="monotone"
            dataKey={label2}
            name="Mid Grown"
            stroke="#8A9A5B"
          />
          <Line
            type="monotone"
            dataKey={label3}
            name="High Grown"
            stroke="#C9CC3F"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RegionalMiniChart;
