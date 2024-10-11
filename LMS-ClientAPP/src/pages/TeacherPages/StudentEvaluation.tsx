import { Divider } from "@mui/material";
import { EvaluationStudentCard } from "../../components/ui/EvaluationStudentCard";

export const StudentEvaluation = () => {
  // const [weeksCount, setWeeksCount] = useState([1]);
  // const addNewWeek = () => {
  //   setWeeksCount((prevweeks) => [...prevweeks, prevweeks.length + 1]);
  // };
  const students = ["1", "2", "3"];
  return (
    <div className=" flex flex-col p-3 w-full">
      <div className=" m-3 text-center text-xl lg:text-2xl font-bold ">
        <h2> Student Evaluation</h2>
      </div>
      <Divider variant="fullWidth"></Divider>
      <div className=" m-3 w-full border shadow-md rounded-md p-3 flex flex-col gap-4">
        <div className=" flex flex-row justify-between p-2">
          <div className=" text-center font-semibold text-lg">
            <h3>Students</h3>
          </div>
          <div>Find a student</div>
        </div>
        <div className=" flex flex-col w-full gap-2">
          {students.map((numb) => {
            return <EvaluationStudentCard studName="Name" id={numb} />;
          })}
        </div>
      </div>
    </div>
  );
};
