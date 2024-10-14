import { CustomBarChart } from "../BarChart/CustomBarChart";
import { CustomPaddingPieChart } from "../PieChart/CustomPaddingPieChart";

export const StudentAnalytics = () => {
  const data = [
    { name: "Present", value: 190 },
    { name: "Absent", value: 10 },
    { name: "Late", value: 10 },
  ];

  const weeklyyQuizdata = [
    { name: "Pass", value: 10 },
    { name: "Fail", value: 0 },
  ];
  return (
    <div className=" grid grid-cols-1  gap-2">
      <div className=" grid grid-cols-2 gap-1">
        <CustomPaddingPieChart data={data} header="Student Attendance" />
        <CustomPaddingPieChart data={weeklyyQuizdata} header="Weekly Quiz" />
      </div>
      <CustomBarChart height={500} />
    </div>
  );
};
