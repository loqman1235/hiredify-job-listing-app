"use server";

import { validateRequest } from "@/auth";
import prisma from "@/libs/prisma";
import {
  editCandidateProfileSchema,
  editCandidateProfileSchemaType,
  editEmployerProfileSchema,
  editEmployerProfileSchemaType,
} from "@/libs/validation";

export const updateCandidateProfile = async (
  fields: editCandidateProfileSchemaType,
): Promise<{ error: string } | void> => {
  try {
    const { session, user } = await validateRequest();

    if (!session) {
      throw new Error("Not Authorized");
    }

    if (user.role !== "CANDIDATE") {
      throw new Error("Not Authorized");
    }

    const validatedFields = editCandidateProfileSchema.safeParse(fields);

    if (!validatedFields.success) {
      return {
        error: validatedFields.error.message,
      };
    }

    const {
      address,
      bio,
      //   category,
      dob,
      fullname,
      gender,
      location,
      phoneNumber,
      salary,
      salaryType,
      title,
    } = validatedFields.data;

    await prisma.candidateProfile.upsert({
      where: {
        candidateId: user.id,
      },
      update: {
        address,
        bio,
        dateOfBirth: dob,
        fullname,
        gender,
        location,
        phoneNumber,
        salary,
        salaryType,
        title,
      },
      create: {
        candidateId: user.id,
        address,
        bio,
        dateOfBirth: dob,
        fullname,
        gender,
        location,
        phoneNumber,
        salary,
        salaryType,
        title,
      },
    });
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
    };
  }
};

export const updateEmployerProfile = async (
  fields: editEmployerProfileSchemaType,
): Promise<{ error: string } | void> => {
  try {
    const { session, user } = await validateRequest();

    if (!session) {
      throw new Error("Not Authorized");
    }

    if (user.role !== "EMPLOYER") {
      throw new Error("Not Authorized");
    }

    const validatedFields = editEmployerProfileSchema.safeParse(fields);

    if (!validatedFields.success) {
      return {
        error: validatedFields.error.message,
      };
    }

    const {
      website,
      about,
      address,
      companySize,
      fullname,
      location,
      phoneNumber,
    } = validatedFields.data;

    await prisma.employerProfile.upsert({
      where: {
        employerId: user?.id,
      },
      update: {
        about,
        address,
        companySize,
        fullname,
        location,
        phoneNumber,
        website,
      },
      create: {
        employerId: user.id,
        about,
        address,
        companySize,
        fullname,
        location,
        phoneNumber,
        website,
      },
    });
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
    };
  }
};
