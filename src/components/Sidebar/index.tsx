'use client';

import { CgArrowsExchange } from 'react-icons/cg';
import {
  LuCalendarCheck,
  LuHouse,
  LuNotebookPen,
  LuStar,
} from 'react-icons/lu';

import { useSidebarContext } from '@/context/SidebarProvider';
import { cn } from '@/lib/utils';

import NavItem from './NavLink';
import ProjectsNav from './ProjectsNav';

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebarContext();
  const navRoutes = [
    {
      title: 'Home',
      link: '/',
      icon: <LuHouse />,
      exact: true,
    },
    {
      title: 'My Work',
      link: '/my-work',
      icon: <LuCalendarCheck />,
    },
    {
      title: 'Favorites',
      link: '/favorites',
      icon: <LuStar />,
    },
    {
      title: 'Notes',
      link: '/articles',
      icon: <LuNotebookPen />,
    },
  ];
  return (
    <div
      className={`${isOpen ? 'w-60 pb-5' : 'w-16 pb-3'} relative flex-[0_0_auto] bg-primary`}
    >
      <div className="flex h-14 items-center justify-center px-5">
        {!isOpen ? (
          <p className="font-semibold text-white">P</p>
        ) : (
          <p className="font-medium text-white">Planify</p>
        )}
      </div>
      <button
        className="absolute -right-2.5 top-16 flex size-5 items-center justify-center rounded-full bg-primary"
        onClick={toggleSidebar}
      >
        <CgArrowsExchange className="text-white" size={18} />
      </button>
      <div
        className={cn(
          `flex flex-col items-center gap-0.5`,
          isOpen ? 'px-4 pb-5' : 'px-3 pb-3',
        )}
      >
        {navRoutes.map((route, index) => (
          <NavItem key={index} {...route} />
        ))}
      </div>
      <ProjectsNav />
    </div>
  );
};

export default Sidebar;
