import { Router } from "express";
import auth from "../../middlewares/auth";
import { StudentProfileControllers } from "./Student.controller";

const routes = Router();

routes.get(
  "/get-student-profile",
  auth("admin", "instructor", "super admin", "student"),
  StudentProfileControllers.getStudentProfile
);

export const studentRoutes = routes;
