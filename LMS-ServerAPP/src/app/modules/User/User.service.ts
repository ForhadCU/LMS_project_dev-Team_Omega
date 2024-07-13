import config from "../../config";
import AppError from "../../errors/AppError";
import { TUser, TUserLogin, TUserTokenData } from "./User.interface";
import { User } from "./User.model";
import { createAccessToken, verifyPassword } from "./User.utils";
import jwt, { JwtPayload } from "jsonwebtoken";
import bcrypt from "bcrypt";

const createNewUser = async (user: TUser) => {
  const result = await User.create(user);
  return result;
};

const getAllUsers = async () => {
  const result = await User.find({}).select("-password -__v");
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
  if (!getUser.isActive) {
    throw new AppError(404, "User is no longer active.");
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

const userChangePassword = async (newPass: string, token: string) => {
  const decode = jwt.verify(token, config.jwt_secret as string) as JwtPayload;
  console.log(newPass);
  const getUser = await User.findOne({ _id: decode.userId });
  if (!getUser) {
    throw new Error("User does not exist");
  }
  if (!getUser.isActive) {
    throw new Error("User No longer Active.");
  }
  const encryptedPass = await bcrypt.hash(newPass, 12);
  await User.findByIdAndUpdate(
    { _id: decode.userId },
    { password: encryptedPass },
    { new: true }
  );
};

const deleteUser = async (email: string) => {
  const getUser = await User.findOne({ email: email });
  if (!getUser) {
    throw new Error("User with that email does not exist.");
  }
  const data = await User.findOneAndUpdate(
    { email: email },
    { isActive: false },
    { new: true }
  );

  return data;
};

const createUsers = async (users: TUser[]): Promise<TUser[]> => {
  const createdUsers = await User.insertMany(users);
  return createdUsers;
};

export const UserServices = {
  createNewUser,
  getAllUsers,
  loginUser,
  deleteUser,
  userChangePassword,
  createUsers,
};
