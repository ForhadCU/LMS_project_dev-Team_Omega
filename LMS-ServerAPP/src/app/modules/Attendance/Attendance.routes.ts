import { Router } from "express";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../User/User.interface";
import { AttendanceControllers } from "./Attendance.controller";

const router = Router();

router.post(
  "/check-in/:id",
  auth(USER_ROLE.student),
  AttendanceControllers.StudentCheckIn
);

router.get(
  "/get-all-attendance",
  auth(USER_ROLE.admin, USER_ROLE.super_admin),
  AttendanceControllers.GetAllStudentAttendance
);

export const AttendanceRoutes = router;
