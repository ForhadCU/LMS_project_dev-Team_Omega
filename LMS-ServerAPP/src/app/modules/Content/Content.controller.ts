import { Request, Response } from "express";
import catchAsync from "../../utils/globalTryCatchFunc";

const addNewContent = catchAsync(async (req: Request, res: Response) => {});

export const ContentControllers = {
  addNewContent,
};
