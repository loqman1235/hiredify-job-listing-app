"use client";

import Image from "next/image";
import defaultAvatarImg from "@/assets/images/avatar.png";
import { cn } from "@/lib/utils";

type UserAvatarProps = {
  avatarUrl?: string;
  className?: string;
};

const UserAvatar = ({ avatarUrl, className }: UserAvatarProps) => {
  return (
    <div className="relative flex h-full items-center">
      <div
        className={cn(
          "relative h-10 w-10 cursor-pointer overflow-hidden rounded-full",
          className,
        )}
      >
        <Image
          src={avatarUrl ?? defaultAvatarImg}
          fill
          alt="avatar"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default UserAvatar;
