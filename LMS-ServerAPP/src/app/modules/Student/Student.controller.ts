import { Request, Response } from "express";
import catchAsync from "../../utils/globalTryCatchFunc";
import { StudentProfileSrvices } from "./Student.service";
import sendResponse from "../../utils/sendResponse";

const getStudentProfile = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.query;
  const result = await StudentProfileSrvices.getStudentProfile(id as string);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Users Profile fetched succesfully",
    data: result,
  });
});

const updateStudentData = catchAsync(async (req: Request, res: Response) => {
  const eventdata = req.body;
  console.log(eventdata);

  const result = await StudentProfileSrvices.updateStudentData(
    req.file,
    eventdata
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Student Info updated successfully",
    data: result,
  });
});
export const StudentProfileControllers = {
  getStudentProfile,
  updateStudentData,
};
