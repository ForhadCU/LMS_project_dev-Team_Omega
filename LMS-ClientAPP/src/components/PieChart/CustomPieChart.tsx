import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
interface IPieChartProps {
  totalPresent: number;
  totalAbsent: number;
  totalLate: number;
}
export const CustomPieChart = ({
  totalPresent,
  totalAbsent,
  totalLate,
}: IPieChartProps) => {
  const data = [
    { name: "Present", value: totalPresent },
    { name: "Absent", value: totalAbsent },
    { name: "Late", value: totalLate },
  ];
  //,
  const COLORS = ["#00C49F", "#FF8042", "#F9AE2D"];

  return (
    <div className=" border rounded-md shadow-md">
      <h3 className=" text-center">Student Attendance (today)</h3>
      <ResponsiveContainer width={500} height={400}>
        <PieChart>
          <Pie
            data={data}
            cx={240}
            cy={200}
            labelLine={false}
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
