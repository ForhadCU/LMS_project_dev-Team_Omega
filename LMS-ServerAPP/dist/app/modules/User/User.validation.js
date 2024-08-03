"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const userValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ invalid_type_error: "Invaid type name" }),
        email: zod_1.z.string().email({ message: "Wrong email format" }),
        password: zod_1.z.string().max(20),
        role: zod_1.z.string(),
        isActive: zod_1.z.boolean(),
    }),
});
const loginValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().email({ message: "Wrong email format" }),
        password: zod_1.z.string().max(20),
    }),
});
exports.UserValidation = {
    userValidationSchema,
    loginValidationSchema,
};
