import { Request, Response } from "express";
import catchAsync from "../../utils/globalTryCatchFunc";
import { AttendanceServices } from "./Attendance.services";
import sendResponse from "../../utils/sendResponse";

const StudentCheckIn = catchAsync(async (req: Request, res: Response) => {
  const studentID = req.params.id;

  const result = await AttendanceServices.StudentCheckIn(studentID);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Check In Complete for today!",
    data: result,
  });
});

const GetAllStudentAttendance = catchAsync(
  async (req: Request, res: Response) => {}
);

export const AttendanceControllers = {
  StudentCheckIn,
  GetAllStudentAttendance,
};
