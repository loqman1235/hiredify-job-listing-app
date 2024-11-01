"use client";
import Brand from "@/components/common/Brand";
import Button from "@/components/common/Button";
import NavLinks from "./NavLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserAvatar from "../common/UserAvatar";
import { PiBell, PiChatCircleDots, PiPlus } from "react-icons/pi";
import { useSession } from "@/context/SessionProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  PiBookmarkSimple,
  PiBriefcase,
  PiGauge,
  PiMegaphone,
  PiUserCircle,
} from "react-icons/pi";
import LogoutBtnDropdown from "@/app/dashboard/_components/LogoutBtnDropdown";

const candidateLinks = [
  { icon: PiGauge, text: "dashboard", href: "/dashboard" },
  { icon: PiUserCircle, text: "profile", href: "/dashboard/profile" },

  { icon: PiMegaphone, text: "my applied", href: "/dashboard/applied" },
  {
    icon: PiBookmarkSimple,
    text: "shortlist jobs",
    href: "/dashboard/shortlist-jobs",
  },
  // { icon: PiChatCircleDots, text: "messages", href: "/dashboard/messages" },
] as const;

const employerLinks = [
  { icon: PiGauge, text: "dashboard", href: "/dashboard" },
  { icon: PiUserCircle, text: "profile", href: "/dashboard/profile" },
  { icon: PiBriefcase, text: "my jobs", href: "/dashboard/jobs" },
  {
    icon: PiBookmarkSimple,
    text: "shortlist candidates",
    href: "/dashboard/shortlist-candidates",
  },
] as const;

const Navbar = () => {
  const { session, user } = useSession();
  const pathname = usePathname();

  return (
    <div
      className={`relative z-40 h-[var(--navbar-height)] w-full ${pathname.startsWith("/dashboard") && "sticky top-0 bg-foreground shadow-sm"}`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5">
        <div className="flex items-center gap-10">
          <Brand />
          {!pathname.startsWith("/dashboard") && <NavLinks />}
        </div>

        {!session ? (
          <div className="flex items-center gap-2">
            <Button variant="secondary" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>
        ) : (
          <div className="flex h-full items-center gap-5">
            {user?.role === "EMPLOYER" && (
              <Button className="px-4 py-2 text-sm" variant="primary" asChild>
                <Link href="/dashboard/create-job">
                  <PiPlus className="size-4" />
                  Create Job
                </Link>
              </Button>
            )}

            <button className="relative">
              <PiChatCircleDots className="size-6 text-[var(--text-icon)] transition hover:text-text-primary" />
              <span className="absolute right-0 top-0 rounded-full border border-background bg-primary p-1 text-xs"></span>
            </button>
            <button className="relative">
              <PiBell className="size-6 text-[var(--text-icon)] transition hover:text-text-primary" />
              <span className="absolute right-0 top-0 rounded-full border border-background bg-primary p-1 text-xs"></span>
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="border-none outline-none ring-0 focus:border-none focus:outline-none focus:ring-0">
                  <UserAvatar
                    avatarUrl={user?.avatar?.url}
                    className="size-8"
                  />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="min-w-56" align="end">
                {user?.role === "CANDIDATE" &&
                  candidateLinks.map((link) => (
                    <DropdownMenuItem
                      className="capitalize"
                      key={link.text}
                      asChild
                    >
                      <Link href={link.href}>
                        <link.icon className="size-4 shrink-0" />
                        {link.text}
                      </Link>
                    </DropdownMenuItem>
                  ))}

                {user?.role === "EMPLOYER" &&
                  employerLinks.map((link) => (
                    <DropdownMenuItem
                      className="capitalize"
                      key={link.text}
                      asChild
                    >
                      <Link href={link.href}>
                        <link.icon className="size-4 shrink-0" />
                        {link.text}
                      </Link>
                    </DropdownMenuItem>
                  ))}

                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <LogoutBtnDropdown />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
