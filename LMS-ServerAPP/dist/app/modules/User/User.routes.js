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
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = (0, express_1.Router)();
router.post("/create-user", (0, auth_1.default)("admin", "super admin"), (0, validationMiddleware_1.default)(User_validation_1.UserValidation.userValidationSchema), User_controller_1.UserControllers.createNewUser);
router.post("/login-user", (0, validationMiddleware_1.default)(User_validation_1.UserValidation.loginValidationSchema), User_controller_1.UserControllers.userLogin);
router.get("/get-all-users", (0, auth_1.default)("admin", "super admin"), User_controller_1.UserControllers.getAllUser);
router.post("/change-password", (0, validationMiddleware_1.default)(User_validation_1.UserValidation.changePasswordValidationSchema), User_controller_1.UserControllers.userChangePassword);
router.delete("/delete-user", (0, auth_1.default)("admin", "super admin"), (0, validationMiddleware_1.default)(User_validation_1.UserValidation.softDeleteValidationSchema), User_controller_1.UserControllers.userSoftDelete);
router.post("/create-users", 
// validationMiddleware(UserValidation.bulkUserValidationSchema),
User_controller_1.UserControllers.createUsers);
exports.UserRoutes = router;
