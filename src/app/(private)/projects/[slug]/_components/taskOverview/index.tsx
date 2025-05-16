'use client';

import { useQueryState } from 'nuqs';
import { useEffect, useState } from 'react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from '@/components/ui/sheet';

import Content from './Content';

const TaskOverview: React.FC = () => {
  const [task, setTask] = useQueryState('task');
  const setTab = useQueryState('tab')[1];

  const [overview, setOverview] = useState(false);
  const onOpenChange = (value: boolean) => {
    setOverview(value);
    if (!value) {
      setTask(null);
      setTab(null);
    }
  };
  useEffect(() => {
    if (task) {
      setOverview(true);
    }
  }, [task]);

  return (
    <Sheet open={overview} onOpenChange={onOpenChange}>
      <SheetContent className="flex max-w-[700px] flex-col gap-0 px-0 pb-0 sm:max-w-[700px]">
        <SheetTitle className="sr-only" />
        <SheetDescription className="sr-only" />
        <Content />
      </SheetContent>
    </Sheet>
  );
};

export default TaskOverview;
