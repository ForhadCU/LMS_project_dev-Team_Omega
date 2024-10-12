import { Button, Divider } from "@mui/material";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/feature/auth/authSlice";
import { useGetStudentProfileQuery } from "../../redux/feature/student/studentAPI";
import { TUser } from "../../Types/user.type";
import {
  useEnrollIntoCourseMutation,
  useGetSingleCourseQuery,
} from "../../redux/feature/course/courseAPI";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../../components/loader/Loader";
import toast from "react-hot-toast";

export const EnrollmentConfirm = () => {
  const user = useAppSelector(selectCurrentUser) as TUser;
  const navigation = useNavigate();
  const params = useParams();
  const courseID = params.id;
  const {
    data: courseData,
    isError,
    isLoading,
    isSuccess,
  } = useGetSingleCourseQuery(courseID);
  const { data: studentProfile, isLoading: studentLoading } =
    useGetStudentProfileQuery(
      {
        id: user.userId,
      },
      { skip: !isSuccess }
    );
  const [enrollIntoCourse, { error }] = useEnrollIntoCourseMutation();
  const handleEnrollment = async () => {
    const enrollData = {
      Student_ID: user.userId,
      Enrolled_Course: courseID,
      student_batch: studentProfile?.data.batch,
    };
    try {
      const res = await enrollIntoCourse(enrollData).unwrap();
      if (res.success) {
        toast.success(res.message);
        navigation(-1);
      }
    } catch (err: any) {
      toast.error("Error occured while enrolling");
      console.log(error + "  " + err);
    }
  };
  const handleDecline = () => {
    navigation(-1);
  };
  return (
    <div className=" flex flex-col ">
      <div className=" text-center text-xl ">
        <h2 className=" font-bold">Student Enrollment Confirmation</h2>
      </div>
      <div className=" my-2">
        <Divider variant="fullWidth"></Divider>
      </div>
      <div className=" flex flex-col items-center  border shadow-lg rounded-md">
        <div className=" p-4">
          <h3>Enrollment Details</h3>
          <Divider variant="middle"></Divider>
        </div>
        {isError ? (
          <h2 className=" my-2 text-red-700 font-bold text-center">
            Error Occured while loading data
          </h2>
        ) : isLoading || studentLoading ? (
          <div className=" flex justify-center w-full p-2">
            <Loader />
          </div>
        ) : (
          <>
            <div className=" flex flex-row justify-center items-center w-[500px] p-2">
              <div className=" w-1/2">Course Name:</div>
              <div className=" w-1/2">{courseData?.data.title}</div>
            </div>
            <div className=" flex flex-row justify-center items-center w-[500px] p-2">
              <div className=" w-1/2">Course Duration:</div>
              <div className=" w-1/2">{courseData?.data.duration}</div>
            </div>
            <div className=" flex flex-row justify-center items-center w-[500px] p-2">
              <div className=" w-1/2">Course Code:</div>
              <div className=" w-1/2">{courseData?.data.code}</div>
            </div>
            <div className=" flex flex-row justify-center items-center w-[500px] p-2">
              <div className=" w-1/2">Course Type:</div>
              <div className=" w-1/2">{courseData?.data.courseType}</div>
            </div>
            <div className=" flex flex-row justify-center items-center w-[500px] p-2">
              <div className=" w-1/2">Student Batch:</div>
              <div className=" w-1/2">{studentProfile?.data.batch}</div>
            </div>
          </>
        )}
        <div className=" flex flex-row gap-2 p-2">
          <Button
            variant="contained"
            color="success"
            onClick={handleEnrollment}
          >
            Confirm
          </Button>
          <Button variant="contained" color="error" onClick={handleDecline}>
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
};
