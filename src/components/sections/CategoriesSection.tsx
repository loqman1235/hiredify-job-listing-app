import { categories } from "@/data";
import CategoryCard from "./CategoryCard";
import Section from "./Section";

const CategoriesSection = () => {
  return (
    <Section
      title="Explore Categories"
      description="Find the perfect job by browsing through our diverse range of categories."
    >
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
        {categories.map((cat) => (
          <CategoryCard
            key={cat.name}
            Icon={cat.icon}
            name={cat.name}
            count={cat.count}
          />
        ))}
      </div>
    </Section>
  );
};

export default CategoriesSection;
