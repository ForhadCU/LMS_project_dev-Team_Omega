import { z } from "zod";

const userValidationSchema = z.object({
  body: z.object({
    name: z.string({ invalid_type_error: "Invaid type name" }),
    email: z.string().email({ message: "Wrong email format" }),
    password: z.string().max(20),
    role: z.string(),
    isActive: z.boolean(),
  }),
});

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string().email({ message: "Wrong email format" }),
    password: z.string().max(20),
  }),
});

export const UserValidation = {
  userValidationSchema,
  loginValidationSchema,
};
