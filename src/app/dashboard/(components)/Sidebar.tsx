import { PiPower } from "react-icons/pi";
import SidebarLinks from "./SidebarLinks";

const Sidebar = () => {
  return (
    <div className="sticky top-[var(--navbar-height)] hidden h-[calc(100vh-var(--navbar-height))] w-[var(--dashboard-sidebar-width)] flex-col bg-foreground shadow-sm md:flex">
      <SidebarLinks />

      <div className="mt-auto px-2.5">
        <button className="flex w-full items-center gap-5 rounded-md px-2.5 py-3 font-medium tracking-tight text-text-secondary transition hover:bg-primary/10 hover:text-primary">
          <span>
            <PiPower className="size-6" />
          </span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
