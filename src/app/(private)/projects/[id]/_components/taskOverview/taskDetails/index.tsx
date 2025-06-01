import { mockPriorities } from '@/data/mock/priorities';
import { statuses } from '@/data/mock/statuses';
import { StatusParams } from '@/types/status';
import { TaskParams } from '@/types/task';

import AssigneeSelect from './AssigneeSelect';
import DateSelect from './DateSelect';
import StatusSelect from './StatusSelect';

type DetailsProps = {
  task: TaskParams;
};

const TaskDetails: React.FC<DetailsProps> = ({ task }) => {
  return (
    <div className="border-b px-6 py-4">
      <ul className="space-y-2">
        <li className="grid grid-cols-[10rem_1fr] items-center gap-8 text-sm">
          <p className="font-medium text-gray-500">Status</p>
          <StatusSelect
            options={statuses}
            value={task.status as StatusParams}
          />
        </li>
        <li className="grid grid-cols-[10rem_1fr] items-center gap-8 text-sm">
          <p className="font-medium text-gray-500">Priority</p>
          <StatusSelect
            label="No priority"
            options={mockPriorities}
            value={task.priority as StatusParams}
            cleanButton
          />
        </li>
        <li className="grid grid-cols-[10rem_1fr] items-center gap-8 text-sm">
          <p className="font-medium text-gray-500">Assignee</p>

          <AssigneeSelect />
        </li>
        <li className="grid grid-cols-[10rem_1fr] items-center gap-8 text-sm">
          <p className="font-medium text-gray-500">Due date</p>
          <DateSelect value={task.due_date ?? null} />
        </li>
        {/* <li className="grid grid-cols-[10rem_1fr] items-center gap-8 text-sm">
          <p className="font-medium text-gray-500">Team</p>
          <TeamSelect />
        </li> */}
      </ul>
    </div>
  );
};

export default TaskDetails;
