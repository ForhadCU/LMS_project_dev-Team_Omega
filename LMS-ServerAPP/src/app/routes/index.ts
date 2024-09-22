import { Router } from "express";
import { UserRoutes } from "../modules/User/User.routes";
import { CourseRouters } from "../modules/Courses/Courses.routes";
import { ContentRoutes } from "../modules/Content/Content.routes";
import { QuizRoutes } from "../modules/Quizes/Quizes.routes";

const router = Router();

const moduleRoutes = [
  { path: "/user", route: UserRoutes },
  { path: "/courses", route: CourseRouters },
  { path: "/contents", route: ContentRoutes },
  { path: "/quiz", route: QuizRoutes },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
