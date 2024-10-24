import { validateRequest } from "@/auth";
import LogoutBtn from "./LogoutBtn";
import SidebarLinks from "./SidebarLinks";

const Sidebar = async () => {
  const { user } = await validateRequest();

  return (
    <div className="sticky top-[var(--navbar-height)] hidden h-[calc(100vh-var(--navbar-height))] w-[var(--dashboard-sidebar-width)] flex-col bg-foreground shadow-sm md:flex">
      <SidebarLinks role={user?.role} />

      <div className="mt-auto px-2.5">
        <LogoutBtn />
      </div>
    </div>
  );
};

export default Sidebar;
