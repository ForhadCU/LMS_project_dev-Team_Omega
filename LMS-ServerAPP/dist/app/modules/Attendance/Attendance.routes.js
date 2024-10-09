"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceRoutes = void 0;
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const User_interface_1 = require("../User/User.interface");
const Attendance_controller_1 = require("./Attendance.controller");
const router = (0, express_1.Router)();
router.post("/check-in/:id", (0, auth_1.default)(User_interface_1.USER_ROLE.student), Attendance_controller_1.AttendanceControllers.StudentCheckIn);
router.get("/get-all-attendance", (0, auth_1.default)(User_interface_1.USER_ROLE.admin, User_interface_1.USER_ROLE.super_admin), Attendance_controller_1.AttendanceControllers.GetAllStudentAttendance);
exports.AttendanceRoutes = router;
