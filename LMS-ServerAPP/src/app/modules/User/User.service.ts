import config from "../../config";
import AppError from "../../errors/AppError";
import { TUser, TUserLogin, TUserTokenData } from "./User.interface";
import { User } from "./User.model";
import { createAccessToken, verifyPassword } from "./User.utils";

const createNewUser = async (user: TUser) => {
  const result = await User.create(user);
  return result;
};

const getAllUsers = async () => {
  const result = await User.find({});
  return result;
};

const loginUser = async (loginCred: TUserLogin) => {
  const getUser = await User.findOne({ email: loginCred.email });
  if (!getUser) {
    throw new AppError(404, "User with that email does not exist.");
  }

  if (!(await verifyPassword(loginCred.password, getUser.password))) {
    throw new AppError(404, "Password mismatch");
  }

  const jwtpayload: TUserTokenData = {
    userId: getUser._id.toString(),
    role: getUser.role,
  };

  const accesToken = createAccessToken(
    jwtpayload,
    config.jwt_secret as string,
    "10d"
  );
  const safeUser = JSON.parse(JSON.stringify(getUser));
  delete safeUser.password;

  return {
    accesToken,
    safeUser,
  };
};

const deleteUser = async () => {};

export const UserServices = {
  createNewUser,
  getAllUsers,
  loginUser,
};
