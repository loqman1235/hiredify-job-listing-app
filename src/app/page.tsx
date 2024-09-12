import { Hero } from "@/components/hero";
import {
  CategoriesSection,
  FeaturedJobsSection,
  TestimonialsSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoriesSection />
      <FeaturedJobsSection />
      <TestimonialsSection />
    </main>
  );
}
