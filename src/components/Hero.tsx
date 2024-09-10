import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-[var(--gradient-blue-1)] from-0% via-[var(--gradient-blue-2)] via-[24%] to-[var(--gradient-blue-1)] to-100%">
      <Navbar />
    </div>
  );
};

export default Hero;
