'use client';
import {
  LuCalendarCheck,
  LuHouse,
  LuNotebookPen,
  LuStar,
  LuTable,
} from 'react-icons/lu';
import { Bar, BarChart, CartesianGrid, TooltipProps } from 'recharts';
import {
  ValueType,
  NameType,
} from 'recharts/types/component/DefaultTooltipContent';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from '@/components/ui/chart';
import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import ProjectCard from '../dashboard/_components/ProjectCard';

const navRoutes = [
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
const PROJECT = {
  id: 'project4',
  name: 'Nutrition Product Explorer',
  archived: false,
  favorite: false,
  updatedAt: new Date(),
  description:
    'An interactive product catalog focused on sports nutrition, featuring advanced filtering options, featured product carousels, and detailed product views.',
};

const TestPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeRoute, setActiveRoute] = useState('/dashboard');
  return (
    <div className="p-8">
      <div className="w-full space-y-6">
        <div className="flex h-[64px] w-full items-center gap-6 bg-gradient-to-br from-primary-60 to-primary-80 px-6">
          <h1 className="text-2xl font-bold text-white">Planify</h1>
          <button
            className="flex h-[40px] w-[140px] items-center justify-between rounded-full border border-white/20 bg-blue-400/10 px-4 shadow-xl backdrop-blur-md"
            onClick={() => setCollapsed((prev) => !prev)}
          >
            <PlusIcon className="text-white" size={18} />
            <p className="text-[15px] font-medium text-white">New Project</p>
          </button>
        </div>
        <div className="flex gap-6">
          <div
            className={`h-[24rem] rounded-lg border border-primary-10 bg-primary-5 py-4 ${collapsed ? 'w-16 px-3' : 'w-60 px-4'}`}
          >
            <ul className="space-y-1">
              {navRoutes.map((route) => (
                <li
                  key={route.link}
                  className={`hover:bg-primary-15 flex h-9 cursor-pointer items-center gap-2 rounded transition-colors duration-200 ${collapsed ? 'justify-center p-0' : 'px-2 py-1.5'} ${
                    activeRoute === route.link
                      ? 'bg-primary-30 hover:bg-primary-30'
                      : ''
                  } `}
                  onClick={() => setActiveRoute(route.link)}
                >
                  {route.icon}
                  {!collapsed ? (
                    <p className="text-[15px] font-medium text-gray-700">
                      {route.title}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
