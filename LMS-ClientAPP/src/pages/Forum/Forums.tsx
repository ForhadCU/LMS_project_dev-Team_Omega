import { Divider } from "@mui/material";
import { ForumTab } from "../../components/forumTab/ForumTab";

export const Forums = () => {
  return (
    <div className=" mx-0 p-2 flex flex-col">
      <div className=" text-center text-xl lg:text-2xl font-bold my-2">
        <h2>Forums and Discussions</h2>
      </div>
      <Divider variant="fullWidth"></Divider>
      <div className=" container my-2 w-full flex flex-col gap-2 ">
        <ForumTab name="Name LMS" role={"admin"}></ForumTab>
        <ForumTab name="Sensei Japan Lang" role="instructor"></ForumTab>
        <ForumTab name="Student New" role="student"></ForumTab>
      </div>
    </div>
  );
};
