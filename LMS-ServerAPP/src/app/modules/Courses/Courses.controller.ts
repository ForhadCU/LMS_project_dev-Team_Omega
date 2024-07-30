import { Request, Response } from "express";
import catchAsync from "../../utils/globalTryCatchFunc";
import { CourseServices } from "./Courses.services";
import sendResponse from "../../utils/sendResponse";

const createNewCourse = catchAsync(async (req: Request, res: Response) => {
  const courseData = req.body;
  const result = await CourseServices.createNewCourse(courseData);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Course created successfully",
    data: result,
  });
});

const getAllCourses = catchAsync(async (req: Request, res: Response) => {
  const result = await CourseServices.getAllCourses();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Courses(Active only) fetched successfully",
    data: result,
  });
});

export const CourseControllers = {
  createNewCourse,
  getAllCourses,
};
