"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_routes_1 = require("../modules/User/User.routes");
const Courses_routes_1 = require("../modules/Courses/Courses.routes");
const Content_routes_1 = require("../modules/Content/Content.routes");
const Quizes_routes_1 = require("../modules/Quizes/Quizes.routes");
const Attendance_routes_1 = require("../modules/Attendance/Attendance.routes");
const Enrollment_routes_1 = require("../modules/Enrollment/Enrollment.routes");
const Events_routes_1 = require("../modules/Events/Events.routes");
const Forum_routes_1 = require("../modules/Forums/Forum.routes");
const Student_routes_1 = require("../modules/Student/Student.routes");
const router = (0, express_1.Router)();
const moduleRoutes = [
    { path: "/user", route: User_routes_1.UserRoutes },
    { path: "/courses", route: Courses_routes_1.CourseRouters },
    { path: "/contents", route: Content_routes_1.ContentRoutes },
    { path: "/quiz", route: Quizes_routes_1.QuizRoutes },
    { path: "/attendance", route: Attendance_routes_1.AttendanceRoutes },
    { path: "/enrollment", route: Enrollment_routes_1.EnrollmentRoutes },
    { path: "/events", route: Events_routes_1.EventsRoutes },
    { path: "/forums", route: Forum_routes_1.ForumROutes },
    { path: "/student", route: Student_routes_1.studentRoutes },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
