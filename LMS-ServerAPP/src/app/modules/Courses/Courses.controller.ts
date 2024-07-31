import { Request, Response } from "express";
import catchAsync from "../../utils/globalTryCatchFunc";
import { CourseServices } from "./Courses.services";
import sendResponse from "../../utils/sendResponse";
import { TCourse } from "./Courses.interface";

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

const updateCourse = catchAsync(async (req: Request, res: Response) => {
  const reqbody = req.body;
  const code = reqbody.code;
  const result = await CourseServices.updateCourse(code, reqbody);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Course info updated successfully",
    data: result,
  });
});

const deactivateCourse = catchAsync(async (req: Request, res: Response) => {
  const code = req.body.code;
  const result = await CourseServices.deactivateCourse(code);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Course deactivated successfully",
    data: result,
  });
});

export const CourseControllers = {
  createNewCourse,
  getAllCourses,
  updateCourse,
  deactivateCourse,
};
