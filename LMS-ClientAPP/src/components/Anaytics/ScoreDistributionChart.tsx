import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const scoreDistributionData = [
  { name: "0-5", value: 3 },
  { name: "6-10", value: 5 },
  { name: "11-15", value: 7 },
  { name: "16-20", value: 5 },
];

const COLORS = ["#0ea5e9", "#34d399", "#fbbf24", "#f97316"];

const ScoreDistributionChart = () => {
  return (
    <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-indigo-700 mb-4">
        Score Distribution (Daily Quizzes)
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={scoreDistributionData}
            dataKey="value" // Ensure this matches your data structure
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
            innerRadius={50}
            fill="#8884d8"
            label
          >
            {scoreDistributionData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="#fff"
                strokeWidth={2}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScoreDistributionChart;
