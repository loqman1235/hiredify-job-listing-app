"use client";

import Image from "next/image";
import React, { useState } from "react";
import defaultAvatarImg from "@/assets/images/avatar.png";
import { cn } from "@/libs/utils";
import { Dropdown, DropdownItem } from "./Dropdown";
import { PiBookmarkSimple, PiGauge, PiMegaphone, PiUser } from "react-icons/pi";
import Link from "next/link";
import LogoutBtn from "@/app/dashboard/(components)/LogoutBtn";

type UserAvatarProps = {
  avatarUrl?: string;
  className?: string;
};

const links = [
  { icon: PiGauge, text: "dashboard", href: "/dashboard" },
  { icon: PiUser, text: "profile", href: "/dashboard/profile" },

  { icon: PiMegaphone, text: "my applied", href: "/dashboard/applied" },
  {
    icon: PiBookmarkSimple,
    text: "shortlist jobs",
    href: "/dashboard/shortlist-jobs",
  },
  // { icon: PiChatCircleDots, text: "messages", href: "/dashboard/messages" },
] as const;

const UserAvatar = ({ avatarUrl, className }: UserAvatarProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative flex h-full items-center">
      <div
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        className={cn(
          "h-12 w-12 cursor-pointer overflow-hidden rounded-full",
          className,
        )}
      >
        <Image
          src={avatarUrl ?? defaultAvatarImg}
          width={48}
          height={48}
          alt="avatar"
          className="h-full w-full object-cover"
        />
      </div>
      <Dropdown isOpen={isDropdownOpen} setIsOpen={setIsDropdownOpen}>
        <ul>
          {links.map((link) => (
            <DropdownItem key={link.href} setIsOpen={setIsDropdownOpen}>
              <Link
                className="flex items-center gap-5 rounded-md px-2.5 py-2 font-medium capitalize tracking-tight text-text-secondary transition hover:bg-primary/10 hover:text-primary"
                href={link.href}
              >
                <link.icon className="size-6" />
                {link.text}
              </Link>
            </DropdownItem>
          ))}
          <li>
            <LogoutBtn className="py-2" />
          </li>
        </ul>
      </Dropdown>
    </div>
  );
};

export default UserAvatar;
