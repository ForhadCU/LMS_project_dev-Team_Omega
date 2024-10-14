import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/feature/auth/authSlice";
import { TUser } from "../../Types/user.type";
import {
  useGetEnrollmentsQuery,
  useGetSingleCourseQuery,
} from "../../redux/feature/course/courseAPI";
import { Loader } from "../../components/loader/Loader";
import { Avatar, Button, Divider, Typography } from "@mui/material";

import {
  Lectures_logo,
  Quiz_logo,
  Resources_logo,
  sensei_prof_pic_default,
} from "../../constants";
import { InfoCards } from "../../components/ui/InfoCards";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import { Link } from "react-router-dom";

interface ITeacherProps {
  _id: string;
  name: string;
  email: string;
  img?: string;
}

export const CourseDetailsStudent = () => {
  const params = useParams();
  const courseID = params.id;
  const user = useAppSelector(selectCurrentUser) as TUser;

  const {
    data: courseData,
    isError,
    isLoading,
    isSuccess,
  } = useGetSingleCourseQuery(courseID);

  const { data: enrollment } = useGetEnrollmentsQuery(
    { Enrolled_Course: courseID, Student_ID: user.userId },
    { skip: !isSuccess }
  );
  return (
    <div className=" w-full p-3 mx-0 flex flex-col">
      {isError ? (
        <h2 className=" text-center text-red-600 my-4">
          {" "}
          Error occured while fetching data
        </h2>
      ) : isLoading ? (
        <Loader />
      ) : (
        <>
          <div className=" w-full p-2 block">
            <Typography variant="h3" component={"p"}>
              <div className=" flex flex-row justify-between items-start">
                {" "}
                <p>{courseData?.data.title}</p>{" "}
              </div>
            </Typography>
            <div className=" flex flex-row gap-2">
              <Typography variant="body1" gutterBottom className=" my-2">
                <ModelTrainingIcon />
                {courseData?.data.courseType}
              </Typography>
              <Typography variant="body1" gutterBottom className=" my-2">
                <CalendarTodayIcon />
                {new Date(courseData?.data.createdAt).toUTCString()}
              </Typography>
            </div>
          </div>
          <Divider variant="fullWidth"></Divider>
          <div className=" my-2 p-2 block">
            <Typography variant="h4" gutterBottom>
              Instructors
            </Typography>
            <div className=" p-3 flex flex-col">
              {courseData?.data?.instructors.map(
                (instructor: ITeacherProps) => {
                  return (
                    <>
                      <div className=" flex flex-row items-start gap-2">
                        <Avatar
                          src={sensei_prof_pic_default}
                          alt="sensei_prof_pic"
                        />
                        <div className=" block ">
                          <Typography variant="h6" gutterBottom>
                            {instructor.name}
                          </Typography>
                          <Typography variant="caption" gutterBottom>
                            {instructor.email}
                          </Typography>
                        </div>
                      </div>
                    </>
                  );
                }
              )}
            </div>
            <Divider variant="fullWidth"></Divider>
            <div className=" flex flex-col p-3">
              <Typography variant="h4" gutterBottom>
                Description
              </Typography>
              <Typography variant="body2" component="p">
                <p>{courseData?.data.description}</p>
              </Typography>
            </div>
            <Divider variant="fullWidth"></Divider>
            <div className=" p-3">
              <Typography variant="h4" gutterBottom>
                Course Contents
              </Typography>
            </div>
            {enrollment?.data.length === 0 ? (
              <div className=" flex justify-center items-center">
                <Link to={`/enrollment-confirmation/${courseID}`}>
                  <Button variant="contained" color="warning" size="large">
                    Enroll
                  </Button>
                </Link>
              </div>
            ) : (
              <div className=" flex flex-col md:flex-row p-2 gap-2 justify-center">
                <InfoCards
                  pics={Quiz_logo}
                  title={"Quizes"}
                  link={`/course-allplat-quizzes/${courseID}`}
                />
                <InfoCards
                  pics={Lectures_logo}
                  title={"Lectures"}
                  link={`/course-lectures/${courseID}`}
                />
                <InfoCards
                  pics={Resources_logo}
                  title={"Resources"}
                  link={`/course-resources/${courseID}`}
                />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};
