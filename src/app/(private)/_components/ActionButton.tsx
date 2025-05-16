'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { LuPlus } from 'react-icons/lu';

import { Button } from '@/components/ui/button';
import { secureInstance } from '@/lib/axios';

const ActionButton: React.FC = () => {
  const path = usePathname();

  const label = useMemo(() => {
    if (path.includes('articles')) return 'New Article';
    if (path.includes('projects')) return 'New Task';
    return 'New Project';
  }, [path]);
  const clickHandler = async () => {
    try {
      const res1 = await secureInstance.get('/api/projects');
      console.log(res1);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Button
      className="h-fit rounded-full"
      variant="outline"
      onClick={clickHandler}
    >
      <LuPlus />
      {label}
    </Button>
  );
};

export default ActionButton;
