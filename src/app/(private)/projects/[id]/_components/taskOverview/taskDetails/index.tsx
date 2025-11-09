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
        <StatusSelect
          value={task.type as StatusParams}
          column="type"
          taskId={task.id}
          projectId={task.projectId}
        />
      ),
    },
    {
      key: 'status',
      label: 'Status',
      content: (
        <StatusSelect
          value={task.status as StatusParams}
          column="status"
          taskId={task.id}
          projectId={task.projectId}
        />
      ),
    },
    {
      key: 'priority',
      label: 'Priority',
      content: (
        <StatusSelect
          label="No priority"
          value={task.priority as StatusParams}
          column="priority"
          taskId={task.id}
          projectId={task.projectId}
          cleanButton
        />
      ),
    },
    {
      key: 'due_date',
      label: 'Due date',
      content: (
        <DateSelect
          value={task.dueDate ?? null}
          taskId={task.id}
          projectId={task.projectId}
        />
      ),
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
