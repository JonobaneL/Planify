import { PropsWithChildren, useState } from 'react';

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

import { TABS, TabType } from './constants';
import Header from './Header';
import RenderTab from './RenderTab';

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
      <SheetContent className="flex max-w-[700px] flex-col gap-0 px-0 sm:max-w-[700px]">
        <SheetHeader className="flex flex-col gap-5 space-y-0 px-6 pb-4">
          <Header task={task} />
          <SheetTitle className="mt-2 rounded border border-transparent p-0.5 text-xl font-medium hover:border-gray-300">
            {task.title}
          </SheetTitle>
          <SheetDescription className="sr-only" />
        </SheetHeader>
        <Tabs tab={currentTab} onTabChange={setTab} tabs={TABS} />
        <div className="flex-1 overflow-auto">
          <RenderTab tab={currentTab} task={task} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default TaskOverview;
