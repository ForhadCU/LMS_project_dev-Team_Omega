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

const getAllCourses = async () => {
  const getallCourse = await Course.find({ isActive: true });
  return getallCourse;
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
};
