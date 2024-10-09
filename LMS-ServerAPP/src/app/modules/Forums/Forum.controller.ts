import { Request, Response } from "express";
import catchAsync from "../../utils/globalTryCatchFunc";
import sendResponse from "../../utils/sendResponse";
import { ForumServices } from "./Forums.services";

const createNewForum = catchAsync(async (req: Request, res: Response) => {
  const result = await ForumServices.createNewForum(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "New forum posted!",
    data: result,
  });
});

const getAllForums = catchAsync(async (req: Request, res: Response) => {
  const rawQuery = req.query;
  const result = await ForumServices.getAllForums(rawQuery);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Posted forums fetched!",
    data: result,
  });
});

const createNewComment = catchAsync(async (req: Request, res: Response) => {
  const result = await ForumServices.createNewComment(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Commented!",
    data: result,
  });
});

const getForumComments = catchAsync(async (req: Request, res: Response) => {
  const rawQuery = req.query;
  const result = await ForumServices.getForumComments(rawQuery);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "comments fetched!",
    data: result,
  });
});

export const ForumControllers = {
  createNewForum,
  getAllForums,
  createNewComment,
  getForumComments,
};
