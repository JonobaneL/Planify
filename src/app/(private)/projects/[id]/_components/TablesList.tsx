'use client';

import { Accordion } from '@/components/ui/accordion';
import { useTasksStore } from '@/stores/tasks';

import TaskAccordion from './TaskAccordion';
import TasksTable from './tasksTable';
import { groupTasksByType } from '../utils';

const TablesList: React.FC<{ projectId: string }> = ({ projectId }) => {
  const tasks = useTasksStore((state) => state.tasks);

  const groupedTasks = groupTasksByType(tasks, projectId);
  const keys = Object.keys(groupedTasks);
  return (
    <Accordion type="multiple" className="space-y-2" defaultValue={[keys[0]]}>
      {keys.map((key) => (
        <TaskAccordion
          key={key}
          title={key}
          tasksLength={groupedTasks[key].length}
          value={key}
        >
          <TasksTable tasks={groupedTasks[key]} />
        </TaskAccordion>
      ))}
    </Accordion>
  );
};

export default TablesList;
