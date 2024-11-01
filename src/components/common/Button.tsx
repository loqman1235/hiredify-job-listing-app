import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
// import { PiCircleNotch } from "react-icons/pi";

type ButtonProps = {
  variant?: "primary" | "secondary" | "destructive";
  className?: string;
  children: React.ReactNode;
  asChild?: boolean;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  variant = "primary",
  className,
  asChild,
  isLoading,
  children,
  ...props
}: ButtonProps) => {
  const variants = {
    primary:
      "bg-primary text-[var(--primary-btn-text)] hover:bg-[var(--primary-btn-bg-hover)]",
    secondary:
      "bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary",
    destructive:
      "text-destructive bg-destructive/10 hover:bg-destructive/20 hover:text-destructive",
  };

  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      disabled={isLoading}
      className={cn(
        `flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium capitalize transition disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]}`,
        className,
      )}
      {...props}
    >
      {/* {isLoading && <PiCircleNotch className="size-5 animate-spin" />} */}
      {children}
    </Comp>
  );
};

export default Button;
