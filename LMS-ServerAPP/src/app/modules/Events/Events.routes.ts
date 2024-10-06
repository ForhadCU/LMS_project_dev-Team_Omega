import { NextFunction, Request, Response, Router } from "express";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../User/User.interface";
import { upload } from "../../utils/uploadImage";
import { EventsController } from "./Events.controller";

const router = Router();

router.post(
  "/create-event",
  auth(USER_ROLE.super_admin, USER_ROLE.admin),
  upload.single("img"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);

    next();
  },
  EventsController.createNewEvent
);

router.get(
  "/get-all-events",
  auth("admin", "super admin", "student", "instructor"),
  EventsController.getAllEvents
);

export const EventsRoutes = router;
