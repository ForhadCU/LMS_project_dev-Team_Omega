import { z } from "zod";

const courseValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    code: z.string(),
    description: z.string(),
    duration: z.number(),
    img: z.string().optional(),
    isActive: z.boolean().optional(),
  }),
});
const courseUpdateValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    code: z.string().optional(),
    description: z.string().optional(),
    duration: z.number().optional(),
    img: z.string().optional(),
    isActive: z.boolean().optional(),
  }),
});

export const courseValidationSchemas = {
  courseValidationSchema,
  courseUpdateValidationSchema,
};
