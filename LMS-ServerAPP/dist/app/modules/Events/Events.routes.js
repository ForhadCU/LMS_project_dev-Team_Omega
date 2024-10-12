"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsRoutes = void 0;
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const User_interface_1 = require("../User/User.interface");
const uploadImage_1 = require("../../utils/uploadImage");
const Events_controller_1 = require("./Events.controller");
const router = (0, express_1.Router)();
router.post("/create-event", (0, auth_1.default)(User_interface_1.USER_ROLE.super_admin, User_interface_1.USER_ROLE.admin), uploadImage_1.upload.single("img"), (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
}, Events_controller_1.EventsController.createNewEvent);
router.post("/create-event-alt", (0, auth_1.default)("admin", "super admin"), Events_controller_1.EventsController.createNewEventAlt);
router.get("/get-all-events", (0, auth_1.default)("admin", "super admin", "student", "instructor"), Events_controller_1.EventsController.getAllEvents);
exports.EventsRoutes = router;
