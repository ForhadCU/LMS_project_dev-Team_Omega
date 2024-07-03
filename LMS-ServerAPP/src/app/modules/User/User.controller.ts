import { Request, Response } from "express";
import catchAsync from "../../utils/globalTryCatchFunc";
import { UserServices } from "./User.service";
import sendResponse from "../../utils/sendResponse";

const createNewUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.createNewUser(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User is created succesfully",
    data: result,
  });
});

const userLogin = async (req: Request, res: Response) => {
  try {
    const creds = req.body;
    const { accesToken, safeUser } = await UserServices.loginUser(creds);

    res.status(200).json({
      statusCode: 200,
      success: true,
      message: "User is logged in succesfully",
      data: safeUser,
      accesToken,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
};

export const UserControllers = {
  createNewUser,
  userLogin,
};
