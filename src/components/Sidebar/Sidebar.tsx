"use client";

import { CgArrowsExchange } from "react-icons/cg";
import { LuBookOpen, LuCalendarCheck, LuHouse, LuStar } from "react-icons/lu";

import { useSidebarContext } from "@/context/SidebarProvider";

import BoardsNav from "./BoardsNav";
import NavItem from "./NavLink";

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebarContext();
  const navRoutes = [
    {
      title: "Home",
      link: "/",
      icon: <LuHouse />,
    },
    {
      title: "My Work",
      link: "/",
      icon: <LuCalendarCheck />,
    },
    {
      title: "Favorites",
      link: "/",
      icon: <LuStar />,
    },
    {
      title: "Knowledge base",
      link: "/articles",
      icon: <LuBookOpen />,
    },
  ];
  return (
    <div className={`${isOpen ? "w-60 py-5" : "w-16 py-3"} relative flex-[0_0_auto] border-r bg-p-background`}>
      <button
        className="absolute -right-2.5 top-2 flex size-5 items-center justify-center rounded-full border bg-p-background"
        onClick={toggleSidebar}
      >
        <CgArrowsExchange className="text-primary-b" size={18} />
      </button>
      <div className={`flex flex-col items-center gap-0.5 ${isOpen ? "px-5 pb-5" : "px-3 pb-3"}`}>
        {navRoutes.map((route, index) => (
          <NavItem key={index} {...route} />
        ))}
      </div>
      <BoardsNav />
    </div>
  );
};

export default Sidebar;
