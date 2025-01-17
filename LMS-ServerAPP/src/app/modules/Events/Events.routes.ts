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
    // console.log(req.body);

    req.body = JSON.parse(req.body.data);
    // console.log(req.file);

    next();
  },
  EventsController.createNewEvent
);
router.post(
  "/create-event-alt",
  auth("admin", "super admin"),
  EventsController.createNewEventAlt
);
router.get(
  "/get-all-events",
  auth("admin", "super admin", "student", "instructor"),
  EventsController.getAllEvents
);
router.get(
  "/:id",
  auth("admin", "super admin", "student", "instructor"),
  EventsController.getEventById
);

router.post(
  "/create-event-alt",
  auth("admin", "super admin"),
  EventsController.createNewEventAlt
);

router.get(
  "/get-all-events",
  auth("admin", "super admin", "student", "instructor"),
  EventsController.getAllEvents
);

export const EventsRoutes = router;
