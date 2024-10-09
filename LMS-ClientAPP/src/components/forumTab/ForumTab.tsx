import { Avatar, Button, Divider, TextField, Typography } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { ForumComments } from "./ForumComments";
import SendIcon from "@mui/icons-material/Send";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import { useState } from "react";
interface IForumTabProps {
  role: string;
  name: string;
}
export const ForumTab = ({ role, name }: IForumTabProps) => {
  const [isHidden, setIsHidden] = useState(true);
  let bgColorAvatar;
  if (role === "student") {
    bgColorAvatar = deepPurple[500];
  } else {
    bgColorAvatar = deepOrange[500];
  }
  const firstChar = name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");

  return (
    <div className="block mb-3">
      <div className=" rounded-md shadow-lg w-full flex flex-col ">
        <div className=" flex flex-row gap-1 items-start p-2 bg-slate-50">
          <div className=" mr-2">
            <Avatar sx={{ bgcolor: bgColorAvatar }}>{firstChar}</Avatar>
          </div>
          <div className=" flex flex-col  ">
            <Typography variant="h6" gutterBottom>
              {name}
            </Typography>
            <p className=" text-base font-light text-green-700">{role}</p>
            <Typography variant="overline" gutterBottom>
              Date
            </Typography>
          </div>
        </div>
        <Divider variant="fullWidth"></Divider>
        <div className="flex flex-col p-2">
          <div className=" mt-2">
            <Typography variant="h4" gutterBottom>
              Title
            </Typography>
          </div>
          <div className=" p-2">
            <Typography variant="body1">Paragraph</Typography>
          </div>
        </div>
        <div className=" mt-2 flex flex-row w-full">
          <div className=" w-1/2 flex items-center justify-center border">
            <Button className=" rounded-md w-full" variant="outlined">
              <ThumbUpIcon />
            </Button>
          </div>
          <div className=" w-1/2 flex items-center justify-center border">
            <Button
              className=" rounded-md w-full"
              variant="outlined"
              onClick={() => setIsHidden(!isHidden)}
            >
              <CommentIcon />
            </Button>
          </div>
        </div>
      </div>
      {/**Hidden section */}
      <div className={`mb-2  flex-col gap-2 ${isHidden ? "hidden" : "flex"}`}>
        <ForumComments name="Abdullah Noman" />

        <div className=" w-[95%] ml-[5%] ">
          <TextField
            className=" w-[95%] mt-[20px]"
            id="outlined-basic"
            label="post comment"
            variant="outlined"
          />
          <Button variant="contained">
            <SendIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};
