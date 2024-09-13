import { cn } from "@/libs/utils";

type SectionProps = {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
};

const Section = ({ title, description, className, children }: SectionProps) => {
  return (
    <section className="py-20">
      <div className={`mx-auto max-w-7xl ${cn("px-10", className)}`}>
        <header className="mb-10 flex w-full flex-col items-center justify-center gap-2 text-center">
          <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
          <p className="text-text-secondary">{description}</p>
        </header>
        {children}
      </div>
    </section>
  );
};

export default Section;
