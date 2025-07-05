import { serverInstance } from '@/lib/serverAxios';
import { TaskParams } from '@/types/task';
import { generateQueryString } from '@/utils/generateQueryString';

import Table from './Table';

type TablePropsT = {
  group: string;
  projectId: string;
};

const TasksTable: React.FC<TablePropsT> = async ({ group, projectId }) => {
  const query = generateQueryString({ typeId: group, projectId });

  const res = await serverInstance.get<TaskParams[]>(`/tasks?${query}`);
  const tasks = res.data;
  try {
    return <Table tasks={tasks} />;
  } catch (err) {
    console.error(err);
  }
};

export default TasksTable;
