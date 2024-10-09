import { Router } from "express";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../User/User.interface";
import { QuizControllers } from "./Quizes.controller";
import validationMiddleware from "../../middlewares/validationMiddleware";
import { QuizValidators } from "./Quizes.validation";

const routes = Router();

routes.post(
  "/create-quiz",
  auth(USER_ROLE.instructor),
  validationMiddleware(QuizValidators.QuizSchema),
  QuizControllers.createNewQuiz
);

routes.get(
  "/get-all-quiz",
  auth(
    USER_ROLE.admin,
    USER_ROLE.instructor,
    USER_ROLE.super_admin,
    USER_ROLE.student
  ),
  QuizControllers.getAllQuizes
);

export const QuizRoutes = routes;
