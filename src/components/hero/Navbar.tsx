import Brand from "@/components/common/Brand";
import Button from "@/components/common/Button";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="h-[64px] w-full">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 md:px-10">
        <div className="flex items-center gap-20">
          <Brand />
          <NavLinks />
        </div>

        <div className="flex items-center gap-2">
          <Button variant="secondary">Login</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
