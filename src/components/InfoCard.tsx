import { cn } from "@/libs/utils";
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
        "bg-foreground/80 flex w-fit items-center gap-4 rounded-2xl border border-foreground p-4 shadow-sm backdrop-blur-sm",
        className,
      )}
    >
      {/* ICON */}
      <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-xl">
        <Icon className="size-6" />
      </div>

      <ul>
        <li className="text-[15px] font-semibold">{title}</li>
        <li className="text-text-secondary text-sm">{description}</li>
      </ul>
    </div>
  );
};

export default InfoCard;
