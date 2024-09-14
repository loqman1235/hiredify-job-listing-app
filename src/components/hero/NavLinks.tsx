"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { text: "home", href: "/" },
  { text: "find jobs", href: "/find" },
  { text: "blog", href: "/bog" },
  { text: "about", href: "/about" },
  { text: "contact", href: "/contact" },
] as const;

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="hidden items-center gap-7 md:flex">
      {navLinks.map((link) => (
        <li
          key={link.text}
          className={` ${pathname === link.href ? "text-primary" : "text-[var(--text)]"} font-medium capitalize transition hover:text-primary`}
        >
          <Link href={link.href}>{link.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
