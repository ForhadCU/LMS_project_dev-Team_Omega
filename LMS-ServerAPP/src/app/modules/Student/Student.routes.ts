import { NextFunction, Request, Response, Router } from "express";
import auth from "../../middlewares/auth";
import { StudentProfileControllers } from "./Student.controller";
import { upload } from "../../utils/uploadImage";

const routes = Router();

routes.get(
  "/get-student-profile",
  auth("admin", "instructor", "super admin", "student"),
  StudentProfileControllers.getStudentProfile
);

routes.patch(
  "/update-profile",
  auth("student"),
  upload.single("img"),

  (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.body);

    req.body = JSON.parse(req.body.data);
    // console.log(req.file);

    next();
  },
  StudentProfileControllers.updateStudentData
);
export const studentRoutes = routes;
