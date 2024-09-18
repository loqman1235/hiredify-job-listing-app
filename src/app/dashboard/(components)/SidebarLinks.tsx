"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PiBookmarkSimple,
  PiChatCircleDots,
  PiGauge,
  PiIdentificationCard,
  PiMegaphone,
  PiUser,
} from "react-icons/pi";

const sidebarNav = [
  { icon: PiGauge, text: "dashboard", href: "/dashboard" },
  { icon: PiUser, text: "profile", href: "/dashboard/profile" },
  { icon: PiIdentificationCard, text: "my resume", href: "/dashboard/resume" },
  { icon: PiMegaphone, text: "my applied", href: "/dashboard/applied" },
  { icon: PiBookmarkSimple, text: "bookmark", href: "/dashboard/bookmark" },
  { icon: PiChatCircleDots, text: "messages", href: "/dashboard/messages" },
] as const;

const SidebarLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="space-y-px px-2.5 py-5">
      {sidebarNav.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={`flex items-center gap-5 rounded-md px-2.5 py-3 font-medium text-text-secondary transition hover:bg-primary/10 hover:text-primary ${pathname === item.href && "bg-primary/10 !text-primary"}`}
          >
            <span>
              <item.icon className="size-6" />
            </span>
            <span className="capitalize">{item.text}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarLinks;
