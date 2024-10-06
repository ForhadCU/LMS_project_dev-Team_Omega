import { z } from "zod";

const userValidationSchema = z.object({
  body: z.object({
    name: z.string({ invalid_type_error: "Invaid type name" }),
    email: z.string().email({ message: "Wrong email format" }),
    password: z.string().max(20),
    role: z.string(),
    isActive: z.boolean(),
    batch: z.string().optional(),
  }),
});

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string().email({ message: "Incorrect email format" }),
    password: z.string().max(20),
  }),
});

const softDeleteValidationSchema = z.object({
  body: z.object({
    delemail: z.string().email({ message: "Incorrect email format" }),
  }),
});

const changePasswordValidationSchema = z.object({
  body: z.object({
    newPassword: z.string(),
  }),
});

// const bulkUserValidationSchema = z.object({
//   users: z.array(
//     z.object({
//       name: z.string(),
//       email: z.string().email({ message: "Incorrect email format" }),
//       password: z.string().max(20),
//       role: z.string(),
//       isActive: z.boolean(),
//     })
//   ),
// });

// const bulkUserValidationSchema = z.object({
//   users: z.array(userValidationSchema).nonempty("At least one user is required")
// });

export const UserValidation = {
  userValidationSchema,
  loginValidationSchema,
  softDeleteValidationSchema,
  changePasswordValidationSchema,
  // bulkUserValidationSchema,
};
