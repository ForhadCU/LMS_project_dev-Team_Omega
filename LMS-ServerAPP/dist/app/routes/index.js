"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_routes_1 = require("../modules/User/User.routes");
const router = (0, express_1.Router)();
const moduleRoutes = [{ path: "/user", route: User_routes_1.UserRoutes }];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
