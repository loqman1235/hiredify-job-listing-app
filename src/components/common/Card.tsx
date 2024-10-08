type CardProps = {
  title?: string;
  children: React.ReactNode;
};

const Card = ({ title, children }: CardProps) => {
  return (
    <div className="mt-5 w-full space-y-5 rounded-lg bg-foreground p-5 shadow">
      <h4 className="text-lg font-semibold tracking-tight">{title}</h4>
      {children}
    </div>
  );
};

export default Card;
