import netflixLogoImg from "@/assets/images/logos/netflix.svg";
import Image from "next/image";
import Link from "next/link";
import { PiBriefcase, PiMapPin, PiMoney } from "react-icons/pi";

const JobCard = () => {
  return (
    <div className="flex items-center gap-5 rounded-md bg-foreground p-5 shadow-sm">
      {/* LOGO */}
      <div className="bg-muted flex h-12 w-12 items-center justify-center overflow-hidden rounded-md p-1">
        <Image src={netflixLogoImg} alt="netflix" width={50} height={50} />
      </div>

      <div className="flex flex-col gap-2">
        <Link
          className="text-lg font-semibold tracking-tight transition hover:text-primary"
          href="/"
        >
          Software Engineer
        </Link>
        <ul className="flex items-center gap-5">
          <li className="flex items-center gap-1">
            <span className="text-[var(--text-icon)]">
              <PiBriefcase className="size-4" />
            </span>
            <span className="text-sm text-text-secondary">Technology</span>
          </li>

          <li className="flex items-center gap-1">
            <span className="text-[var(--text-icon)]">
              <PiMapPin className="size-4" />
            </span>
            <span className="text-sm text-text-secondary">
              San Francisco, CA
            </span>
          </li>

          <li className="flex items-center gap-1">
            <span className="text-[var(--text-icon)]">
              <PiMoney className="size-4" />
            </span>
            <span className="text-sm text-text-secondary">
              $120,000 - $180,000/year
            </span>
          </li>
        </ul>
        <span className="flex w-fit items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-sm text-primary">
          Full Time
        </span>
      </div>
    </div>
  );
};

export default JobCard;
