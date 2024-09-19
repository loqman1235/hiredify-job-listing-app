import Navbar from "@/components/hero/Navbar";
import { Metadata } from "next";
import Sidebar from "./(components)/Sidebar";

export const metadata: Metadata = {
  title: "Hiredify | Dashboard",
  description: "Job listing website",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full p-5 md:w-[calc(100%-var(--dashboard-sidebar-width))]">
          {children}
        </div>
      </div>
    </main>
  );
};

export default layout;
