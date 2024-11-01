import { logoutAction } from "@/app/(auth)/actions";
import React from "react";
import { PiSignOut } from "react-icons/pi";

const LogoutBtnDropdown = () => {
  return (
    <button
      onClick={async () => await logoutAction()}
      className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm capitalize hover:bg-primary/10 hover:text-primary"
    >
      <PiSignOut className="size-4 shrink-0" />
      Logout
    </button>
  );
};

export default LogoutBtnDropdown;
