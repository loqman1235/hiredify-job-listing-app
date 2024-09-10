import Link from "next/link";
import Brand from "./common/Brand";
import Button from "./common/Button";

const navLinks = [
  { text: "home", href: "/" },
  { text: "find jobs", href: "/find" },
  { text: "blog", href: "/bog" },
  { text: "about", href: "/about" },
  { text: "contact", href: "/contact" },
] as const;

const Navbar = () => {
  return (
    <div className="w-full py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-10">
        <div className="flex items-center gap-20">
          <Brand />
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li
                key={link.text}
                className="font-medium capitalize transition hover:text-[var(--primary)]"
              >
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
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
