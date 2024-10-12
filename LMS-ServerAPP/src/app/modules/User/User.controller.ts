import { Request, Response } from "express";
import catchAsync from "../../utils/globalTryCatchFunc";
import { UserServices } from "./User.service";
import sendResponse from "../../utils/sendResponse";
import config from "../../config";

const createNewUser = catchAsync(async (req: Request, res: Response) => {
  let batch = req.body.batch;
  const result = await UserServices.createNewUser(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User is created succesfully",
    data: result,
  });
});

const getAllUser = catchAsync(async (req, res) => {
  const rawquery = req.query;
  const result = await UserServices.getAllUsers(rawquery);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Users fetched succesfully",
    data: result,
  });
});

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.query;
  const result = await UserServices.getSingleUser(id as string);
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

const updateUserInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.userInfoUpdate(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User updated  succesfully",
    data: result,
  });
});

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

const createUsers = catchAsync(async (req: Request, res: Response) => {
  const users = req.body.users;
  const result = await UserServices.createUsers(users);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Users created successfully",
    data: result,
  });
});

export const UserControllers = {
  createNewUser,
  userLogin,
  userSoftDelete,
  userChangePassword,
  getAllUser,
  createUsers,
  getSingleUser,
  updateUserInfo,
};
