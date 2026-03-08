'use client';

import { usePathname } from 'next/navigation';
import { LuPlus } from 'react-icons/lu';

import NewProjectModal from './NewProjectModal';

const ActionButton: React.FC = () => {
  const path = usePathname();

  if (path.includes('articles'))
    return (
      <button className="flex h-10 w-fit items-center gap-2 rounded-full border border-white/20 bg-blue-400/10 px-4 text-[15px] font-medium text-white shadow-xl backdrop-blur-md transition-colors duration-200 hover:bg-blue-400/15">
        <LuPlus />
        <p>New Article</p>
      </button>
    );
  if (path.includes('projects'))
    return (
      <button className="flex h-10 w-fit items-center gap-2 rounded-full border border-white/20 bg-blue-400/10 px-4 text-[15px] font-medium text-white shadow-xl backdrop-blur-md transition-colors duration-200 hover:bg-blue-400/15">
        <LuPlus />
        New Task
      </button>
    );
  return <NewProjectModal />;
};

export default ActionButton;
