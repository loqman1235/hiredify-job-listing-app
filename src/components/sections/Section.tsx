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
      <div className={`mx-auto max-w-7xl ${cn("px-5 md:px-10", className)}`}>
        <header className="mb-10 flex w-full flex-col items-center justify-center gap-2 text-center">
          <h3 className="text-xl font-bold tracking-tight md:text-2xl">
            {title}
          </h3>
          <p className="text-sm text-text-secondary md:text-base">
            {description}
          </p>
        </header>
        {children}
      </div>
    </section>
  );
};

export default Section;
