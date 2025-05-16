import { useQueryState } from 'nuqs';

import { useCommentsStore } from '@/stores/comments';

import Comment from './Comment';
import EmptyLabel from './EmptyLabel';

const TaskComments: React.FC = () => {
  const taskId = useQueryState('task')[0];
  const getTaskComments = useCommentsStore((state) => state.getTaskComments);
  const taskComments = getTaskComments(taskId ?? '');
  return (
    <div className="grid h-full grid-rows-[1fr_auto] gap-4 p-6">
      {taskComments?.length ? (
        <div className="flex flex-col gap-4">
          {taskComments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </div>
      ) : (
        <EmptyLabel />
      )}

      <div className="h-10 min-h-10 w-full flex-[0_1_auto] rounded-lg border"></div>
    </div>
  );
};

export default TaskComments;
