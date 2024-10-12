import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const dailyQuizData = [
  { date: "2024-10-01", averageScore: 15 }, // Updated key to averageScore
  { date: "2024-10-02", averageScore: 18 },
  { date: "2024-10-03", averageScore: 12 },
  { date: "2024-10-04", averageScore: 17 },
  { date: "2024-10-05", averageScore: 20 },
  { date: "2024-10-06", averageScore: 14 },
  { date: "2024-10-07", averageScore: 19 },
  { date: "2024-10-08", averageScore: 16 },
  { date: "2024-10-09", averageScore: 13 },
  { date: "2024-10-10", averageScore: 11 },
];

const DailyQuizChart = () => {
  return (
    <div className="bg-indigo-50 p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold text-indigo-600 mb-2">
        Daily Quiz Performance (Out of 20)
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dailyQuizData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[0, 20]} />
          <Tooltip />
          <Bar dataKey="averageScore" fill="#10b981" /> {/* Updated key */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyQuizChart;
