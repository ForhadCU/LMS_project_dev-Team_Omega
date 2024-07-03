import { Router } from "express";
import validationMiddleware from "../../middlewares/validationMiddleware";
import { UserValidation } from "./User.validation";
import { UserControllers } from "./User.controller";

const router = Router();

router.post(
  "/create-user",
  validationMiddleware(UserValidation.userValidationSchema),
  UserControllers.createNewUser
);

router.post(
  "/login-user",
  validationMiddleware(UserValidation.loginValidationSchema),
  UserControllers.userLogin
);

export const UserRoutes = router;
