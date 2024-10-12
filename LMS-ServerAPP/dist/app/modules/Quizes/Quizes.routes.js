"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizRoutes = void 0;
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const User_interface_1 = require("../User/User.interface");
const Quizes_controller_1 = require("./Quizes.controller");
const validationMiddleware_1 = __importDefault(require("../../middlewares/validationMiddleware"));
const Quizes_validation_1 = require("./Quizes.validation");
const routes = (0, express_1.Router)();
routes.post("/create-quiz", (0, auth_1.default)(User_interface_1.USER_ROLE.instructor), (0, validationMiddleware_1.default)(Quizes_validation_1.QuizValidators.QuizSchema), Quizes_controller_1.QuizControllers.createNewQuiz);
routes.post("/create-all-plat-quiz", (0, auth_1.default)("instructor"), Quizes_controller_1.QuizControllers.createNewIOSQuiz);
routes.get("/get-all-quiz", (0, auth_1.default)(User_interface_1.USER_ROLE.admin, User_interface_1.USER_ROLE.instructor, User_interface_1.USER_ROLE.super_admin, User_interface_1.USER_ROLE.student), Quizes_controller_1.QuizControllers.getAllQuizes);
routes.get("/get-all-plat-quiz", (0, auth_1.default)(User_interface_1.USER_ROLE.admin, User_interface_1.USER_ROLE.instructor, User_interface_1.USER_ROLE.super_admin, User_interface_1.USER_ROLE.student), Quizes_controller_1.QuizControllers.getAllIOSQuizes);
routes.post("/create-jlingo-quiz", Quizes_controller_1.QuizControllers.createNewJLingoQuiz);
routes.get("/get-jlingo-quiz", Quizes_controller_1.QuizControllers.getAllJLingoQuizes);
exports.QuizRoutes = routes;
