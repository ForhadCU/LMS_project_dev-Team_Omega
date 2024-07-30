import { Router } from "express";
import auth from "../../middlewares/auth";
import validationMiddleware from "../../middlewares/validationMiddleware";
import { courseValidationSchemas } from "./Courses.validation";
import { CourseControllers } from "./Courses.controller";

const router = Router();

router.post(
  "/create-course",
  auth("admin", "super admin"),
  validationMiddleware(courseValidationSchemas.courseValidationSchema),
  CourseControllers.createNewCourse
);

router.get(
  "/get-all-courses",
  auth("admin", "super admin", "student", "instructor"),
  CourseControllers.getAllCourses
);

export const CourseRouters = router;
