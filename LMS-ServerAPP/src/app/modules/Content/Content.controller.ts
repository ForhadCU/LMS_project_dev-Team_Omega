import { Request, Response } from "express";
import catchAsync from "../../utils/globalTryCatchFunc";
import { ContentServices } from "./Content.service";
import sendResponse from "../../utils/sendResponse";

const addNewContent = catchAsync(async (req: Request, res: Response) => {
  const contentData = req.body;
  const result = await ContentServices.addNewContent(contentData);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Content uploaded successfully",
    data: result,
  });
});

const getAllContents = catchAsync(async (req: Request, res: Response) => {
  const rawquery = req.query;
  const result = await ContentServices.getContents(rawquery);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Contents fetched successfully",
    data: result,
  });
});

const addNewGeneralContent = catchAsync(async (req: Request, res: Response) => {
  const generalContent = req.body;
  const result = await ContentServices.addNewGeneralResource(generalContent);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Contents created successfully",
    data: result,
  });
});

const getGeneralResources = catchAsync(async (req: Request, res: Response) => {
  const rawQuery = req.query;
  const result = await ContentServices.getAllGeneralResources(rawQuery);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "General Contents fetched successfully",
    data: result,
  });
});

const addNewClassRecording = catchAsync(async (req: Request, res: Response) => {
  const classRecording = req.body;
  const result = await ContentServices.addNewClassRecording(classRecording);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Class recordings added successfully",
    data: result,
  });
});

const getAllClassRecording = catchAsync(async (req: Request, res: Response) => {
  const rawQuery = req.query;
  const result = await ContentServices.getAllClassRecordings(rawQuery);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Class Recordings fetched successfully",
    data: result,
  });
});

const changeGeneralContentStatus = catchAsync(
  async (req: Request, res: Response) => {
    const { status, id } = req.body;
    const result = await ContentServices.changeGeneralContentStatus(status, id);
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "General Contents status changed successfully",
      data: result,
    });
  }
);

export const ContentControllers = {
  addNewContent,
  getAllContents,
  addNewGeneralContent,
  getGeneralResources,
  changeGeneralContentStatus,
  addNewClassRecording,
  getAllClassRecording,
};
