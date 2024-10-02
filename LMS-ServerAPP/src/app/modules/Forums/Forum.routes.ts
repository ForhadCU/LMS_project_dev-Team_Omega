import { Router } from "express";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../User/User.interface";
import { ForumControllers } from "./Forum.controller";

const router = Router();

router.post(
  "/post-forum",
  auth(
    USER_ROLE.admin,
    USER_ROLE.student,
    USER_ROLE.instructor,
    USER_ROLE.super_admin
  ),
  ForumControllers.createNewForum
);

router.get(
  "/get-all-forums",
  auth(
    USER_ROLE.admin,
    USER_ROLE.student,
    USER_ROLE.instructor,
    USER_ROLE.super_admin
  ),
  ForumControllers.getAllForums
);
router.post(
  "/post-forum-comment",
  auth(
    USER_ROLE.admin,
    USER_ROLE.student,
    USER_ROLE.instructor,
    USER_ROLE.super_admin
  ),
  ForumControllers.createNewComment
);

router.get(
  "/get-forum-comments",
  auth(
    USER_ROLE.admin,
    USER_ROLE.student,
    USER_ROLE.instructor,
    USER_ROLE.super_admin
  ),
  ForumControllers.getForumComments
);

export const ForumROutes = router;
