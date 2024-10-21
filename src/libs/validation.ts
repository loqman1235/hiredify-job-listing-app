import { z } from "zod";
import { SalaryType, Gender } from "@prisma/client";

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

// Edit candidate profile schema

export const editCandidateProfileSchema = z.object({
  fullname: z
    .string()
    .trim()
    .min(3, { message: "Fullname must have at least 3 characters" })
    .optional(),
  dob: z.string().optional(),
  gender: z.nativeEnum(Gender).optional(),
  category: z.string().trim().optional(),
  phoneNumber: z
    .string()
    .optional()
    .refine(
      (val) => {
        return (
          val !== undefined &&
          /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(
            val,
          )
        );
      },
      { message: "Enter a valid phone number" },
    ),
  address: z.string().trim().optional(),
  location: z.string().trim().optional(),
  salary: z.coerce.number().optional(),
  salaryType: z.nativeEnum(SalaryType).optional(),
  title: z
    .string()
    .trim()
    .min(3, { message: "Title must be at least 3 characters" })
    .optional(),
  bio: z
    .string()
    .trim()
    .min(20, { message: "Bio must be at least 20 characters" })
    .optional(),
});

export type editCandidateProfileSchemaType = z.infer<
  typeof editCandidateProfileSchema
>;

export const editEmployerProfileSchema = z.object({
  fullname: z
    .string()
    .trim()
    .min(3, { message: "Fullname must be at least 3 characters" })
    .optional(),
  phoneNumber: z
    .string()
    .trim()
    .refine(
      (val) => {
        return (
          val !== undefined &&
          /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(
            val,
          )
        );
      },
      { message: "Enter a valid phone number" },
    )
    .optional(),
  website: z
    .string()
    .trim()
    .refine(
      (val) => {
        return (
          val !== undefined &&
          /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
            val,
          )
        );
      },
      { message: "Enter a valid website URL" },
    ),
  companySize: z.coerce
    .number()
    .nonnegative({ message: "Company size must be positive" })
    .optional(),
  location: z.string().trim().optional(),
  address: z.string().trim().optional(),
  about: z
    .string()
    .trim()
    .min(20, { message: "About must be at least 20 characters" })
    .optional(),
});

export type editEmployerProfileSchemaType = z.infer<
  typeof editEmployerProfileSchema
>;
