import { Types } from "mongoose";

export type TContent = {
  title: string;
  description: string;
  courseID: Types.ObjectId;
  contentType: "file" | "video" | "resource" | "lecture";
  contentlink: string;
  createDate: string;
};

export type TGeneralResources = {
  title: string;
  description: string;
  img: string;
  link: string;
  status: "pending" | "active" | "inactive";
};
