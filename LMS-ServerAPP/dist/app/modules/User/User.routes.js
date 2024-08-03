"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const validationMiddleware_1 = __importDefault(require("../../middlewares/validationMiddleware"));
const User_validation_1 = require("./User.validation");
const User_controller_1 = require("./User.controller");
const router = (0, express_1.Router)();
router.post("/create-user", (0, validationMiddleware_1.default)(User_validation_1.UserValidation.userValidationSchema), User_controller_1.UserControllers.createNewUser);
router.post("/login-user", (0, validationMiddleware_1.default)(User_validation_1.UserValidation.loginValidationSchema), User_controller_1.UserControllers.userLogin);
exports.UserRoutes = router;
