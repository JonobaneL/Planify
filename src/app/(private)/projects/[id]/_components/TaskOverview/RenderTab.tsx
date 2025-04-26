import { TaskParams } from '@/types/task';

import Attachments from './attachments';
import { TABS, TabType } from './constants';
import TaskDescription from './TaskDescription';
import TaskDetails from './taskDetails';

type RenderProps = {
  tab: TabType | null;
  task: TaskParams;
};

const RenderTab: React.FC<RenderProps> = ({ tab, task }) => {
  if (!tab) return null;
  switch (tab) {
    case TABS[0]:
      return (
        <>
          <TaskDetails task={task} />
          <TaskDescription />
        </>
      );
    case TABS[1]:
      return <Attachments />;
    case TABS[2]:
      return <div className="p-6">Comments</div>;
  }
};

export default RenderTab;
