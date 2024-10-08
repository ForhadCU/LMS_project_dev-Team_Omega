import { Request, Response } from "express";
import catchAsync from "../../utils/globalTryCatchFunc";
import { QuizServices } from "./Quizes.services";
import sendResponse from "../../utils/sendResponse";

const createNewQuiz = catchAsync(async (req: Request, res: Response) => {
  const result = await QuizServices.createNewQuiz(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Quiz created successfully",
    data: result,
  });
});

const createNewIOSQuiz = catchAsync(async (req: Request, res: Response) => {
  const result = await QuizServices.createNewIOSQuiz(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Quiz created (All platform) successfully",
    data: result,
  });
});

const getAllQuizes = catchAsync(async (req: Request, res: Response) => {
  const result = await QuizServices.getAllQuizes(req.query);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Quizes fetched successfully",
    data: result,
  });
});

const getAllIOSQuizes = catchAsync(async (req: Request, res: Response) => {
  const result = await QuizServices.getIOSQuizes(req.query);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Quizes fetched (All platform) successfully",
    data: result,
  });
});

export const QuizControllers = {
  createNewQuiz,
  getAllQuizes,
  createNewIOSQuiz,
  getAllIOSQuizes,
};
