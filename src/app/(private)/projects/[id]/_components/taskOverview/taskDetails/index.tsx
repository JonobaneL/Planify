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
  const taskParams = [
    {
      key: 'type',
      label: 'Type',
      content: (
        <StatusSelect options={statuses} value={task.type as StatusParams} />
      ),
    },
    {
      key: 'status',
      label: 'Status',
      content: (
        <StatusSelect options={statuses} value={task.status as StatusParams} />
      ),
    },
    {
      key: 'priority',
      label: 'Priority',
      content: (
        <StatusSelect
          label="No priority"
          options={mockPriorities}
          value={task.priority as StatusParams}
          cleanButton
        />
      ),
    },
    {
      key: 'due_date',
      label: 'Due date',
      content: <DateSelect value={task.due_date ?? null} />,
    },
    {
      key: 'assigned_user',
      label: 'Assignee',
      content: <AssigneeSelect />,
    },
  ];
  return (
    <div className="border-b px-6 py-4">
      <ul className="space-y-2">
        {taskParams.map(({ key, label, content }) => (
          <li
            key={key}
            className="grid grid-cols-[10rem_1fr] items-center gap-8 text-sm"
          >
            <p className="font-medium text-gray-500">{label}</p>
            {content}
          </li>
        ))}
        {/* <li className="grid grid-cols-[10rem_1fr] items-center gap-8 text-sm">
          <p className="font-medium text-gray-500">Team</p>
          <TeamSelect />
        </li> */}
      </ul>
    </div>
  );
};

export default TaskDetails;
