"use client";

import { Session, User } from "lucia";
import React, { createContext, useContext } from "react";

type SessionContextType = {
  user: User | null;
  session: Session | null;
};

const SessionContext = createContext<SessionContextType | null>(null);

export const SessionProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: SessionContextType;
}) => {
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);

  if (!context)
    throw new Error("useSession must be used within a SessionProvider");

  return context;
};
