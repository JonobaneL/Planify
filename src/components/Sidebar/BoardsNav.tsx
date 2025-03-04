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

const BoardsNav = () => {
  const { isOpen } = useSidebarContext();
  const path = usePathname();
  const boardsRoutes = [
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
  const boardList = [
    {
      id: 'board1',
      name: 'Board 1',
      href: '/boards/1/tables',
    },
    {
      id: 'board2',
      name: 'Board 2',
      href: '/boards/2/tables',
    },
    {
      id: 'board3',
      name: 'Board 3',
      href: '/boards/3/tables',
    },
    {
      id: 'board4',
      name: 'Board 4',
      href: '/boards/4/tables',
    },
  ];
  return (
    <nav className={`${isOpen ? 'pt-5' : 'pt-3'} border-t`}>
      {path.includes('board') ? (
        <>
          <div
            className={`${isOpen ? 'px-5' : 'gap-0 px-3'} mb-3 flex items-center gap-2`}
          >
            <div className="bg-primary-10 text-primary flex size-10 items-center justify-center rounded font-semibold shadow-sm">
              B1
            </div>
            {isOpen && <p>Board 1</p>}
          </div>
          <div
            className={`flex flex-col items-center gap-0.5 ${isOpen ? 'px-5' : 'px-3'}`}
          >
            {boardsRoutes.map((route, index) => (
              <NavItem key={index} {...route} activeState={true} />
            ))}
            {/* <NavItem icon={<LuSettings />} title="Settings" link="settings" activeState={true} /> not we need this*/}
          </div>
        </>
      ) : (
        <>
          {isOpen && (
            <div className="mb-2 flex items-center justify-between px-6">
              <h3>Workspace</h3>
              <LuPlus className="cursor-pointer" />
            </div>
          )}
          <div className={`flex flex-col gap-0.5 ${isOpen ? 'px-6' : 'px-3'}`}>
            {boardList.map((route) => (
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

export default BoardsNav;
