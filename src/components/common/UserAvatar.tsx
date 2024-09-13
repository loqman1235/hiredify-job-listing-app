import Image from "next/image";
import React from "react";
import defaultAvatarImg from "@/assets/images/avatar.png";
import { cn } from "@/libs/utils";

type UserAvatarProps = {
  avatarUrl?: string;
  className?: string;
};
const UserAvatar = ({ avatarUrl, className }: UserAvatarProps) => {
  return (
    <div className={cn("h-12 w-12 overflow-hidden rounded-full", className)}>
      <Image
        src={avatarUrl ?? defaultAvatarImg}
        width={48}
        height={48}
        alt="avatar"
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default UserAvatar;
