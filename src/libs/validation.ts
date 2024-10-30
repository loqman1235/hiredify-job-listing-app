import { z } from "zod";
import { SalaryType, Gender, JobType } from "@prisma/client";

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
  avatar: z
    .custom<File>((file) => file instanceof File, "Please upload a valid file")
    .optional(),
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

const COMPANY_IMG_MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const COMPANY_IMG_ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const editEmployerProfileSchema = z.object({
  avatar: z
    .custom<File>((file) => file instanceof File, "Please upload a valid file")
    .refine(
      (file) => file.size <= COMPANY_IMG_MAX_FILE_SIZE,
      `Max file size is 5MB.`,
    )
    .refine(
      (file) => COMPANY_IMG_ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported.",
    )
    .optional(),
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

export const createJobSchema = z.object({
  title: requiredField("title").min(3, {
    message: "Job title must be at least 3 characters",
  }),
  jobDesc: z.string().trim().min(1, { message: "Job description is required" }),
  category: requiredField("category"),
  jobType: z.nativeEnum(JobType),
  salaryType: z.nativeEnum(SalaryType),
  minSalary: z.coerce
    .number()
    .nonnegative("Minimum salary must be positive")
    .min(1, { message: "Minimum salary is required" }),
  maxSalary: z.coerce
    .number()
    .nonnegative("Maximum salary must be positive")
    .min(1, { message: "Maximum salary is required" }),
  location: requiredField("location"),
  address: z.string().trim().optional(),
});

export type createJobSchemaType = z.infer<typeof createJobSchema>;
