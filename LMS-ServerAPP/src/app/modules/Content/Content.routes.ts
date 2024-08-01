import { Router } from "express";
import auth from "../../middlewares/auth";
import validationMiddleware from "../../middlewares/validationMiddleware";
import { ContentValidators } from "./Content.validation";
import { ContentControllers } from "./Content.controller";

const router = Router();

router.post(
  "/create-content",
  auth("admin", "super admin", "instructor"),
  validationMiddleware(ContentValidators.contentValidationSchema),
  ContentControllers.addNewContent
);

export const ContentRoutes = router;
