import { TComments, TForum } from "./Forums.interface";
import { ForumComments, Forums } from "./Forums.model";

const createNewForum = async (newforumData: TForum) => {
  const createNewForum = await Forums.create(newforumData);
  return createNewForum;
};

const getAllForums = async (rawQuery: any) => {
  let query: any = {};
  let page = 1;
  let limit = 10;
  for (let key in rawQuery) {
    if (key === "page") {
      page = rawQuery[key];
    } else if (key === "limit") {
      limit = rawQuery[key];
    } else {
      query[key] = rawQuery[key];
    }
  }
  const res = await Forums.find(query)
    .skip((page - 1) * limit)
    .limit(limit)
    .sort("-createdAt")
    .populate("UserID", "name email role");
  return res;
};

const createNewComment = async (commentData: TComments) => {
  const newComment = await ForumComments.create(commentData);
  return newComment;
};

const getForumComments = async (rawQuery: any) => {
  let query: any = {};

  let page = 1;
  let limit = 10;
  for (let key in rawQuery) {
    if (key === "page") {
      page = rawQuery[key];
    } else if (key === "limit") {
      limit = rawQuery[key];
    } else {
      query[key] = rawQuery[key];
    }
  }
  const res = await ForumComments.find(query)
    .skip((page - 1) * limit)
    .limit(limit)
    .populate("UserID", "name email role");
  return res;
};

export const ForumServices = {
  createNewForum,
  getAllForums,
  createNewComment,
  getForumComments,
};
