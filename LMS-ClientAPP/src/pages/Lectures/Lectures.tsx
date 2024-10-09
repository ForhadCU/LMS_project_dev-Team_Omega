import { useParams } from "react-router-dom";
import { CustomAccordion } from "../../components/accordion/CustomAccordion";
import { Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { useGetContentsQuery } from "../../redux/feature/content/contentAPI";
import { Loader } from "../../components/loader/Loader";
import { TContent } from "../../Types/content.type";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/feature/auth/authSlice";
import { TUser } from "../../Types/user.type";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

export const Lectures = () => {
  const params = useParams();
  const user = useAppSelector(selectCurrentUser) as TUser;
  const courseID = params.id;
  const query = {
    courseID,
    contentType: "lecture",
  };
  const { data: lectures, isError, isLoading } = useGetContentsQuery(query);
  return (
    <div className=" flex flex-col">
      <div className=" font-bold flex text-center text-2xl w-full">
        Lectures
      </div>
      <Divider variant="fullWidth" className=" my-2"></Divider>
      <div className=" flex flex-row justify-end my-2">
        {user.role === "instructor" && (
          <Link to={`/course-content-create/${courseID}`}>
            <Button variant="contained">Add Lecture +</Button>
          </Link>
        )}
      </div>
      <div className=" mt-2">
        {isError ? (
          <h2 className=" text-xl text-red-600 font-bold">
            Error occured while fetching data
          </h2>
        ) : isLoading ? (
          <div className=" flex">
            <Loader />
          </div>
        ) : (
          lectures?.data.map((lecture: TContent) => {
            return (
              <CustomAccordion
                key={lecture._id}
                title={lecture.title}
                contentDescription={lecture.description}
                link={lecture.contentlink}
                createdDate={lecture.createDate}
                icon={<LightbulbIcon />}
              />
            );
          })
        )}
      </div>
    </div>
  );
};
