/* eslint-disable react/prop-types */
import { LineChart, Line, XAxis, YAxis } from "recharts";
import { Tooltip, Legend, ResponsiveContainer } from "recharts";

const PredictionChart = ({ index, data }) => {
  return (
    <div id={`chartContainer-${index}`} className="mt-6 w-full pr-10">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="#333" tick={{ fill: "#333" }} />
          <YAxis stroke="#333" tick={{ fill: "#333" }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="predicted_price"
            name="Predicted Price"
            stroke="#1E90FF"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="lower_bound"
            name="Lower Bound"
            stroke="#32CD32"
            strokeWidth={2}
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="upper_bound"
            name="Upper Bound"
            stroke="#FF4500"
            strokeWidth={2}
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PredictionChart;
