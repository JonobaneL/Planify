'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { LuPlus } from 'react-icons/lu';

import { Button } from '@/components/ui/button';

const ActionButton: React.FC = () => {
  const path = usePathname();

  const label = useMemo(() => {
    if (path.includes('articles')) return 'New Article';
    if (path.includes('projects')) return 'New Task';
    return 'New Project';
  }, [path]);

  return (
    <Button className="h-fit rounded-full" variant="outline">
      <LuPlus />
      {label}
    </Button>
  );
};

export default ActionButton;
