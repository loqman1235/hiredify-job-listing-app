import HeroImage from "./HeroImage";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-[var(--gradient-blue-1)] from-0% via-[var(--gradient-blue-2)] via-[24%] to-[var(--gradient-blue-1)] to-100%">
      <Navbar />

      <div className="relative mx-auto flex h-[calc(100vh-var(--nevbar-height))] max-w-7xl items-center justify-between gap-5 px-5">
        {/* HEADING AND SEARCHBAR */}
        <div className="flex w-full flex-col gap-10 md:w-[60%]">
          <h1 className="text-5xl font-bold tracking-[-1.43px] md:text-6xl">
            Your Next <br />
            Career Move <br />
            <span className="text-primary">Awaits.</span>
          </h1>
          {/* SEARCH */}
          <SearchBar />
        </div>
        {/* IMAGE */}
        <div className="relative hidden w-[360px] md:block">
          <HeroImage />
        </div>
      </div>
    </div>
  );
};

export default Hero;
