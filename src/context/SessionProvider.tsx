import { Session, User } from "lucia";
import React, { createContext, useContext } from "react";

interface SessionConext {
  user: User;
  session: Session;
}

const SessionConext = createContext<SessionConext | null>(null);

export const SessionProvider = ({
  children,
  value,
}: React.PropsWithChildren<{ value: SessionConext }>) => {
  return (
    <SessionConext.Provider value={value}>{children}</SessionConext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionConext);

  if (!context)
    throw new Error("useSession must be used within a SessionProvider");

  return context;
};
