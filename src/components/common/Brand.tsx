import { cn } from "@/libs/utils";
import Link from "next/link";

type BrandProps = {
  className?: string;
};

const Brand = ({ className }: BrandProps) => {
  return (
    <Link
      href="/"
      className={cn("text-2xl font-bold tracking-tighter", className)}
    >
      <span className="text-primary">H</span>iredify.
    </Link>
  );
};

export default Brand;
