import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

interface IData {
  name: string;
  value: number;
}

interface IPaddedPieChartProps {
  header: string;
  data: IData[];
}

export const CustomPaddingPieChart = ({
  header,
  data,
}: IPaddedPieChartProps) => {
  //   const data = [
  //     { name: "Present", value: 190 },
  //     { name: "Absent", value: 10 },
  //     { name: "Late", value: 10 },
  //   ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <div className=" border rounded-md shadow-md">
      <h3 className=" text-center">{header}</h3>
      <ResponsiveContainer width={"100%"} height={200}>
        <PieChart>
          <Pie
            data={data}
            cx={"50%"}
            cy={"50%"}
            innerRadius={60}
            outerRadius={80}
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
