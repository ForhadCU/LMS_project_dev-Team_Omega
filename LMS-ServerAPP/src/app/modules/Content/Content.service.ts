import AppError from "../../errors/AppError";
import { Course } from "../Courses/Courses.model";
import { TContent } from "./Content.interface";
import { Content } from "./Content.model";

const addNewContent = async (contentData: TContent) => {
  const getCourse = await Course.findOne({ code: contentData.courseCode });
  if (!getCourse) {
    throw new AppError(404, "Course not found.");
  }
  const result = await Content.create(contentData);
  return result;
};

export const ContentServices = {
  addNewContent,
};
