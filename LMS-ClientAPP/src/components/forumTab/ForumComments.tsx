import { Avatar, Divider } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { formatDate } from "../../utils/formatDate";

interface IForumComments {
  name: string;
  postDate: string;
  role: string;
  body: string;
}
export const ForumComments = ({
  name,
  postDate,
  role,
  body,
}: IForumComments) => {
  const firstChar = name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");
  let bgColorAvatar;
  if (role === "student") {
    bgColorAvatar = deepPurple[500];
  } else {
    bgColorAvatar = deepOrange[500];
  }
  const postedDate = formatDate(postDate);
  return (
    <div className=" ml-[5%] flex flex-col border shadow-md w-[95%] mt-3">
      <div className=" flex flex-row items-start p-1">
        <div className=" mr-2">
          <Avatar sx={{ bgcolor: bgColorAvatar }}>{firstChar}</Avatar>
        </div>

        <div className=" flex flex-col">
          <h4>
            {name} <span className=" text-sm">({role})</span>
          </h4>
          <p className=" font-light text-sm">{postedDate}</p>
        </div>
      </div>
      <Divider variant="fullWidth"></Divider>
      <div className=" p-4"> {body}</div>
    </div>
  );
};
