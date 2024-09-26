"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_routes_1 = require("../modules/User/User.routes");
const Courses_routes_1 = require("../modules/Courses/Courses.routes");
const Content_routes_1 = require("../modules/Content/Content.routes");
const router = (0, express_1.Router)();
const moduleRoutes = [
    { path: "/user", route: User_routes_1.UserRoutes },
    { path: "/courses", route: Courses_routes_1.CourseRouters },
    { path: "/contents", route: Content_routes_1.ContentRoutes },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
