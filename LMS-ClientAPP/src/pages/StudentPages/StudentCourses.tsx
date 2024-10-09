import { Divider } from "@mui/material";
//import { selectCurrentUser } from "../../redux/feature/auth/authSlice";
import { useGetAllCoursesQuery } from "../../redux/feature/course/courseAPI";
//import { useAppSelector } from "../../redux/hook";
//import { TUser } from "../../Types/user.type";
import { Loader } from "../../components/loader/Loader";
import { TCourse } from "../../Types/course.type";
import { StudentCourseCard } from "../../components/ui/StudentCourseCard";

export const StudentCourses = () => {
  //const user = useAppSelector(selectCurrentUser) as TUser;

  const {
    data: allCourses,
    isLoading,
    isError,
  } = useGetAllCoursesQuery({
    isActive: "active",
  });
  console.log(allCourses?.data);
  return (
    <div className="flex flex-col w-full ">
      <div className=" text-center w-full">
        <p className=" text-2xl font-bold ">All Courses</p>
      </div>
      <Divider variant="fullWidth" className=" my-2"></Divider>
      <div>
        {isError ? (
          <h2 className=" my-2 text-xl text-red-600 font-bold">
            Error occured while fetching data
          </h2>
        ) : isLoading ? (
          <div className=" flex">
            <Loader />
          </div>
        ) : (
          <>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2">
              {allCourses?.data.map((course: TCourse) => {
                return (
                  <StudentCourseCard
                    key={course._id}
                    title={course.title}
                    link={`/course-details-student/${course._id}`}
                    description={course.description}
                    singleAction={"Course Details"}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
