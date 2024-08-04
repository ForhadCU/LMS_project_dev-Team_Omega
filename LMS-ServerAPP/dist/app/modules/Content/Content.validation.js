"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentValidators = void 0;
const zod_1 = require("zod");
const contentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        description: zod_1.z.string(),
        courseCode: zod_1.z.string(),
        contentType: zod_1.z.string(),
        contentlink: zod_1.z.string(),
    }),
});
exports.ContentValidators = {
    contentValidationSchema,
};
