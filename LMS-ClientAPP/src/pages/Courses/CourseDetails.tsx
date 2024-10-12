// src/components/CourseDetails.tsx

import { Avatar, Divider, Typography, Box, Grid } from "@mui/material";
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
import {
  defaultAvatar,
  Lectures_logo,
  Quiz_logo,
  Resources_logo,
  sensei_prof_pic_default,
} from "../../constants";

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

  const {
    data: courseData,
    isError,
    isLoading,
  } = useGetSingleCourseQuery(courseID);

  return (
    <div className="w-full p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      {isError ? (
        <Typography variant="h5" className="text-center text-red-600 my-4">
          Error occurred while fetching data
        </Typography>
      ) : isLoading ? (
        <Loader />
      ) : (
        <>
          {/* Course Header */}
          <Box className="w-full p-6 bg-white rounded-lg shadow-md mb-6">
            <Typography
              variant="h3"
              component="h1"
              className="font-bold text-indigo-700"
            >
              {courseData?.data.title}
            </Typography>
            <Grid container spacing={2} className="mt-4">
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="body1"
                  className="flex items-center text-gray-700"
                >
                  <ModelTrainingIcon className="mr-2" />
                  {courseData?.data.courseType.toUpperCase()}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="body1"
                  className="flex items-center text-gray-700"
                >
                  <CalendarTodayIcon className="mr-2" />
                  {new Date(courseData?.data.createdAt).toLocaleDateString()}
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Divider />

          {/* Instructors Section */}
          <Box className="w-full p-6 bg-white rounded-lg shadow-md my-6">
            <Typography
              variant="h4"
              className="font-semibold mb-4 text-indigo-600"
            >
              Instructors
            </Typography>
            <Grid container spacing={4}>
              {courseData?.data?.instructors.map(
                (instructor: ITeacherProps) => (
                  <Grid item xs={12} sm={6} md={4} key={instructor._id}>
                    <Box className="flex items-center space-x-4">
                      <Avatar
                        src={instructor.img || defaultAvatar}
                        alt={instructor.name}
                        className="w-16 h-16"
                      />
                      <Box>
                        <Typography
                          variant="h6"
                          className="font-medium text-gray-800"
                        >
                          {instructor.name}
                        </Typography>
                        <Typography variant="body2" className="text-gray-500">
                          {instructor.email}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                )
              )}
            </Grid>
          </Box>

          <Divider />

          {/* Description Section */}
          <Box className="w-full p-6 bg-white rounded-lg shadow-md my-6">
            <Typography
              variant="h4"
              className="font-semibold mb-4 text-indigo-600"
            >
              Description
            </Typography>
            <Typography variant="body1" className="text-gray-700">
              {courseData?.data.description}
            </Typography>
          </Box>

          <Divider />

          {/* Course Contents Section */}
          <Box className="w-full p-6 bg-white rounded-lg shadow-md my-6">
            <Typography
              variant="h4"
              className="font-semibold mb-6 text-indigo-600"
            >
              Course Contents
            </Typography>
            <Grid container spacing={4} className="justify-center">
              <Grid item xs={12} sm={6} md={4}>
                <InfoCards
                  pics={Quiz_logo}
                  title="Quizzes"
                  link={`/course-quizzes/${courseID}`}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InfoCards
                  pics={Lectures_logo}
                  title="Lectures"
                  link={`/course-lectures/${courseID}`}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InfoCards
                  pics={Resources_logo}
                  title="Resources"
                  link={`/course-resources/${courseID}`}
                />
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </div>
  );
};

export default CourseDetails;
