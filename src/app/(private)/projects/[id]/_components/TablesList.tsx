import { Accordion } from '@/components/ui/accordion';
import { serverInstance } from '@/lib/serverAxios';
import { TaskParams } from '@/types/task';
import { generateQueryString } from '@/utils/generateQueryString';

import TaskAccordion from './TaskAccordion';
import TasksTable from './tasksTable';
import { searchParamsCache } from '../_utils/searchParams';

type Group = {
  type: string;
  count: number;
  tasks: TaskParams[];
};

const TablesList: React.FC<{
  projectId: string;
}> = async ({ projectId }) => {
  try {
    const params = searchParamsCache.all();
    const query = generateQueryString({ ...params, projectId });
    const res = await serverInstance.get<Group[]>(`/tasks${query}`);
    const groups = res.data;
    const accordionKey = `accordion-${query}`;
    console.log(groups);

    return (
      <Accordion
        type="multiple"
        className="space-y-2"
        defaultValue={['0']}
        key={accordionKey}
      >
        {groups.map((group, index) => (
          <TaskAccordion
            key={group.type}
            title={group.type}
            tasksLength={group.count}
            value={index.toString()}
          >
            <TasksTable tasks={group.tasks} />
          </TaskAccordion>
        ))}
      </Accordion>
    );
  } catch (err) {
    console.error(err);
    return <div className="p-4 text-red-500">Failed to load tasks.</div>;
  }
};

export default TablesList;
