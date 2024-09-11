import Image from "next/image";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import HeroImage from "@/assets/images/hero-img.svg";
import InfoCard from "./InfoCard";
import {
  PiBookmarkSimpleLight,
  PiCurrencyDollarLight,
  PiMagnifyingGlassLight,
} from "react-icons/pi";

const Hero = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-[var(--gradient-blue-1)] from-0% via-[var(--gradient-blue-2)] via-[24%] to-[var(--gradient-blue-1)] to-100%">
      <Navbar />

      <div className="relative mx-auto flex h-[calc(100vh-64px)] max-w-7xl items-center justify-between gap-5 px-10">
        {/* HEADING AND SEARCHBAR */}
        <div className="flex w-[60%] flex-col gap-10">
          <h1 className="text-6xl font-bold tracking-tight">
            Your Next <br />
            Career Move <br />
            <span className="text-primary">Awaits.</span>
          </h1>
          {/* SEARCH */}
          <SearchBar />
        </div>
        {/* IMAGE */}
        <div className="relative hidden w-[360px] md:block">
          <Image src={HeroImage} width={360} alt="hero image" />

          <div className="absolute bottom-0 flex w-full flex-col gap-5">
            <InfoCard
              Icon={PiMagnifyingGlassLight}
              title="Easy job search"
              description="Find jobs based on your skills"
              className="bounce -ml-10"
            />
            <InfoCard
              Icon={PiCurrencyDollarLight}
              title="Salary Insights"
              description="View salary data for roles"
              className="bounce self-end delay-75"
            />
            <InfoCard
              Icon={PiBookmarkSimpleLight}
              title="Saved Jobs"
              description="Save listings to apply later"
              className="bounce delay-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
