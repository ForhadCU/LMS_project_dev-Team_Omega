import { Router } from "express";
import { UserRoutes } from "../modules/User/User.routes";
import { CourseRouters } from "../modules/Courses/Courses.routes";

const router = Router();

const moduleRoutes = [
  { path: "/user", route: UserRoutes },
  { path: "/courses", route: CourseRouters },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
