import Image from "next/image";
import Link from "next/link";
import { PiBriefcase, PiMapPin, PiMoney } from "react-icons/pi";

type JobCardProps = {
  image: string;
  title: string;
  category: string;
  location: string;
  minSalary: number;
  maxSalary: number;
  type: string;
};

const JobCard = ({
  image,
  title,
  category,
  location,
  minSalary,
  maxSalary,
  type,
}: JobCardProps) => {
  return (
    <div className="flex items-center gap-5 rounded-xl border border-border bg-foreground p-5 shadow-sm">
      {/* LOGO */}
      <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md bg-muted p-1">
        <Image src={image} alt={title} width={50} height={50} />
      </div>

      <div className="flex flex-col gap-2">
        <Link
          className="text-lg font-semibold tracking-tight transition hover:text-primary"
          href="/"
        >
          {title}
        </Link>
        <ul className="flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-5">
          <li className="flex items-center gap-1">
            <span className="text-[var(--text-icon)]">
              <PiBriefcase className="size-4" />
            </span>
            <span className="text-sm text-text-secondary">{category}</span>
          </li>

          <li className="flex items-center gap-1">
            <span className="text-[var(--text-icon)]">
              <PiMapPin className="size-4" />
            </span>
            <span className="text-sm text-text-secondary">{location}</span>
          </li>

          <li className="flex items-center gap-1">
            <span className="text-[var(--text-icon)]">
              <PiMoney className="size-4" />
            </span>
            <span className="text-sm text-text-secondary">
              ${minSalary} - ${maxSalary}/year
            </span>
          </li>
        </ul>
        <span className="mt-5 flex w-fit items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-sm text-primary md:mt-0">
          {type}
        </span>
      </div>
    </div>
  );
};

export default JobCard;
