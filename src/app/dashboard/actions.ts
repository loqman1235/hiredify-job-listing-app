"use server";

import { validateRequest } from "@/auth";
import cloudinary from "@/libs/cloudinary";
import prisma from "@/libs/prisma";
import {
  createJobSchema,
  createJobSchemaType,
  editCandidateProfileSchema,
  editEmployerProfileSchema,
} from "@/libs/validation";
import { revalidatePath } from "next/cache";
// import { isRedirectError } from "next/dist/client/components/redirect";
// import { redirect } from "next/navigation";

export const updateCandidateProfile = async (
  formData: FormData,
): Promise<{ error: string } | void> => {
  try {
    const { session, user } = await validateRequest();

    if (!session) {
      throw new Error("Not Authorized");
    }

    if (user === null) {
      throw new Error("Not Authorized");
    }

    if (user.role !== "CANDIDATE") {
      throw new Error("Not Authorized");
    }

    const formObject = Object.fromEntries(formData.entries());
    const validatedFields = editCandidateProfileSchema.safeParse(formObject);

    if (!validatedFields.success) {
      return {
        error: validatedFields.error.message,
      };
    }

    const {
      avatar,
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

    let avatarResult;

    if (avatar && avatar instanceof File) {
      // Delete existing avatar from Cloudinary if it exists
      const existingAvatar = await prisma.avatar.findUnique({
        where: {
          userId: user.id,
        },
      });

      if (existingAvatar) {
        await removeAvatarFromCloudinary(existingAvatar.publicId);
      }

      avatarResult = await uploadAvatarToCloudinary(user.id, avatar);

      if ("error" in avatarResult) {
        return { error: avatarResult.error };
      }

      await prisma.avatar.upsert({
        where: {
          userId: user.id,
        },
        update: {
          publicId: avatarResult.publicId,
          url: avatarResult.url,
        },
        create: {
          publicId: avatarResult.publicId,
          url: avatarResult.url,
          userId: user.id,
        },
      });
    }

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
        candidateId: user.id,
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

    revalidatePath("/dashboard/profile");
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

    if (user === null) {
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
      avatar,
      website,
      about,
      address,
      companySize,
      fullname,
      location,
      phoneNumber,
    } = validatedFields.data;

    let avatarResult;

    if (avatar && avatar instanceof File) {
      // Delete existing avatar from Cloudinary if it exists
      const existingAvatar = await prisma.avatar.findUnique({
        where: {
          userId: user.id,
        },
      });

      if (existingAvatar) {
        await removeAvatarFromCloudinary(existingAvatar.publicId);
      }

      avatarResult = await uploadAvatarToCloudinary(user.id, avatar);

      if ("error" in avatarResult) {
        return { error: avatarResult.error };
      }

      await prisma.avatar.upsert({
        where: {
          userId: user.id,
        },
        update: {
          publicId: avatarResult.publicId,
          url: avatarResult.url,
        },
        create: {
          publicId: avatarResult.publicId,
          url: avatarResult.url,
          userId: user.id,
        },
      });
    }

    await prisma.employerProfile.upsert({
      where: {
        employerId: user.id,
      },
      update: {
        website,
        about,
        address,
        companySize,
        fullname,
        location,
        phoneNumber,
      },
      create: {
        employerId: user.id,
        website,
        about,
        address,
        companySize,
        fullname,
        location,
        phoneNumber,
      },
    });

    revalidatePath("/dashboard/profile");
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
    };
  }
};

export const createJob = async (
  values: createJobSchemaType,
): Promise<{ error: string } | void> => {
  try {
    const { session, user } = await validateRequest();

    if (!session) {
      throw new Error("Not Authorized");
    }

    if (user === null) {
      throw new Error("Not Authorized");
    }

    if (user.role !== "EMPLOYER") {
      throw new Error("Not Authorized");
    }

    const validatedFields = createJobSchema.safeParse(values);

    if (!validatedFields.success) {
      return {
        error: validatedFields.error.message,
      };
    }

    // fetch employer profile
    const employerProfile = await prisma.employerProfile.findUnique({
      where: {
        employerId: user.id,
      },
    });

    if (!employerProfile) {
      throw new Error("Employer profile not found");
    }

    const {
      expiresAt,
      category,
      jobDesc,
      jobType,
      location,
      maxSalary,
      minSalary,
      salaryType,
      title,
      address,
    } = validatedFields.data;

    await prisma.job.create({
      data: {
        categoryId: category,
        description: jobDesc,
        location,
        maxSalary,
        minSalary,
        salaryType,
        title,
        type: jobType,
        address,
        employerId: employerProfile.id,
        expiresAt,
      },
    });
    revalidatePath("/dashboard/jobs");
    // redirect("/dashboard/jobs");
  } catch (error) {
    console.log(error);
    // if (isRedirectError(error)) {
    //   throw error;
    // }
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

async function uploadAvatarToCloudinary(
  userId: string,
  file: File,
): Promise<
  | {
      error: string;
    }
  | {
      publicId: string;
      url: string;
    }
> {
  try {
    const base64 = await convertIntoBase64(file);

    const result = await cloudinary.uploader.upload(base64, {
      folder: "hiredify/avatars",
    });

    return {
      publicId: result.public_id,
      url: result.secure_url,
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
    };
  }
}

async function removeAvatarFromCloudinary(publicId: string) {
  await cloudinary.uploader.destroy(publicId);
}

export const deleteJob = async (jobId: string) => {
  try {
    const { session, user } = await validateRequest();

    if (!session) {
      throw new Error("Not Authorized");
    }

    if (user === null) {
      throw new Error("Not Authorized");
    }

    await prisma.job.delete({
      where: {
        id: jobId,
        employerId: user.id,
      },
    });

    revalidatePath("/dashboard/jobs");
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
    };
  }
};
