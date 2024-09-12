import {
  PiAtom,
  PiBank,
  PiHeadset,
  PiHeartbeat,
  PiMegaphone,
  PiPaintBrush,
  PiRocket,
  PiTruck,
  PiUsersFour,
} from "react-icons/pi";
import CategoryCard from "./CategoryCard";
import Section from "./Section";

const CategoriesSection = () => {
  return (
    <Section
      title="Explore Categories"
      description="Find the perfect job by browsing through our diverse range of categories."
    >
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
        <CategoryCard Icon={PiBank} name="Finance" count={1} />
        <CategoryCard Icon={PiMegaphone} name="Marketing" count={2} />
        <CategoryCard Icon={PiPaintBrush} name="Design" count={1} />
        <CategoryCard Icon={PiAtom} name="Development" count={5} />
        <CategoryCard Icon={PiUsersFour} name="Human Resources" count={2} />
        <CategoryCard Icon={PiRocket} name="Project Management" count={2} />
        <CategoryCard Icon={PiHeadset} name="Customer Service" count={1} />
        <CategoryCard Icon={PiHeartbeat} name="Health & Care" count={3} />
        <CategoryCard Icon={PiTruck} name="Automative" count={7} />
      </div>
    </Section>
  );
};

export default CategoriesSection;
