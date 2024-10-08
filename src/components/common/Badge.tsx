type BadgeProps = {
  text: string;
  variant?: "primary" | "secondary" | "destructive";
};

const Badge = ({ text, variant = "primary" }: BadgeProps) => {
  return <div>{text}</div>;
};

export default Badge;
