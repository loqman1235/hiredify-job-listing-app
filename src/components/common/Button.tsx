import { cn } from "@/libs/utils";

type ButtonProps = {
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) => {
  const variants = {
    primary: "bg-[var(--primary-btn-bg)] text-[var(--primary-btn-text)]",
    secondary:
      "bg-[var(--secondary-btn-bg)] text-[var(--secondary-btn-text)] hover:bg-[var(--primary-btn-bg)] hover:text-[var(--primary-btn-text)]",
  };

  return (
    <button
      className={`rounded-lg px-6 py-3 font-medium transition ${cn(variants[variant], className)}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
