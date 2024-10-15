"use client";
import { logoutAction } from "@/app/(auth)/actions";
import { cn } from "@/libs/utils";
import { PiSignOut } from "react-icons/pi";

type LogoutBtnProps = {
  className?: string;
};

const LogoutBtn = ({ className }: LogoutBtnProps) => {
  return (
    <button
      onClick={async () => await logoutAction()}
      className={cn(
        `flex w-full items-center gap-5 rounded-md px-2.5 py-3 font-medium tracking-tight text-text-secondary transition hover:bg-primary/10 hover:text-primary`,
        className,
      )}
    >
      <span>
        <PiSignOut className="size-6" />
      </span>
      <span>Logout</span>
    </button>
  );
};

export default LogoutBtn;
