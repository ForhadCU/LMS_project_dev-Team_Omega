"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentRoutes = void 0;
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validationMiddleware_1 = __importDefault(require("../../middlewares/validationMiddleware"));
const Content_validation_1 = require("./Content.validation");
const Content_controller_1 = require("./Content.controller");
const router = (0, express_1.Router)();
router.post("/create-content", (0, auth_1.default)("admin", "super admin", "instructor"), (0, validationMiddleware_1.default)(Content_validation_1.ContentValidators.contentValidationSchema), Content_controller_1.ContentControllers.addNewContent);
exports.ContentRoutes = router;
