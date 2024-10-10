import { z } from "zod";

const courseValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    code: z.string(),
    description: z.string(),
    duration: z.number(),
    img: z.string().optional(),
    instructors: z.array(z.string()).min(1, "At least one instructor needed"),
    courseType: z.enum(["language", "technical", "personalDevelopment"]),
    isActive: z.enum(["pending", "active", "inactive"]).optional(),
  }),
});

const courseUpdateValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    code: z.string(),
    description: z.string().optional(),
    duration: z.number().optional(),
    img: z.string().optional(),
    instructors: z
      .array(z.string())
      .min(1, "At least one instructor needed")
      .optional(),
    courseType: z
      .enum(["language", "technical", "personalDevelopment"])
      .optional(),
    isActive: z.enum(["pending", "active", "inactive"]).optional(),
  }),
});

const courseDeactivateValidationSchema = z.object({
  body: z.object({
    code: z.string(),
    status: z.enum(["active", "inactive"]),
  }),
});

export const courseValidationSchemas = {
  courseValidationSchema,
  courseUpdateValidationSchema,
  courseDeactivateValidationSchema,
};
