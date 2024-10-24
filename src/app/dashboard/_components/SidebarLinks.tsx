"use client";

import { sidebarCandidateNav, sidebarEmployerNav } from "@/data";
import { Role } from "@prisma/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarLinksProps = {
  role: Role | undefined;
};

const SidebarLinks = ({ role }: SidebarLinksProps) => {
  const pathname = usePathname();

  return (
    <ul className="space-y-px px-2.5 py-5">
      {role === "CANDIDATE"
        ? sidebarCandidateNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-5 rounded-md px-2.5 py-3 font-medium tracking-tight text-text-secondary transition hover:bg-primary/10 hover:text-primary ${pathname === item.href && "bg-primary/10 !text-primary"}`}
              >
                <span>
                  <item.icon className="size-6" />
                </span>
                <span className="capitalize">{item.text}</span>
              </Link>
            </li>
          ))
        : sidebarEmployerNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-5 rounded-md px-2.5 py-3 font-medium tracking-tight text-text-secondary transition hover:bg-primary/10 hover:text-primary ${pathname === item.href && "bg-primary/10 !text-primary"}`}
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
