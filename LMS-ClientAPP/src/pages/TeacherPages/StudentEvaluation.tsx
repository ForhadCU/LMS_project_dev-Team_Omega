import { Divider } from "@mui/material";
import { EvaluationStudentCard } from "../../components/ui/EvaluationStudentCard";
import { useGetAllUsersQuery } from "../../redux/feature/users/usersAPI";
import { GeneralUser } from "../../Types/user.type";
import { Loader } from "../../components/loader/Loader";

export const StudentEvaluation = () => {
  const {
    data: students,
    isError,
    isLoading,
  } = useGetAllUsersQuery({ role: "student" });

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
          {isError ? (
            <h2 className=" text-red-600 font-bold my-3">
              Error occured while loading
            </h2>
          ) : isLoading ? (
            <Loader />
          ) : (
            students?.data.map((stud: GeneralUser) => {
              return (
                <EvaluationStudentCard
                  studName={stud.name}
                  id={stud._id}
                  email={stud.email}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
