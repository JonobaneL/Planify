'use client';

import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import { LuCalendarCheck, LuHouse, LuNotebookPen } from 'react-icons/lu';

import { useSidebarContext } from '@/context/SidebarProvider';

import NavItem from './NavLink';
// import ProjectsNav from './ProjectsNav';

const NAV_ROUTES = [
  {
    title: 'Dashboard',
    link: '/dashboard',
    icon: <LuHouse size={18} className="text-gray-600" />,
    exact: true,
  },
  {
    title: 'My Work',
    link: '/my-work',
    icon: <LuCalendarCheck size={18} className="text-gray-600" />,
  },
  {
    title: 'Notes',
    link: '/articles',
    icon: <LuNotebookPen size={18} className="text-gray-600" />,
  },
];

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebarContext();

  return (
    <div className="pt-6">
      <div
        className={`${isOpen ? 'w-60 px-4' : 'w-16 px-3'} flex h-full flex-col rounded-tr-lg bg-primary-5 py-4`}
      >
        <div className="flex flex-1 flex-col gap-1">
          {NAV_ROUTES.map((route, index) => (
            <NavItem key={index} {...route} />
          ))}
        </div>
        <div className="flex w-full justify-end">
          <button
            className="flex size-9 items-center justify-center rounded-md hover:bg-primary-15"
            onClick={toggleSidebar}
          >
            {isOpen ? (
              <ChevronsLeft size={20} className="text-primary-80" />
            ) : (
              <ChevronsRight size={20} className="text-primary-80" />
            )}
          </button>
        </div>
        {/* TODO: think about workspace */}
        {/* <ProjectsNav /> */}
      </div>
    </div>
  );
};

export default Sidebar;
