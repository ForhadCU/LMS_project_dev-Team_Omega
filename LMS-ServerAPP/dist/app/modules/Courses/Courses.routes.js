"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseRouters = void 0;
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validationMiddleware_1 = __importDefault(require("../../middlewares/validationMiddleware"));
const Courses_validation_1 = require("./Courses.validation");
const Courses_controller_1 = require("./Courses.controller");
const router = (0, express_1.Router)();
router.post("/create-course", (0, auth_1.default)("admin", "super admin"), (0, validationMiddleware_1.default)(Courses_validation_1.courseValidationSchemas.courseValidationSchema), Courses_controller_1.CourseControllers.createNewCourse);
router.get("/get-all-courses", (0, auth_1.default)("admin", "super admin", "student", "instructor"), Courses_controller_1.CourseControllers.getAllCourses);
router.put("/update-course", (0, auth_1.default)("admin", "super admin"), Courses_controller_1.CourseControllers.updateCourse);
router.delete("/delete-course", (0, auth_1.default)("admin", "super admin"), (0, validationMiddleware_1.default)(Courses_validation_1.courseValidationSchemas.courseDeactivateValidationSchema), Courses_controller_1.CourseControllers.deactivateCourse);
exports.CourseRouters = router;
