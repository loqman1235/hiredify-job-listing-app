import prisma from "@/libs/prisma";
import JobCard from "./JobCard";
import Section from "./Section";

const FeaturedJobsSection = async () => {
  const jobs = await prisma.job.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      category: {
        select: {
          name: true,
        },
      },
      employer: {
        select: {
          employer: {
            select: {
              avatar: {
                select: {
                  url: true,
                },
              },
            },
          },
        },
      },
    },

    // take: 8,
  });

  console.log(jobs[0]);

  return (
    <Section
      title="Featured Jobs"
      description="Explore top job opportunities handpicked for you"
    >
      {jobs.length === 0 && <div>No jobs found</div>}

      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            category={job.category.name}
            image={job.employer?.employer?.avatar?.url || ""}
            location={job.location}
            minSalary={job.minSalary}
            maxSalary={job.maxSalary}
            type={job.type}
            title={job.title}
          />
        ))}

        {/* <JobCard
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
        /> */}
      </div>
    </Section>
  );
};

export default FeaturedJobsSection;
