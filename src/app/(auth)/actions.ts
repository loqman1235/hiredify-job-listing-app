"use server";

import { registerSchemaType } from "@/libs/validation";

export const register = async (creds: registerSchemaType) => {
  const { username, email, password } = creds;

  console.log(username, email, password);
};
