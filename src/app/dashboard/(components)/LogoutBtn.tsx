"use client";
import { logoutAction } from "@/app/(auth)/actions";
import { PiPower } from "react-icons/pi";

const LogoutBtn = () => {
  return (
    <button
      onClick={async () => await logoutAction()}
      className="flex w-full items-center gap-5 rounded-md px-2.5 py-3 font-medium tracking-tight text-text-secondary transition hover:bg-primary/10 hover:text-primary"
    >
      <span>
        <PiPower className="size-6" />
      </span>
      <span>Logout</span>
    </button>
  );
};

export default LogoutBtn;
