import QuizAnaytics from "./QuizAnaytics";
import { Link } from "react-router-dom";
import { CustomPieChart } from "../../components/PieChart/CustomPieChart";
import { StudentEvaluationCard } from "../../components/ui/StudentEvaluationCard";

export const TeacherHome = () => {
  return (
    <div className=" flex flex-col w-full">
      <div className=" text-center ">
        <QuizAnaytics></QuizAnaytics>
      </div>
      <div>Other analytics</div>
      <div className=" flex flex-row justify-center gap-2 p-2">
        <Link to={"/student-evaluation"}>
          <StudentEvaluationCard />
        </Link>
        <CustomPieChart totalAbsent={3} totalPresent={25} totalLate={5} />
      </div>
    </div>
  );
};
