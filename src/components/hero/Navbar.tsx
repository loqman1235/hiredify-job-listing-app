"use client";
import Brand from "@/components/common/Brand";
import Button from "@/components/common/Button";
import NavLinks from "./NavLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserAvatar from "../common/UserAvatar";
import { PiBell, PiChatCircleDots } from "react-icons/pi";
import { useSession } from "@/context/SessionProvider";
const Navbar = () => {
  const { session, user } = useSession();
  const pathname = usePathname();

  if (!user) return null;

  console.log(user);

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
            <button className="relative">
              <PiChatCircleDots className="size-6 text-[var(--text-icon)] transition hover:text-text-primary" />
              <span className="absolute right-0 top-0 rounded-full border border-background bg-primary p-1 text-xs"></span>
            </button>
            <button className="relative">
              <PiBell className="size-6 text-[var(--text-icon)] transition hover:text-text-primary" />
              <span className="absolute right-0 top-0 rounded-full border border-background bg-primary p-1 text-xs"></span>
            </button>
            <UserAvatar className="h-10 w-10" avatarUrl={user?.avatar?.url} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
