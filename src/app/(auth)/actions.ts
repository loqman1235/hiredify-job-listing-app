"use server";

import { lucia, validateRequest } from "@/auth";
import prisma from "@/lib/prisma";
import {
  registerSchemaType,
  loginSchemaType,
  loginSchema,
} from "@/lib/validation";
import bcrypt from "bcrypt";
import { ObjectId } from "mongodb";
import { isRedirectError } from "next/dist/client/components/redirect";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const registerAction = async (
  creds: registerSchemaType,
): Promise<{ error: string }> => {
  try {
    const { username, email, password, isEmployer } = creds;

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    const userId = new ObjectId().toHexString();

    const existingUsername = await prisma.user.findFirst({
      where: {
        username: {
          equals: "username",
          mode: "insensitive",
        },
      },
    });

    if (existingUsername) {
      return {
        error: "Username is taken",
      };
    }

    const existingEmail = await prisma.user.findFirst({
      where: {
        email: {
          equals: "email",
          mode: "insensitive",
        },
      },
    });

    if (existingEmail) {
      return {
        error: "Email is taken",
      };
    }

    // Create a new user
    await prisma.user.create({
      data: {
        id: userId,
        username,
        email,
        password_hash: passwordHash,
        role: isEmployer ? "EMPLOYER" : "CANDIDATE",
      },
    });

    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );

    return redirect("/dashboard");
  } catch (error) {
    if (isRedirectError(error)) throw error;
    console.log(error);
    return {
      error: "Something went wrong. Try again later",
    };
  }
};

export const loginAction = async (
  creds: loginSchemaType,
): Promise<{ error: string } | void> => {
  try {
    const { email, password } = loginSchema.parse(creds);

    // Check if user exists
    const existingUser = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
        },
      },
    });

    if (!existingUser) {
      return {
        error: "Wrong email or password",
      };
    }

    // Check password
    const isValidPassword = await bcrypt.compare(
      password,
      existingUser.password_hash,
    );

    if (!isValidPassword) {
      return {
        error: "Wrong email or password",
      };
    }

    const session = await lucia.createSession(existingUser.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );

    return redirect("/dashboard");
  } catch (error) {
    if (isRedirectError(error)) throw error;
    console.log(error);
    return {
      error: "Something went wrong. Try again later",
    };
  }
};

export const logoutAction = async () => {
  const { session } = await validateRequest();

  if (!session) {
    throw new Error("Unauthorized");
  }

  await lucia.invalidateSession(session.id);
  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );

  return redirect("/login");
};
