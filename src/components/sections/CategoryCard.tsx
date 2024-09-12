import Link from "next/link";
import { IconType } from "react-icons";

type CategoryCardProps = {
  Icon: IconType;
  name: string;
  count: number;
};

const CategoryCard = ({ Icon, name, count }: CategoryCardProps) => {
  return (
    <Link
      href="/category"
      className="group/catCard flex items-center gap-5 rounded-xl bg-foreground p-5 shadow-sm"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition group-hover/catCard:bg-primary group-hover/catCard:text-foreground">
        <Icon className="size-6" />
      </div>

      <ul>
        <li className="text-[15px] font-semibold">{name}</li>
        <li className="text-sm text-text-secondary">({count} open position)</li>
      </ul>
    </Link>
  );
};

export default CategoryCard;
