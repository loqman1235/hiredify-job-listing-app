import JobCard from "./JobCard";
import Section from "./Section";

const FeaturedJobsSection = () => {
  return (
    <Section
      title="Featured Jobs"
      description="Explore top job opportunities handpicked for you"
    >
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </Section>
  );
};

export default FeaturedJobsSection;
