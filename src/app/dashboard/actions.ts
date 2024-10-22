"use server";

import { validateRequest } from "@/auth";
import cloudinary from "@/libs/cloudinary";
import prisma from "@/libs/prisma";
import {
  editCandidateProfileSchema,
  editCandidateProfileSchemaType,
  editEmployerProfileSchema,
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
  formData: FormData,
): Promise<{ error: string } | void> => {
  try {
    const { session, user } = await validateRequest();

    if (!session) {
      throw new Error("Not Authorized");
    }

    if (user.role !== "EMPLOYER") {
      throw new Error("Not Authorized");
    }

    const formObject = Object.fromEntries(formData.entries());
    const validatedFields = editEmployerProfileSchema.safeParse(formObject);

    if (!validatedFields.success) {
      return {
        error: validatedFields.error.message,
      };
    }

    const {
      website,
      about,
      address,
      companyImage,
      companySize,
      fullname,
      location,
      phoneNumber,
    } = validatedFields.data;

    let companyImageResult;

    // Find existing employer profile
    const employerProfile = await prisma.employerProfile.findUnique({
      where: {
        employerId: user.id,
      },
      include: {
        companyImage: true,
      },
    });

    // Upload new image if provided
    if (companyImage && companyImage instanceof File) {
      // Delete existing image from Cloudinary if it exists
      if (employerProfile?.companyImage?.publicId) {
        await cloudinary.uploader.destroy(
          employerProfile.companyImage.publicId,
        );

        // Delete existing company image if there was one
        if (employerProfile?.companyImage) {
          await prisma.companyImage.delete({
            where: {
              id: employerProfile.companyImage.id,
            },
          });
        }
      }

      const base64 = await convertIntoBase64(companyImage);
      companyImageResult = await cloudinary.uploader.upload(base64, {
        folder: "hiredify/companies-images",
      });
    }

    // Create base update/create object without image
    const baseProfileData = {
      about,
      address,
      companySize,
      fullname,
      location,
      phoneNumber,
      website,
    };

    // Add company image data if we have a new image
    const profileData = companyImageResult
      ? {
          ...baseProfileData,
          companyImage: {
            create: {
              publicId: companyImageResult.public_id,
              url: companyImageResult.secure_url,
            },
          },
        }
      : baseProfileData;

    await prisma.employerProfile.upsert({
      where: {
        employerId: user.id,
      },
      update: profileData,
      create: {
        ...profileData,
        employerId: user.id,
      },
    });
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
    };
  }
};
async function convertIntoBase64(file: File) {
  const buffer = await file.arrayBuffer();
  const base64 = Buffer.from(buffer).toString("base64");
  const dataURI = `data:${file.type};base64,${base64}`;

  return dataURI;
}
