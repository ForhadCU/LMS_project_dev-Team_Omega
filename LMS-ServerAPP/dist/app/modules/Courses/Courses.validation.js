"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseValidationSchemas = void 0;
const zod_1 = require("zod");
const courseValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        code: zod_1.z.string(),
        description: zod_1.z.string(),
        duration: zod_1.z.number(),
        img: zod_1.z.string().optional(),
        isActive: zod_1.z.boolean().optional(),
    }),
});
const courseUpdateValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        code: zod_1.z.string(),
        description: zod_1.z.string().optional(),
        duration: zod_1.z.number().optional(),
        img: zod_1.z.string().optional(),
        isActive: zod_1.z.boolean().optional(),
    }),
});
const courseDeactivateValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        code: zod_1.z.string(),
    }),
});
exports.courseValidationSchemas = {
    courseValidationSchema,
    courseUpdateValidationSchema,
    courseDeactivateValidationSchema,
};
