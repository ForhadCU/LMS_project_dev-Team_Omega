import { Request, Response } from "express";
import catchAsync from "../../utils/globalTryCatchFunc";
import { UserServices } from "./User.service";
import sendResponse from "../../utils/sendResponse";
import config from "../../config";

const createNewUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.createNewUser(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User is created succesfully",
    data: result,
  });
});

const getAllUser = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUsers();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Users fetched succesfully",
    data: result,
  });
});

const userLogin = async (req: Request, res: Response) => {
  try {
    const creds = req.body;
    const { accesToken, safeUser } = await UserServices.loginUser(creds);

    res.cookie("token", accesToken, {
      secure: config.node_env === "production",
      httpOnly: true,
      sameSite: "none",
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });
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

const userSoftDelete = catchAsync(async (req, res) => {
  const userEmail = req.body.delemail;
  const result = await UserServices.deleteUser(userEmail);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User deleted successfully",
    data: null,
  });
});

const userChangePassword = catchAsync(async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  const newPass = req.body.newPassword;
  const result = await UserServices.userChangePassword(
    newPass,
    token as string
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User Password updated successfully",
    data: result,
  });
});

export const UserControllers = {
  createNewUser,
  userLogin,
  userSoftDelete,
  userChangePassword,
  getAllUser,
};
