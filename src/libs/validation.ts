import { z } from "zod";

const requiredField = (fieldName: string) => {
  return z
    .string()
    .trim()
    .min(1, { message: `${fieldName} is required` });
};

export const registerSchema = z.object({
  username: requiredField("Username").min(3, {
    message: "Username must be at least 3 characters",
  }),
  email: requiredField("Email").email({
    message: "Please enter a valid email address",
  }),
  password: requiredField("Password").min(8, {
    message: "Password must be at least 8 characters",
  }),
  isEmployer: z.boolean().optional(),
});

export type registerSchemaType = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: requiredField("Email").email({
    message: "Please enter a valid email address",
  }),
  password: requiredField("Password"),
});

export type loginSchemaType = z.infer<typeof loginSchema>;
