import { CustomPieChart } from "../../components/PieChart/CustomPieChart";

export const TeacherHome = () => {
  return (
    <div className=" flex flex-col w-full">
      <div className=" text-center ">
        <p className=" font-bold text-2xl">Welcome Sensei!</p>
      </div>
      <div>Other analytics</div>
      <div className=" flex flex-row justify-end gap-2 p-2">
        <CustomPieChart totalAbsent={3} totalPresent={25} totalLate={5} />
      </div>
    </div>
  );
};
