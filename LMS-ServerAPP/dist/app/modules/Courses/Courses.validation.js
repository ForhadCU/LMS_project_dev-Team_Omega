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
        instructors: zod_1.z.array(zod_1.z.string()).min(1, "At least one instructor needed"),
        courseType: zod_1.z.enum(["language", "technical", "personalDevelopment"]),
        isActive: zod_1.z.enum(["pending", "active", "inactive"]).optional(),
    }),
});
const courseUpdateValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        code: zod_1.z.string(),
        description: zod_1.z.string().optional(),
        duration: zod_1.z.number().optional(),
        img: zod_1.z.string().optional(),
        instructors: zod_1.z
            .array(zod_1.z.string())
            .min(1, "At least one instructor needed")
            .optional(),
        courseType: zod_1.z
            .enum(["language", "technical", "personalDevelopment"])
            .optional(),
        isActive: zod_1.z.enum(["pending", "active", "inactive"]).optional(),
    }),
});
const courseDeactivateValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        status: zod_1.z.string(),
        code: zod_1.z.string(),
        status: zod_1.z.enum(["active", "inactive"]),
    }),
});
exports.courseValidationSchemas = {
    courseValidationSchema,
    courseUpdateValidationSchema,
    courseDeactivateValidationSchema,
};
