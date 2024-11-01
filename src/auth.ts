import { Lucia } from "lucia";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import prisma from "./lib/prisma";
import { cache } from "react";
import { User, Session } from "lucia";
import { cookies } from "next/headers";
import { Role } from "@prisma/client";

// init adapter
const adapter = new PrismaAdapter(prisma.session, prisma.user);

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },

  getUserAttributes: (attributes) => {
    return {
      id: attributes.id,
      username: attributes.username,
      role: attributes.role,
      avatar: attributes.avatar,
    };
  },
});

interface DatabaseUserAttributes {
  id: string;
  username: string;
  role: Role;
  avatar: {
    url: string;
  } | null;
}

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

export const validateRequest = cache(
  async (): Promise<{ user: User | null; session: Session | null }> => {
    const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;

    if (!sessionId) {
      return {
        user: null,
        session: null,
      };
    }

    const { session, user } = await lucia.validateSession(sessionId);

    if (session && user) {
      // Fetch the user with the avatar included
      const userWithAvatar = await prisma.user.findUnique({
        where: { id: user.id },
        include: {
          avatar: {
            select: {
              url: true,
            },
          },
        },
      });

      if (userWithAvatar) {
        // Update the user object with the avatar
        user.avatar = userWithAvatar.avatar;
      }
    }

    try {
      if (session && session.fresh) {
        const sessionCookie = lucia.createSessionCookie(session.id);
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes,
        );
      }

      if (!session) {
        const sessionCookie = lucia.createBlankSessionCookie();
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes,
        );
      }
    } catch (error) {
      console.log("Error validating session or setting cookies:", error);
    }

    return { user, session };
  },
);
