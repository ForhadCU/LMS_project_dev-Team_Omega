import { Router } from "express";
import validationMiddleware from "../../middlewares/validationMiddleware";
import { UserValidation } from "./User.validation";
import { UserControllers } from "./User.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "./User.interface";

const router = Router();

router.post(
  "/create-user",
  auth("admin", "super admin"),
  validationMiddleware(UserValidation.userValidationSchema),
  UserControllers.createNewUser
);

router.post(
  "/login-user",
  validationMiddleware(UserValidation.loginValidationSchema),
  UserControllers.userLogin
);

router.get(
  "/get-all-users",
  auth("admin", "super admin"),
  UserControllers.getAllUser
);

router.post(
  "/change-password",
  validationMiddleware(UserValidation.changePasswordValidationSchema),
  UserControllers.userChangePassword
);

router.delete(
  "/delete-user",
  auth("admin", "super admin"),
  validationMiddleware(UserValidation.softDeleteValidationSchema),
  UserControllers.userSoftDelete
);
export const UserRoutes = router;
