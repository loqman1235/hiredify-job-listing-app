import Navbar from "@/components/hero/Navbar";
import { Metadata } from "next";
import Sidebar from "./(components)/Sidebar";
import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Hiredify | Dashboard",
  description: "Job listing website",
};

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await validateRequest();

  if (!session.user) {
    return redirect("/login");
  }

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
