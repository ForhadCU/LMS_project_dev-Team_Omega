import { Link } from "react-router-dom";
import { Cards } from "../../components/ui/Cards";
import { Button } from "@mui/material";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/feature/auth/authSlice";
import { TUser } from "../../Types/user.type";

export const MyCourses = () => {
  const user = useAppSelector(selectCurrentUser) as TUser;
  console.log(user.userId);
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
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <Cards
            link={`/course-details/${1}`}
            title="Course name"
            description="Course description"
            singleAction="Course Details"
          />
          <Cards
            link={`/course-details/${2}`}
            title="Course name"
            description="Course description"
            singleAction="Course Details"
          />
          <Cards
            link={`/course-details/${3}`}
            title="Course name"
            description="Course description"
            singleAction="Course Details"
          />
        </div>
      </div>
    </div>
  );
};
