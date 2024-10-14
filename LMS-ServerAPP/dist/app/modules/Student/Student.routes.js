"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRoutes = void 0;
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const Student_controller_1 = require("./Student.controller");
const uploadImage_1 = require("../../utils/uploadImage");
const routes = (0, express_1.Router)();
routes.get("/get-student-profile", (0, auth_1.default)("admin", "instructor", "super admin", "student"), Student_controller_1.StudentProfileControllers.getStudentProfile);
routes.patch("/update-profile", (0, auth_1.default)("student"), uploadImage_1.upload.single("img"), (req, res, next) => {
    // console.log(req.body);
    req.body = JSON.parse(req.body.data);
    // console.log(req.file);
    next();
}, Student_controller_1.StudentProfileControllers.updateStudentData);
exports.studentRoutes = routes;
