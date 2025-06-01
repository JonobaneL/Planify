//temporary approach

import { TaskParams } from '@/types/task';

// Function to group tasks by type for a specific project, with optional sorted group keys
export const groupTasksByType = (
  tasks: TaskParams[],
  projectId: string,
  sortOrder?: 'asc' | 'desc',
): { [key: string]: TaskParams[] } => {
  // Group tasks by type after filtering by projectId
  const grouped = tasks
    .filter((task) => task.projectId === projectId)
    .reduce(
      (acc, task) => {
        const { type } = task;
        if (!acc[type]) {
          acc[type] = [];
        }
        acc[type].push(task);
        return acc;
      },
      {} as { [key: string]: TaskParams[] },
    );

  // If sortOrder is not provided, return grouped object as is
  if (!sortOrder) {
    return grouped;
  }

  // Create a new object with sorted keys
  const sortedGrouped: { [key: string]: TaskParams[] } = {};
  Object.keys(grouped)
    .sort((a, b) =>
      sortOrder === 'asc' ? a.localeCompare(b) : b.localeCompare(a),
    )
    .forEach((key) => {
      sortedGrouped[key] = grouped[key];
    });

  return sortedGrouped;
};
