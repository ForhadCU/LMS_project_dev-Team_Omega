import config from "../../config";
import AppError from "../../errors/AppError";
import { TUser, TUserLogin, TUserTokenData } from "./User.interface";
import { User } from "./User.model";
import { createAccessToken, verifyPassword } from "./User.utils";
import jwt, { JwtPayload } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { sendEmail } from "../../utils/sendEmail";
import mongoose from "mongoose";
import { StudentProfile } from "../Student/Student.model";

const createNewUser = async (user: TUser, batch?: string) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const newUser = await User.create([user], { session });
    if (!newUser.length) {
      throw new AppError(400, "Failed to create user");
    }
    if (user.role === "student") {
      const newStudentData = {
        fullName: user.name,
        userID: newUser[0]._id,
        age: 20,
        subjectMajor: "N/A",
        batch: batch,
        address: "N/A",
        img: "https://cdn-icons-png.flaticon.com/512/67/67902.png",
        performance: {
          totalAttendance: 0,
          avgDailyQuizMarks: 0,
          avgWeeklyQuizMarks: 0,
          classAttention: "Good",
        },
      };
      const newStudent = await StudentProfile.create([newStudentData], {
        session,
      });
      if (!newStudent.length) {
        throw new AppError(400, "Failed to create student profile");
      }
    }
    const mailBody = `<p> ${user.name} your account has been created. Login with this password ${user.password} </p>`;
    sendEmail(user.email, mailBody);
    await session.commitTransaction();
    await session.endSession();

    return newUser;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
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
