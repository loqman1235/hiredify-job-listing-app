import JobCard from "./JobCard";
import Section from "./Section";
import netflixLogoImg from "@/assets/images/logos/netflix.svg";

const FeaturedJobsSection = () => {
  return (
    <Section
      title="Featured Jobs"
      description="Explore top job opportunities handpicked for you"
    >
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
        <JobCard
          image={netflixLogoImg}
          category="Technology"
          title="Software Engineer"
          location="San Fransico, CA"
          minSalary={120}
          maxSalary={180}
          type="Full Time"
        />
        <JobCard
          image={netflixLogoImg}
          category="Technology"
          title="Software Engineer"
          location="San Fransico, CA"
          minSalary={120}
          maxSalary={180}
          type="Full Time"
        />
        <JobCard
          image={netflixLogoImg}
          category="Technology"
          title="Software Engineer"
          location="San Fransico, CA"
          minSalary={120}
          maxSalary={180}
          type="Full Time"
        />
        <JobCard
          image={netflixLogoImg}
          category="Technology"
          title="Software Engineer"
          location="San Fransico, CA"
          minSalary={120}
          maxSalary={180}
          type="Full Time"
        />
        <JobCard
          image={netflixLogoImg}
          category="Technology"
          title="Software Engineer"
          location="San Fransico, CA"
          minSalary={120}
          maxSalary={180}
          type="Full Time"
        />
        <JobCard
          image={netflixLogoImg}
          category="Technology"
          title="Software Engineer"
          location="San Fransico, CA"
          minSalary={120}
          maxSalary={180}
          type="Full Time"
        />
        <JobCard
          image={netflixLogoImg}
          category="Technology"
          title="Software Engineer"
          location="San Fransico, CA"
          minSalary={120}
          maxSalary={180}
          type="Full Time"
        />
        <JobCard
          image={netflixLogoImg}
          category="Technology"
          title="Software Engineer"
          location="San Fransico, CA"
          minSalary={120}
          maxSalary={180}
          type="Full Time"
        />
      </div>
    </Section>
  );
};

export default FeaturedJobsSection;
