import { Request, Response } from "express";
import catchAsync from "../../utils/globalTryCatchFunc";
import { EnrollmentServices } from "./Enrollment.services";
import sendResponse from "../../utils/sendResponse";

const enrollIntoCourse = catchAsync(async (req: Request, res: Response) => {
  const { Student_ID, Enrolled_Course, student_batch } = req.body;
  console.log(req.body);
  const result = await EnrollmentServices.enrollIntoCourse(
    Student_ID,
    Enrolled_Course,
    student_batch
  );
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Sucessfully enrolled into course",
    data: result,
  });
});

const getAllEnrolledCOurses = catchAsync(
  async (req: Request, res: Response) => {
    const result = await EnrollmentServices.getEnrollments(req.query);
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Sucessfully fetched enrolled courses",
      data: result,
    });
  }
);

export const EnrollmentControllers = {
  enrollIntoCourse,
  getAllEnrolledCOurses,
};
