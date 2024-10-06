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

export const ContentControllers = {
  addNewContent,
  getAllContents,
};
