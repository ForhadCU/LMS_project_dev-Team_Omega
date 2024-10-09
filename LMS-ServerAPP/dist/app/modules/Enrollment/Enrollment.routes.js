"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrollmentRoutes = void 0;
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const User_interface_1 = require("../User/User.interface");
const Enrollment_controller_1 = require("./Enrollment.controller");
const router = (0, express_1.Router)();
router.post("/student-enroll", (0, auth_1.default)(User_interface_1.USER_ROLE.student), Enrollment_controller_1.EnrollmentControllers.enrollIntoCourse);
router.get("/enrolled-courses", (0, auth_1.default)(User_interface_1.USER_ROLE.student), Enrollment_controller_1.EnrollmentControllers.getAllEnrolledCOurses);
exports.EnrollmentRoutes = router;
