import { PropsWithChildren, useState } from 'react';

import { TABS, TabType } from './constants';
import Header from './Header';
import RenderTab from './RenderTab';

import Tabs from '@/components/Tabs';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { TaskParams } from '@/types/task';

type OverviewProps = {
  task: TaskParams;
};

const TaskOverview: React.FC<PropsWithChildren<OverviewProps>> = ({
  task,
  children,
}) => {
  const [currentTab, setTab] = useState<TabType>(TABS[0]);
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="max-w-[700px] px-0 sm:max-w-[700px]">
        <SheetHeader className="flex flex-col gap-5 space-y-0 px-6 pb-4">
          <Header task={task} />
          <SheetTitle className="mt-2 rounded border border-transparent p-0.5 text-xl font-medium hover:border-gray-300">
            {task.title}
          </SheetTitle>
          <SheetDescription className="sr-only" />
        </SheetHeader>
        <Tabs tab={currentTab} onTabChange={setTab} tabs={TABS} />
        <RenderTab tab={currentTab} task={task} />
      </SheetContent>
    </Sheet>
  );
};

export default TaskOverview;
