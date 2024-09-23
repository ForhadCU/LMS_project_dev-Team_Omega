import { Router } from "express";
import { UserRoutes } from "../modules/User/User.routes";
import { CourseRouters } from "../modules/Courses/Courses.routes";
import { ContentRoutes } from "../modules/Content/Content.routes";
import { QuizRoutes } from "../modules/Quizes/Quizes.routes";
import { AttendanceRoutes } from "../modules/Attendance/Attendance.routes";

const router = Router();

const moduleRoutes = [
  { path: "/user", route: UserRoutes },
  { path: "/courses", route: CourseRouters },
  { path: "/contents", route: ContentRoutes },
  { path: "/quiz", route: QuizRoutes },
  { path: "/attendance", route: AttendanceRoutes },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
