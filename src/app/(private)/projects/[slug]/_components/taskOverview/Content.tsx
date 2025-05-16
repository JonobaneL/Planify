import { useQueryState } from 'nuqs';

import Tabs from '@/components/Tabs';
import { SheetHeader } from '@/components/ui/sheet';
import { useTask } from '@/hooks/useTask';

import { TABS } from './constants';
import Header from './Header';
import RenderTab from './RenderTab';
import TaskTitle from './taskDetails/TaskTitle';

const Content: React.FC = () => {
  const taskId = useQueryState('task')[0];
  const [tab, setTab] = useQueryState('tab', { defaultValue: TABS[0] });

  const { isLoading, task } = useTask(taskId);

  //temporary approach
  if (isLoading) return <div>Loading...</div>;
  if (!task) return <div>Task not found</div>;
  return (
    <>
      <SheetHeader className="flex flex-col gap-5 space-y-0 px-6 pb-4">
        <Header task={task} />
        <TaskTitle title={task.title} />
      </SheetHeader>
      <Tabs tab={tab || ''} onTabChange={setTab} tabs={TABS} />
      <div className="flex flex-1 flex-col overflow-auto">
        <RenderTab tab={tab} task={task} />
      </div>
    </>
  );
};

export default Content;
