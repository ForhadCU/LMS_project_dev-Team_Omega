import AppError from "../../errors/AppError";
import { Course } from "../Courses/Courses.model";
import { TContent } from "./Content.interface";
import { Content } from "./Content.model";

const addNewContent = async (contentData: TContent) => {
  const getCourse = await Course.findById(contentData.courseID);
  if (!getCourse) {
    throw new AppError(404, "Course not found.");
  }
  const result = await Content.create(contentData);
  return result;
};

const getContents = async (rawQuery: any) => {
  let query: any = {};
  let page = 1;
  let limit = 10;
  for (let key in rawQuery) {
    if (query[key] === "page") {
      page = query[key];
    }
    if (query[key] === "limit") {
      limit = query[key];
    }
    query[key] = rawQuery[key];
  }
  const result = await Content.find(query)
    .skip((page - 1) * limit)
    .limit(limit)
    .sort("createdAt");
  return result;
};

export const ContentServices = {
  addNewContent,
  getContents,
};
