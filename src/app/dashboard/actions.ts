"use server";

import { validateRequest } from "@/auth";
import prisma from "@/libs/prisma";
import {
  editCandidateProfileSchema,
  editCandidateProfileSchemaType,
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
