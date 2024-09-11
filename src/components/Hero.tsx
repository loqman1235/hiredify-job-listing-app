import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-[var(--gradient-blue-1)] from-0% via-[var(--gradient-blue-2)] via-[24%] to-[var(--gradient-blue-1)] to-100%">
      <Navbar />

      <div className="mx-auto flex h-[calc(100vh-64px)] max-w-7xl items-center justify-between gap-5 px-10">
        {/* HEADING AND SEARCHBAR */}
        <div className="flex w-[60%] flex-col gap-10">
          <h1 className="text-6xl font-bold tracking-tight">
            Your Next <br />
            Career Move <br />
            <span className="text-[var(--primary)]">Awaits.</span>
          </h1>
          {/* SEARCH */}
          <SearchBar />
        </div>
        {/* IMAGE */}
        <div className="w-[40%]">Image</div>
      </div>
    </div>
  );
};

export default Hero;
