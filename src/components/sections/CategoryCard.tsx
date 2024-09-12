import { IconType } from "react-icons";

type CategoryCardProps = {
  Icon: IconType;
  name: string;
  count: number;
};

const CategoryCard = ({ Icon, name, count }: CategoryCardProps) => {
  return (
    <div className="flex items-center gap-5 rounded-xl bg-foreground p-5 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="size-6" />
      </div>

      <ul>
        <li className="text-[15px] font-semibold">{name}</li>
        <li className="text-sm text-text-secondary">({count} open position)</li>
      </ul>
    </div>
  );
};

export default CategoryCard;
