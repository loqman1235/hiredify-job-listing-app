import { IconType } from "react-icons";

type StatCardProps = {
  Icon: IconType;
  text: string;
  count: number;
  bgColor: string;
  textColor: string;
};

const StatCard = ({ Icon, text, count, bgColor, textColor }: StatCardProps) => {
  return (
    <div className="flex w-full items-center gap-5 rounded-xl bg-foreground p-5 shadow">
      {/* ICON */}
      <div
        style={{
          backgroundColor: bgColor,
          color: textColor,
        }}
        className="flex items-center justify-center rounded-lg p-4"
      >
        <Icon className="size-6" />
      </div>
      <ul className="flex flex-1 flex-col items-end">
        <li
          style={{
            color: textColor,
          }}
          className="text-2xl font-bold"
        >
          {count}
        </li>
        <li className="capitalize text-text-secondary">{text}</li>
      </ul>
    </div>
  );
};

export default StatCard;
