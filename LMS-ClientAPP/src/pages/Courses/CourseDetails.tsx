import { Avatar, Button, Divider, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { InfoCards } from "../../components/ui/InfoCards";
import { useGetSingleCourseQuery } from "../../redux/feature/course/courseAPI";
import { Loader } from "../../components/loader/Loader";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/feature/auth/authSlice";
import { TUser } from "../../Types/user.type";
import { Link } from "react-router-dom";

interface ITeacherProps {
  _id: string;
  name: string;
  email: string;
  img?: string;
}

export const CourseDetails = () => {
  const params = useParams();
  const courseID = params.id;
  const user = useAppSelector(selectCurrentUser) as TUser;
  const sensei_prof_pic_default =
    "https://res.cloudinary.com/teepublic/image/private/s--NtcgQRqE--/c_crop,x_10,y_10/c_fit,h_830/c_crop,g_north_west,h_1038,w_1038,x_-293,y_-104/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-404,y_-215/b_rgb:ffffff/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1631035680/production/designs/24167377_0.jpg";
  const Quiz_logo =
    "https://img.freepik.com/free-vector/speech-bubble-with-interrogation-sign-marketing-icon_24911-114378.jpg";
  const Lectures_logo =
    "https://media.istockphoto.com/id/1469104097/vector/modern-education-related-conceptual-vector-illustration-school-student-lessons-graduation.jpg?s=612x612&w=0&k=20&c=GOiV7HKKFb65FE0K0YY9RV7wcf5N4JuVB7JlKmqooj4=";
  const Resources_logo =
    "https://www.shutterstock.com/image-vector/internet-education-concept-elearning-resources-600nw-1485832811.jpg";

  const {
    data: courseData,
    isError,
    isLoading,
  } = useGetSingleCourseQuery(courseID);

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
                {user.role === "instructor" && (
                  <div>
                    <Link to={`/update-course/${courseID}`}>
                      <Button variant="contained">UPDATE INFO</Button>
                    </Link>
                  </div>
                )}
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
            <div className=" flex flex-col md:flex-row p-2 gap-2 justify-center">
              <InfoCards
                pics={Quiz_logo}
                title={"Quizes"}
                link={`/course-quizzes/${courseID}`}
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
          </div>
        </>
      )}
    </div>
  );
};
