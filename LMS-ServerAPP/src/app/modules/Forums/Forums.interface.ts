import { Types } from "mongoose";

export type TForum = {
  UserID: Types.ObjectId;
  Title: string;
  body: string;
  imgs?: Array<string>;
  likes: number;
};

export type TComments = {
  UserID: Types.ObjectId;
  ForumID: Types.ObjectId;
  message: string;
  likes: number;
};
