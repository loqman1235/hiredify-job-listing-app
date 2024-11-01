import { cn } from "@/lib/utils";

type BadgeProps = {
  text: string;
  variant?: "success" | "secondary" | "destructive" | "warning";
  className?: string;
};

const Badge = ({ text, variant = "success", className }: BadgeProps) => {
  const variants = {
    success: "bg-success/10 text-success",
    secondary: "bg-muted text-text-secondary",
    destructive: "bg-destructive/10 text-destructive",
    warning: "bg-warning/10 text-warning",
  };

  return (
    <div
      className={cn(
        `flex w-fit items-center justify-center rounded-md bg-success px-2 py-1 text-xs capitalize ${variants[variant]}`,
        className,
      )}
    >
      {text}
    </div>
  );
};

export default Badge;
