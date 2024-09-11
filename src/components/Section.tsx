type SectionProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const Section = ({ title, description, children }: SectionProps) => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-10">
        <header className="mb-10 flex w-full flex-col items-center justify-center gap-2">
          <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
          <p className="text-text-secondary">{description}</p>
        </header>
        {children}
      </div>
    </section>
  );
};

export default Section;
