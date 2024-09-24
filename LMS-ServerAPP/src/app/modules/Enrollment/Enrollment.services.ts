import { Types } from "mongoose";
import AppError from "../../errors/AppError";
import { Course } from "../Courses/Courses.model";
import { TEnrollment } from "./Enrollment.interface";
import { Enrollment } from "./Enrollment.model";

const enrollIntoCourse = async (studentID: string, courseID: string) => {
  const getExistingEnrollment = await Enrollment.find({
    Student_ID: studentID,
    Enrolled_Course: courseID,
  });
  const getExistingCourse = await Course.findById(courseID);
  if (getExistingEnrollment) {
    throw new AppError(400, "Already enrolled into this Course");
  }
  if (!getExistingCourse) {
    throw new AppError(404, "Course nor found");
  }
  const today_date = new Date();
  const enrollmentData: TEnrollment = {
    Student_ID: new Types.ObjectId(studentID),
    Enrolled_Course: new Types.ObjectId(courseID),
    Enroll_date: today_date,
  };
  const createEnrollment = await Enrollment.create(enrollmentData);
  return createEnrollment;
};

const getEnrollments = async (rawQuery: any) => {
  let query: any = {};
  for (let key in rawQuery) {
    query[key] = rawQuery[key];
  }
  const result = await Enrollment.find(query).populate(
    "Enrolled_Course",
    "title code"
  );
  return result;
};

export const EnrollmentServices = {
  enrollIntoCourse,
  getEnrollments,
};
