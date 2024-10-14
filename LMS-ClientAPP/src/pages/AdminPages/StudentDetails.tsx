import { Button, Divider } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useGetStudentProfileQuery } from "../../redux/feature/student/studentAPI";
import { useGetSingleUserQuery } from "../../redux/feature/users/usersAPI";
import { Loader } from "../../components/loader/Loader";
import { StudentAnalytics } from "../../components/Anaytics/StudentAnalytics";

export const StudentDetails = () => {
  const params = useParams();
  const studUserID = params.id;
  const {
    data: studentProfile,
    isLoading: profileLoading,
    isSuccess: profileSuccess,
  } = useGetStudentProfileQuery({
    id: studUserID,
  });

  const { data: studentUser, isLoading: userLoading } = useGetSingleUserQuery(
    { id: studUserID },
    { skip: !profileSuccess }
  );

  return (
    <div className=" flex flex-row gap-2 p-2 items-start">
      <div className=" flex flex-col items-center p-4 border shadow-md rounded-md mt-2 w-[30%]">
        {profileLoading || userLoading ? (
          <div className=" flex justify-center w-full">
            <Loader />
          </div>
        ) : (
          <>
            <div className=" my-2 w-full flex justify-center">
              <img
                src={studentProfile?.data.img}
                alt="student profile"
                className=" rounded-full"
                height={"250px"}
                width={"250px"}
              />
            </div>
            <div className=" text-center p-2 ">
              <h3 className=" text-2xl font-semibold ">
                {studentUser?.data.name}
              </h3>
            </div>
            <div className=" text-center p-2 ">
              <p className=" font-light text-base">{studentUser?.data.email}</p>
            </div>
            <div>
              <Link to={"/student-report"}>
                <Button variant="contained" color="info">
                  Student Report PDF
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
      <div className=" flex flex-col w-[70%] border shadow-md rounded-md p-2">
        {profileLoading || userLoading ? (
          <div className=" flex justify-center w-full">
            <Loader />
          </div>
        ) : (
          <>
            <div className=" text-start p-2 my-2">
              <h2 className=" text-xl">Student Information</h2>
            </div>
            <Divider variant="fullWidth"></Divider>
            <div className=" mt-1">
              <div className=" flex flex-col p-2">
                <div className=" p-3 ">
                  <h3 className=" font-bold text-lg">Full Name:</h3>
                  <p>{studentProfile?.data.fullName}</p>
                </div>
                <div className=" p-3 ">
                  <h3 className=" font-bold text-lg">Age:</h3>
                  <p>{studentProfile?.data.age}</p>
                </div>
                <div className=" p-3 ">
                  <h3 className=" font-bold text-lg">Subject Major:</h3>
                  <p>{studentProfile?.data.subjectMajor}</p>
                </div>
                <div className=" p-3 ">
                  <h3 className=" font-bold text-lg">Batch:</h3>
                  <p>{studentProfile?.data.batch}</p>
                </div>
                <div className=" p-3 ">
                  <h3 className=" font-bold text-lg">Address:</h3>
                  <p>{studentProfile?.data.address}</p>
                </div>
              </div>
            </div>
            <Divider variant="fullWidth"></Divider>
            <div className=" p-2 ">
              <div className=" text-Start w-full p-2">
                <h2 className=" text-xl">General Analytics</h2>
              </div>
              <StudentAnalytics />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
