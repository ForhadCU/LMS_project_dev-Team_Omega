import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/globalTryCatchFunc";
import AppError from "../errors/AppError";
import config from "../config";
import jwt, { JwtPayload } from "jsonwebtoken";
import { TUserRole } from "../modules/User/User.interface";

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const tokenString = req.headers.authorization;
    if (!tokenString) {
      throw new AppError(401, "Unauthorized access denied");
    }
    const token = tokenString?.split(" ")[1];
    const decoded = jwt.verify(
      token as string,
      config.jwt_secret as string
    ) as JwtPayload;
    const { role } = decoded;
    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(401, "Unauthorized access denied");
    }

    req.user = decoded;
    next();
  });
};

export default auth;
