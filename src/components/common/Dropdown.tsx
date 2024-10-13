import { cn } from "@/libs/utils";

type DropdownProps = {
  children: React.ReactNode;
  className?: string;
  isHidden: boolean;
};

const Dropdown = ({ children, className, isHidden }: DropdownProps) => {
  return (
    <div
      className={cn(
        `absolute right-0 top-full min-w-[200px] rounded-lg border border-border bg-foreground p-2 shadow-md ${isHidden ? "hidden" : "block"}`,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Dropdown;
