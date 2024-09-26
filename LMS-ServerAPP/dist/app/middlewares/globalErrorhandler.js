"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ZodError_1 = __importDefault(require("../errors/ZodError"));
const AppError_1 = __importDefault(require("../errors/AppError"));
const ValidationError_1 = __importDefault(require("../errors/ValidationError"));
const zod_1 = require("zod");
const globalErrorHandler = (err, req, res, next) => {
    let statusCode = 500;
    let message = "something went wrong";
    let errorSources = [
        {
            path: "",
            message: "Something went wrong",
        },
    ];
    if (err instanceof zod_1.ZodError) {
        const plainError = (0, ZodError_1.default)(err);
        statusCode = plainError === null || plainError === void 0 ? void 0 : plainError.statusCode;
        message = plainError === null || plainError === void 0 ? void 0 : plainError.message;
        errorSources = plainError === null || plainError === void 0 ? void 0 : plainError.errorSources;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === "ValidationError") {
        const plainError = (0, ValidationError_1.default)(err);
        statusCode = plainError === null || plainError === void 0 ? void 0 : plainError.statusCode;
        message = plainError === null || plainError === void 0 ? void 0 : plainError.message;
        errorSources = plainError === null || plainError === void 0 ? void 0 : plainError.errorSources;
    }
    else if (err instanceof AppError_1.default) {
        statusCode = err === null || err === void 0 ? void 0 : err.statusCode;
        message = err === null || err === void 0 ? void 0 : err.message;
        errorSources = [
            {
                path: "",
                message: err === null || err === void 0 ? void 0 : err.message,
            },
        ];
    }
    else if (err instanceof Error) {
        message = err.message;
        errorSources = [
            {
                path: "",
                message: err === null || err === void 0 ? void 0 : err.message,
            },
        ];
    }
    return res.status(statusCode).json({
        success: false,
        message,
        errorSources,
        err,
        stack: err === null || err === void 0 ? void 0 : err.stack,
    });
};
exports.default = globalErrorHandler;
