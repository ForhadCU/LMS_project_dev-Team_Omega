import { Button, Divider } from "@mui/material";
import { ForumTab } from "../../components/forumTab/ForumTab";
import { useGetAllForumsQuery } from "../../redux/feature/forum/forumAPI";
import { Loader } from "../../components/loader/Loader";
import { TForum } from "../../Types/forum.type";
import { Link } from "react-router-dom";

export const Forums = () => {
  const { data: forums, isLoading, isError } = useGetAllForumsQuery({});
  return (
    <div className=" mx-0 p-2 flex flex-col">
      <div className=" text-center text-xl lg:text-2xl font-bold my-2">
        <h2>Forums and Discussions</h2>
      </div>
      <Divider variant="fullWidth"></Divider>
      <div className=" my-2 flex flex-row justify-end">
        <Link to={"/create-forums"}>
          <Button variant="contained">POST FORUM +</Button>
        </Link>
      </div>
      <div className=" container my-2 w-full flex flex-col gap-2 ">
        {isError ? (
          <h2 className=" text-red-600 font-semibold my-2">
            Error Occured while fetching data
          </h2>
        ) : isLoading ? (
          <div className=" flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          forums?.data.map((forum: TForum) => {
            return (
              <ForumTab
                key={forum._id}
                _id={forum._id}
                name={forum.UserID.name}
                role={forum.UserID.role}
                body={forum.body}
                title={forum.Title}
                postdate={forum.createdAt}
                likes={forum.likes}
              />
            );
          })
        )}
      </div>
    </div>
  );
};
