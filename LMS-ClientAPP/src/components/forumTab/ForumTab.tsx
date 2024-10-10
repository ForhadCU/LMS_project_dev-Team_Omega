import { Avatar, Button, Divider, TextField, Typography } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { ForumComments } from "./ForumComments";
import SendIcon from "@mui/icons-material/Send";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import { useState } from "react";
import {
  useGetAllForumCommentsQuery,
  usePostForumCommentMutation,
} from "../../redux/feature/forum/forumAPI";
import { TForumComment } from "../../Types/forum.type";
import { Loader } from "../loader/Loader";
import { formatDate } from "../../utils/formatDate";
import toast from "react-hot-toast";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/feature/auth/authSlice";
import { TUser } from "../../Types/user.type";
interface IForumTabProps {
  _id: string;
  role: string;
  name: string;
  postdate: string;
  title: string;
  body: string;
  likes: number;
}
export const ForumTab = ({
  _id,
  role,
  name,
  postdate,
  title,
  body,
  likes,
}: IForumTabProps) => {
  const [isHidden, setIsHidden] = useState(true);
  const [newComment, setNewCommnet] = useState("");
  let bgColorAvatar;
  if (role === "student") {
    bgColorAvatar = deepPurple[500];
  } else {
    bgColorAvatar = deepOrange[500];
  }
  const query = { ForumID: _id };
  const {
    data: comments,
    isLoading,
    isError,
  } = useGetAllForumCommentsQuery(query);
  const user = useAppSelector(selectCurrentUser) as TUser;
  const firstChar = name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");

  // Construct the formatted date
  const formattedDate = formatDate(postdate);
  const [postForumComment, { isError: postCommentError, error }] =
    usePostForumCommentMutation();

  const handlePostComment = async (forumID: string) => {
    if (newComment === "") {
      toast.error("Comment field is empty");
      return;
    }
    const newCommentData = {
      UserID: user.userId,
      ForumID: forumID,
      message: newComment,
      likes: 0,
    };
    try {
      const res = await postForumComment(newCommentData).unwrap();
      if (res.success) {
        toast.success(res.message);
      }
    } catch (err: any) {
      console.log(error);
    }
  };

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
              {formattedDate}
            </Typography>
          </div>
        </div>
        <Divider variant="fullWidth"></Divider>
        <div className="flex flex-col p-2">
          <div className=" mt-2">
            <Typography variant="h4" gutterBottom>
              {title}
            </Typography>
          </div>
          <div className=" p-2">
            <Typography variant="body1">{body}</Typography>
          </div>
        </div>
        <div className=" mt-2 flex flex-row w-full">
          <div className=" w-1/2 flex items-center justify-center border">
            <Button className=" rounded-md w-full" variant="outlined">
              <ThumbUpIcon /> {likes}
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
        <p className=" font-semibold p-1">Comments</p>
        {isLoading ? (
          <div className=" flex justify-center">
            {" "}
            <Loader />
          </div>
        ) : isError ? (
          <h3 className=" text-red-600 font-semibold">
            Error occured while fetching comments
          </h3>
        ) : null}
        {comments?.data.map((comment: TForumComment) => {
          return (
            <ForumComments
              key={comment._id}
              name={comment.UserID.name}
              postDate={comment.createdAt}
              role={comment.UserID.role}
              body={comment.message}
            />
          );
        })}

        <div className=" w-[95%] ml-[5%] ">
          <TextField
            className=" w-[95%] mt-[20px]"
            id="outlined-basic"
            label="post comment"
            variant="outlined"
            onChange={(e) => setNewCommnet(e.target.value)}
          />
          <Button variant="contained" onClick={() => handlePostComment(_id)}>
            <SendIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};
