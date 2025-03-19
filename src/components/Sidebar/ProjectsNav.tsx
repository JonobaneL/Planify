import { usePathname } from 'next/navigation';
import {
  LuChartColumn,
  LuPanelLeft,
  LuPlus,
  LuSquareKanban,
  LuTable2,
} from 'react-icons/lu';

import { useSidebarContext } from '@/context/SidebarProvider';

import NavItem from './NavLink';

const ProjectsNav = () => {
  const { isOpen } = useSidebarContext();
  const path = usePathname();
  const projectsNav = [
    {
      title: 'Tables',
      link: 'tables',
      icon: <LuTable2 />,
    },
    {
      title: 'Kanban',
      link: 'kanban',
      icon: <LuSquareKanban />,
    },
    {
      title: 'Charts',
      link: 'charts',
      icon: <LuChartColumn />,
    },
  ];
  const projectsList = [
    {
      id: 'project1',
      name: 'Project 1',
      href: '/projects/1/tables',
    },
    {
      id: 'propject2',
      name: 'Project 2',
      href: '/projects/2/tables',
    },
    {
      id: 'propject3',
      name: 'Project 3',
      href: '/projects/3/tables',
    },
    {
      id: 'propject4',
      name: 'Project 4',
      href: '/projects/4/tables',
    },
  ];
  return (
    <nav
      className={`${isOpen ? 'pt-5' : 'pt-3'} relative before:absolute before:left-1/2 before:top-0 before:h-[1px] before:w-[70%] before:-translate-x-1/2 before:bg-white/70`}
    >
      {path.includes('projects') ? (
        <>
          <div
            className={`${isOpen ? 'px-5' : 'gap-0 px-3'} mb-3 flex items-center gap-2`}
          >
            <div className="flex size-10 items-center justify-center rounded-full bg-primary-10 font-semibold text-primary shadow-sm">
              P1
            </div>
            {isOpen && <p className="text-white">Project 1</p>}
          </div>
          <div
            className={`flex flex-col items-center gap-0.5 ${isOpen ? 'px-5' : 'px-3'}`}
          >
            {projectsNav.map((route, index) => (
              <NavItem key={index} {...route} activeState={true} />
            ))}
            {/* <NavItem icon={<LuSettings />} title="Settings" link="settings" activeState={true} /> not we need this*/}
          </div>
        </>
      ) : (
        <>
          {isOpen && (
            <div className="mb-2 flex items-center justify-between px-5">
              <h3 className="text-white">Workspace</h3>
              <LuPlus className="cursor-pointer text-white" />
            </div>
          )}
          <div className={`flex flex-col gap-0.5 ${isOpen ? 'px-5' : 'px-3'}`}>
            {projectsList.map((route) => (
              <NavItem
                key={route.id}
                icon={<LuPanelLeft />}
                title={route.name}
                link={route.href}
              />
            ))}
          </div>
        </>
      )}
    </nav>
  );
};

export default ProjectsNav;
