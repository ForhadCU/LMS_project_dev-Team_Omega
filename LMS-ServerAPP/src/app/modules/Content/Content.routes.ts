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

router.get(
  "/get-contents",
  auth("admin", "super admin", "instructor", "student"),
  ContentControllers.getAllContents
);

router.post(
  "/post-gen-resources",
  auth("instructor"),
  ContentControllers.addNewGeneralContent
);

router.get(
  "/get-all-gen-resources",
  auth("student", "instructor", "admin", "super admin"),
  ContentControllers.getGeneralResources
);

router.patch(
  "/update-gen-resource-status",
  auth("admin"),
  ContentControllers.changeGeneralContentStatus
);

router.post(
  "/post-class-records",
  auth("instructor"),
  ContentControllers.addNewClassRecording
);

router.get(
  "/get-all-class-records",
  auth("student", "instructor", "admin", "super admin"),
  ContentControllers.getAllClassRecording
);

export const ContentRoutes = router;
