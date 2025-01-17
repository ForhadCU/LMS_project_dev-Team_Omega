import { z } from "zod";

const contentValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    description: z.string(),
    courseID: z.string(),
    contentType: z.string(),
    contentlink: z.string(),
  }),
});

export const ContentValidators = {
  contentValidationSchema,
};
