import { PiPower } from "react-icons/pi";
import SidebarLinks from "./SidebarLinks";

const Sidebar = () => {
  return (
    <div className="flex h-[calc(100vh-var(--navbar-height))] w-[var(--dashboard-sidebar-width)] flex-col bg-foreground shadow-sm">
      <SidebarLinks />

      <div className="mt-auto px-2.5">
        <button className="flex w-full items-center gap-5 rounded-md px-2.5 py-3 font-medium text-text-secondary transition hover:bg-primary/10 hover:text-primary">
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
