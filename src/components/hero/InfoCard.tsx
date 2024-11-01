import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

type InfoCardProps = {
  Icon: IconType;
  title: string;
  description: string;
  className?: string;
};

const InfoCard = ({ Icon, title, description, className }: InfoCardProps) => {
  return (
    <div
      className={cn(
        "flex w-fit items-center gap-4 rounded-2xl border border-foreground bg-foreground/80 p-4 shadow-xl backdrop-blur-sm",
        className,
      )}
    >
      {/* ICON */}
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="size-6" />
      </div>

      <ul>
        <li className="text-[15px] font-semibold">{title}</li>
        <li className="text-sm text-text-secondary">{description}</li>
      </ul>
    </div>
  );
};

export default InfoCard;
