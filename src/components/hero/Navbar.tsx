import Brand from "@/components/common/Brand";
import Button from "@/components/common/Button";
import NavLinks from "./NavLinks";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-[64px] w-full">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 md:px-10">
        <div className="flex items-center gap-20">
          <Brand />
          <NavLinks />
        </div>

        <div className="flex items-center gap-2">
          <Button variant="secondary" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Sign Up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
