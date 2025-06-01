'use client';

import { usePathname } from 'next/navigation';
import { LuPlus } from 'react-icons/lu';

import { Button } from '@/components/ui/button';

import NewProjectModal from './NewProjectModal';

const ActionButton: React.FC = () => {
  const path = usePathname();

  if (path.includes('articles'))
    return (
      <Button className="h-fit rounded-full" variant="outline">
        <LuPlus />
        New Article
      </Button>
    );
  if (path.includes('projects'))
    return (
      <Button className="h-fit rounded-full" variant="outline">
        <LuPlus />
        New Task
      </Button>
    );
  return <NewProjectModal />;
};

export default ActionButton;
