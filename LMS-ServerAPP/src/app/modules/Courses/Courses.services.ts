import AppError from "../../errors/AppError";
import { TCourse } from "./Courses.interface";
import { Course } from "./Courses.model";

const createNewCourse = async (courseData: TCourse) => {
  const getExistingCourse = await Course.findOne({ code: courseData.code });
  if (getExistingCourse) {
    throw new AppError(409, "Course already exists");
  }
  const newCourse = await Course.create(courseData);
  return newCourse;
};

const getAllCourses = async (rawQuery: any) => {
  let initalQuery: any = {};
  for (let key in rawQuery) {
    initalQuery[key] = rawQuery[key];
  }
  const getallCourse = await Course.find(initalQuery).populate(
    "instructors",
    "name email"
  );
  return getallCourse;
};

const getSingleCourse = async (id: string) => {
  const result = await Course.findById(id).populate(
    "instructors",
    "name email"
  );
  if (!result) {
    throw new AppError(404, "Course not found");
  }
  return result;
};

const updateCourse = async (
  courseCode: string,
  updateData: Partial<TCourse>
) => {
  const getExistingCourse = await Course.findOne({ code: courseCode });
  if (!getExistingCourse) {
    throw new AppError(404, "Course not found!");
  }
  const result = await Course.findOneAndUpdate(
    { code: courseCode },
    updateData,
    { new: true }
  );
  return result;
};

const deactivateCourse = async (courseCode: string) => {
  const getExistingCourse = await Course.findOne({ code: courseCode });
  if (!getExistingCourse) {
    throw new AppError(404, "Course not found!");
  }
  if (!getExistingCourse.isActive) {
    throw new AppError(409, "Course already deactivated!");
  }
  const result = await Course.findOneAndUpdate(
    { code: courseCode },
    { isActive: false },
    { new: true }
  );
  return result;
};

export const CourseServices = {
  createNewCourse,
  getAllCourses,
  updateCourse,
  deactivateCourse,
  getSingleCourse,
};
