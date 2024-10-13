import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { day: "Monday", score: 18 },
  { day: "Tuesday", score: 15 },
  { day: "Wednesday", score: 12 },
  { day: "Thursday", score: 20 },
  { day: "Friday", score: 10 },
  { day: "Saturday", score: 14 },
  { day: "Sunday", score: 17 },
];

interface IProps {
  height: number;
}

export const CustomBarChart = ({ height }: IProps) => {
  return (
    <div className="border rounded-md shadow-md ">
      <h3 className="text-center text-lg font-semibold mb-2">
        Daily Quiz Scores
      </h3>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis domain={[0, 20]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="score" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
