import bcrypt from "bcrypt";
import { TUserTokenData } from "./User.interface";
import jwt from "jsonwebtoken";

export const createAccessToken = (
  jwtpayload: TUserTokenData,
  secret: string,
  expireTime: string
) => {
  return jwt.sign(jwtpayload, secret, { expiresIn: expireTime });
};

export const verifyPassword = async (givenPass: string, userPass: string) => {
  return await bcrypt.compare(givenPass, userPass);
};
