import { Router } from "express";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../User/User.interface";
import { EnrollmentControllers } from "./Enrollment.controller";

const router = Router();

router.post(
  "/student-enroll",
  auth(USER_ROLE.student),
  EnrollmentControllers.enrollIntoCourse
);
router.get("/enrolled-courses", EnrollmentControllers.getAllEnrolledCOurses);

export const EnrollmentRoutes = router;
