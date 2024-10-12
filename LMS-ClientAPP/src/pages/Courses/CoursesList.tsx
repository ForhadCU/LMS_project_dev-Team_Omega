// src/components/CoursesList.tsx

import { Button, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import { useGetAllCoursesQuery } from "../../redux/feature/course/courseAPI";
import Spinner from "../../components/Spinner/Spinner";

export const CoursesList = () => {
  // Fetch active courses
  const {
    data: courses,
    isLoading,
    isError,
  } = useGetAllCoursesQuery({
    isActive: "active",
  });

  if (isLoading) return <Spinner />;
  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-xl">
          Failed to load courses. Please try again later.
        </p>
      </div>
    );
  }

  const activeCourses = courses?.data || [];

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen">
      <h2 className="text-4xl font-bold mb-8 text-center text-indigo-700">
        Available Courses
      </h2>

      {/* Grid layout to display courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {activeCourses.map((course) => (
          <div
            key={course._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            {/* Course Image */}
            <img
              src={course.img}
              alt={course.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />

            <div className="p-5 flex flex-col justify-between h-48 ">
              {/* Course Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {course.title}
              </h3>

              {/* Badge for Course Type */}
              <div className="mb-4 text-center">
                <Chip
                  label={course.courseType.toUpperCase()}
                  color={
                    course.courseType === "language" ? "primary" : "secondary"
                  }
                  size="small"
                />
              </div>

              {/* Course Duration */}
              <p className="text-gray-600 mb-4 text-center">
                Duration: {course.duration}{" "}
                {course.duration > 1 ? "Months" : "Month"}
              </p>

              {/* Course Details Button */}
              <Link to={`/course-details/${course._id}`}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  className="mt-auto"
                >
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
