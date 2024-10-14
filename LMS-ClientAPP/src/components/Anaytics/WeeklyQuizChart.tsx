import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const weeklyQuizData = [
  { week: "Week 1", averageScore: 35 },
  { week: "Week 2", averageScore: 40 },
  { week: "Week 3", averageScore: 45 },
  { week: "Week 4", averageScore: 42 },
  { week: "Week 5", averageScore: 48 },
  { week: "Week 6", averageScore: 50 },
];

const WeeklyQuizChart = () => {
  return (
    <div className="bg-indigo-50 p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold text-indigo-600 mb-2">
        Weekly Quiz Performance (Out of 50)
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={weeklyQuizData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis domain={[0, 50]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="averageScore"
            stroke="#3b82f6"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyQuizChart;
