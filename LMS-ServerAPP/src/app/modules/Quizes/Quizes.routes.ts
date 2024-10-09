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

routes.post(
  "/create-all-plat-quiz",
  auth("instructor"),
  QuizControllers.createNewIOSQuiz
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
routes.get(
  "/get-all-plat-quiz",
  auth(
    USER_ROLE.admin,
    USER_ROLE.instructor,
    USER_ROLE.super_admin,
    USER_ROLE.student
  ),
  QuizControllers.getAllIOSQuizes
);

routes.post("/create-jlingo-quiz", QuizControllers.createNewJLingoQuiz);
routes.get("/get-jlingo-quiz", QuizControllers.getAllJLingoQuizes);

export const QuizRoutes = routes;
