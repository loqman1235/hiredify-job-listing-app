import { cn } from "@/libs/utils";
import { Slot } from "@radix-ui/react-slot";

type ButtonProps = {
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  variant = "primary",
  className,
  asChild,
  children,
  ...props
}: ButtonProps) => {
  const variants = {
    primary:
      "bg-[var(--primary-btn-bg)] text-[var(--primary-btn-text)] hover:bg-[var(--primary-btn-bg-hover)]",
    secondary:
      "bg-[var(--secondary-btn-bg)] text-[var(--secondary-btn-text)] hover:bg-[var(--primary-btn-bg)] hover:text-[var(--primary-btn-text)]",
  };

  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={`rounded-lg px-6 py-3 font-medium transition ${cn(variants[variant], className)}`}
      {...props}
    >
      {children}
    </Comp>
  );
};

export default Button;
