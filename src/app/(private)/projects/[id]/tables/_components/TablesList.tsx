'use client';

import { Accordion } from '@/components/ui/accordion';
import { useTasksStore } from '@/stores/tasks';

import TaskAccordion from './TaskAccordion';
import TasksTable from './tasksTable';

const TablesList: React.FC = () => {
  const tasks = useTasksStore((state) => state.tasks);
  return (
    <Accordion type="multiple" className="space-y-2" defaultValue={['feature']}>
      <TaskAccordion title="Feature" tasksLength={tasks.length} value="feature">
        <TasksTable tasks={tasks} />
      </TaskAccordion>
      <TaskAccordion title="Bug" tasksLength={4} value="bug">
        <TasksTable tasks={tasks} />
      </TaskAccordion>
      <TaskAccordion title="Task" tasksLength={3} value="task">
        <TasksTable tasks={tasks} />
      </TaskAccordion>
    </Accordion>
  );
};

export default TablesList;
