import {
  PiBookmarkSimple,
  PiCurrencyDollar,
  PiMagnifyingGlass,
} from "react-icons/pi";
import InfoCard from "./InfoCard";
import Image from "next/image";
import HeroImagePerson from "@/assets/images/hero-img.svg";

const HeroImage = () => {
  return (
    <>
      <Image src={HeroImagePerson} width={360} alt="hero image" />

      <div className="absolute bottom-0 flex w-full flex-col gap-5">
        <InfoCard
          Icon={PiMagnifyingGlass}
          title="Easy job search"
          description="Find jobs based on your skills"
          className="bounce -ml-10"
        />
        <InfoCard
          Icon={PiCurrencyDollar}
          title="Salary Insights"
          description="View salary data for roles"
          className="bounce self-end delay-75"
        />
        <InfoCard
          Icon={PiBookmarkSimple}
          title="Saved Jobs"
          description="Save listings to apply later"
          className="bounce-reverse delay-200"
        />
      </div>
    </>
  );
};

export default HeroImage;
