import serverAxios from '@/lib/axiosServer';
import { TaskParams } from '@/types/task';
// import { generateQueryString } from '@/utils/generateQueryString';

import Table from './Table';

type TablePropsT = {
  group?: string;
  projectId: string;
};

const TasksTable: React.FC<TablePropsT> = async ({ projectId }) => {
  // const query = generateQueryString({ projectId });

  const res = await serverAxios.get<TaskParams[]>(
    `projects/${projectId}/tasks`,
  );
  const tasks = res.data;
  try {
    return <Table tasks={tasks} />;
  } catch (err) {
    console.error(err);
  }
};

export default TasksTable;
