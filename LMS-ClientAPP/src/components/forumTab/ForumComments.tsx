import { Avatar, Divider } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

interface IForumComments {
  name: string;
}
export const ForumComments = ({ name }: IForumComments) => {
  const firstChar = name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");
  return (
    <div className=" ml-[5%] flex flex-col border shadow-md w-[95%] mt-3">
      <div className=" flex flex-row items-start p-1">
        <div className=" mr-2">
          <Avatar sx={{ bgcolor: deepOrange[500] }}>{firstChar}</Avatar>
        </div>

        <div className=" flex flex-col">
          <h4>{name}</h4>
          <p className=" font-light text-sm">Date</p>
        </div>
      </div>
      <Divider variant="fullWidth"></Divider>
      <div className=" p-4"> body</div>
    </div>
  );
};
