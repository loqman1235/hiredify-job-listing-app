import Link from "next/link";
import Brand from "./common/Brand";
import {
  PiAt,
  PiFacebookLogo,
  PiInstagramLogo,
  PiPhone,
  PiXLogo,
} from "react-icons/pi";

const Footer = () => {
  return (
    <div className="bg-footer w-full px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 border-b border-b-muted py-10 md:grid-cols-4">
        <div className="flex flex-col gap-5">
          <Brand className="text-xl" />
          <p className="text-sm text-text-secondary">
            Empowering Your Career Journey with Opportunities That Match Your
            Skills and Ambitions
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-lg font-bold">Explore</h3>
          <ul className="flex flex-col gap-3 text-sm text-text-secondary">
            <li>
              <Link className="hover:underline" href="/">
                Find Jobs
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/">
                Blog
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-lg font-bold">Resources</h3>
          <ul className="flex flex-col gap-3 text-sm text-text-secondary">
            <li>
              <Link className="hover:underline" href="/">
                Help Center
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/">
                Salary Insights
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/">
                Job Search Tips
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-lg font-bold">Contact</h3>
          <ul className="flex flex-col gap-3 text-sm text-text-secondary">
            <li className="flex items-center gap-2">
              <span>
                <PiAt className="size-4" />
              </span>
              <span>contact@hiredify.com</span>
            </li>
            <li className="flex items-center gap-2">
              <span>
                <PiPhone className="size-4" />
              </span>
              <span>+123-456-7890</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between py-5">
        <p className="text-sm">© 2024 Hiredify. All Right Reserved.</p>
        <ul className="flex items-center gap-5">
          <li>
            <a href="#" className="transition hover:text-primary">
              <PiFacebookLogo className="size-5" />
            </a>
          </li>
          <li>
            <a href="#" className="transition hover:text-primary">
              <PiXLogo className="size-5" />
            </a>
          </li>
          <li>
            <a href="#" className="transition hover:text-primary">
              <PiInstagramLogo className="size-5" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
