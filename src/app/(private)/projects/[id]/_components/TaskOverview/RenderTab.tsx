import { TaskParams } from '@/types/task';

import Attachments from './Attachments';
import { TABS, TabType } from './constants';
import TaskDescription from './TaskDescription';
import TaskDetails from './TaskDetails';

type RenderProps = {
  tab: TabType;
  task: TaskParams;
};

const RenderTab: React.FC<RenderProps> = ({ tab, task }) => {
  switch (tab) {
    case TABS[0]:
      return (
        <div>
          <TaskDetails task={task} />
          <TaskDescription />
        </div>
      );
    case TABS[1]:
      return <Attachments />;
    case TABS[2]:
      return <div className="p-6">Comments</div>;
  }
};

export default RenderTab;
