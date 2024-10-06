import { Link } from "react-router-dom";
import { Cards } from "../../components/ui/Cards";
import { Button } from "@mui/material";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/feature/auth/authSlice";
import { TUser } from "../../Types/user.type";
import { useGetAllCoursesQuery } from "../../redux/feature/course/courseAPI";
import { Loader } from "../../components/loader/Loader";
import { TCourse } from "../../Types/course.type";

export const MyCourses = () => {
  const user = useAppSelector(selectCurrentUser) as TUser;
  const {
    data: myCourses,
    isLoading,
    isError,
  } = useGetAllCoursesQuery({
    instructors: user.userId,
    isActive: true,
  });
  return (
    <div className=" flex flex-col w-full items-center">
      <div className=" text-center">
        <p className=" text-2xl font-bold ">My Courses</p>
      </div>
      <div className=" flex flex-col my-2">
        <div className=" flex flex-row justify-end my-2 ">
          <Link to={"/create-course"}>
            <Button variant="contained">Create Course +</Button>
          </Link>
        </div>
        {isError ? (
          <div className=" flex text-red-500">Error occured while loading</div>
        ) : isLoading ? (
          <Loader />
        ) : (
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {myCourses?.data.map((course: TCourse) => {
              return (
                <Cards
                  key={course._id}
                  link={`/course-details/${course._id}`}
                  title={course.title}
                  description={course.description}
                  singleAction="Course Details"
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
