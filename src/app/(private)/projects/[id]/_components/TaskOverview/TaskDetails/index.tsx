import DateSelect from './DateSelect';
import StatusSelect from './StatusSelect';

import { mockPriorities } from '@/data/mock/mockPriorities';
import { statuses } from '@/data/mock/mockStatuses';
import { TaskParams } from '@/types/task';

type DetailsProps = {
  task: TaskParams;
};

const TaskDetails: React.FC<DetailsProps> = ({ task }) => {
  return (
    <div className="border-b px-6 py-4">
      <ul className="space-y-2">
        <li className="grid grid-cols-[10rem_1fr] items-center gap-8 text-sm">
          <p className="font-medium text-gray-500">Status</p>
          <StatusSelect options={statuses} value={task.status} />
        </li>
        <li className="grid grid-cols-[10rem_1fr] items-center gap-8 text-sm">
          <p className="font-medium text-gray-500">Priority</p>
          <StatusSelect
            label="No priority"
            options={mockPriorities}
            value={task.priority}
            cleanButton
          />
        </li>
        <li className="grid grid-cols-[10rem_1fr] items-center gap-8 text-sm">
          <p className="font-medium text-gray-500">Assignee</p>
          <div className="flex w-fit cursor-pointer items-center rounded p-2 text-gray-600 hover:bg-primary-10">
            Unassigned
          </div>
        </li>
        <li className="grid grid-cols-[10rem_1fr] items-center gap-8 text-sm">
          <p className="font-medium text-gray-500">Due date</p>
          <DateSelect value={task.due_date} />
        </li>
        <li className="grid grid-cols-[10rem_1fr] items-center gap-8 text-sm">
          <p className="font-medium text-gray-500">Team</p>
          <div className="flex w-fit cursor-pointer items-center rounded p-2 text-gray-600 hover:bg-primary-10">
            No team
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TaskDetails;
