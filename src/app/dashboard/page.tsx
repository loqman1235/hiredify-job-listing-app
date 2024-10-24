import {
  PiBookmarkSimple,
  PiBriefcase,
  PiChatCircleDots,
  PiEye,
} from "react-icons/pi";
import StatCard from "./_components/StatCard";
import JobCard from "@/components/sections/JobCard";
import netflixLogoImg from "@/assets/images/logos/netflix.svg";
import ProfileViewsChart from "./_components/ProfileViewsChart";
import ApplicationProgressChart from "./_components/ApplicationProgressChart";

const statsCards = [
  {
    icon: PiBriefcase,
    text: "applied jobs",
    count: 5,
    bgColor: "var(--bg-card-1)",
    textColor: "var(--text-card-1)",
  },
  {
    icon: PiChatCircleDots,
    text: "review",
    count: 2,
    bgColor: "var(--bg-card-2)",
    textColor: "var(--text-card-2)",
  },
  {
    icon: PiEye,
    text: "views",
    count: 9876,
    bgColor: "var(--bg-card-3)",
    textColor: "var(--text-card-3)",
  },
  {
    icon: PiBookmarkSimple,
    text: "shortlisted",
    count: 3,
    bgColor: "var(--bg-card-4)",
    textColor: "var(--text-card-4)",
  },
] as const;

const Dashboard = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      {/* STAT CARDS */}
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-4">
        {statsCards.map((card) => (
          <StatCard
            key={card.text}
            Icon={card.icon}
            count={card.count}
            text={card.text}
            bgColor={card.bgColor}
            textColor={card.textColor}
          />
        ))}
      </div>

      <div className="flex w-full flex-col gap-5 md:flex-row">
        <ProfileViewsChart />
        <ApplicationProgressChart />
      </div>
      {/* RECENTLY APPLIED JOBS */}
      <div className="w-full rounded-xl bg-foreground p-5 shadow">
        <h3 className="mb-5 text-lg font-semibold tracking-tight">
          Jobs Applied Recently
        </h3>
        <div className="flex flex-col gap-5">
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
      </div>
    </div>
  );
};

export default Dashboard;
