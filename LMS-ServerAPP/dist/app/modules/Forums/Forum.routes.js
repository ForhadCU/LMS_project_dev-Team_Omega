"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumROutes = void 0;
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const User_interface_1 = require("../User/User.interface");
const Forum_controller_1 = require("./Forum.controller");
const router = (0, express_1.Router)();
router.post("/post-forum", (0, auth_1.default)(User_interface_1.USER_ROLE.admin, User_interface_1.USER_ROLE.student, User_interface_1.USER_ROLE.instructor, User_interface_1.USER_ROLE.super_admin), Forum_controller_1.ForumControllers.createNewForum);
router.get("/get-all-forums", (0, auth_1.default)(User_interface_1.USER_ROLE.admin, User_interface_1.USER_ROLE.student, User_interface_1.USER_ROLE.instructor, User_interface_1.USER_ROLE.super_admin), Forum_controller_1.ForumControllers.getAllForums);
router.post("/post-forum-comment", (0, auth_1.default)(User_interface_1.USER_ROLE.admin, User_interface_1.USER_ROLE.student, User_interface_1.USER_ROLE.instructor, User_interface_1.USER_ROLE.super_admin), Forum_controller_1.ForumControllers.createNewComment);
router.get("/get-forum-comments", (0, auth_1.default)(User_interface_1.USER_ROLE.admin, User_interface_1.USER_ROLE.student, User_interface_1.USER_ROLE.instructor, User_interface_1.USER_ROLE.super_admin), Forum_controller_1.ForumControllers.getForumComments);
exports.ForumROutes = router;
