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

const getAllQuizes = catchAsync(async (req: Request, res: Response) => {
  const result = await QuizServices.getAllQuizes(req.query);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Quizes fetched successfully",
    data: result,
  });
});

export const QuizControllers = {
  createNewQuiz,
  getAllQuizes,
};
