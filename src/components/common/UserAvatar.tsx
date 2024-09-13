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
    <div className={cn("h-14 w-14 overflow-hidden rounded-full", className)}>
      <Image
        src={avatarUrl ?? defaultAvatarImg}
        width={56}
        height={56}
        alt="avatar"
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default UserAvatar;
