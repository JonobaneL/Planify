'use client';

import { useQueryState } from 'nuqs';
import { useShallow } from 'zustand/react/shallow';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from '@/components/ui/sheet';

import Content from './Content';
import { useTaskOverviewStore } from './store';

const TaskOverview: React.FC = () => {
  const { taskOverview, onChange } = useTaskOverviewStore(
    useShallow((state) => ({
      taskOverview: state.taskOverview,
      onChange: state.onChange,
    })),
  );
  const setTask = useQueryState('task')[1];
  const setTab = useQueryState('tab')[1];

  const onOpenChange = (value: boolean) => {
    onChange(value);
    if (!value) {
      setTask(null);
      setTab(null);
    }
  };

  return (
    <Sheet open={taskOverview} onOpenChange={onOpenChange}>
      <SheetContent className="flex max-w-[700px] flex-col gap-0 px-0 pb-0 sm:max-w-[700px]">
        <SheetTitle className="sr-only" />
        <SheetDescription className="sr-only" />
        <Content />
      </SheetContent>
    </Sheet>
  );
};

export default TaskOverview;
