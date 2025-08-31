import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import { SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

import { updateTask } from '../../../_actions/task';
import TitleInput from '../../TitleInput';

type TitleProps = {
  title: string;
  taskId: string;
  projectId: string;
};

const TaskTitle: React.FC<TitleProps> = ({ title, taskId, projectId }) => {
  const [edit, setEdit] = useState(false);
  const { mutate, isPending } = useMutation({
    mutationFn: (newTitle: string) =>
      updateTask(taskId, projectId, {
        title: newTitle,
      }),
  });

  return (
    <div className="pt-2">
      {!edit ? (
        <SheetTitle
          onClick={() => setEdit(true)}
          className={cn(
            'rounded border border-transparent px-0.5 py-[3px] text-xl font-medium hover:border-gray-300',
            isPending && 'pointer-events-none animate-pulse',
          )}
        >
          {title}
        </SheetTitle>
      ) : (
        <TitleInput
          title={title}
          onChange={(value) => mutate(value)}
          className="h-9 px-2 py-0 !text-lg font-medium"
          onClose={() => setEdit(false)}
        />
      )}
    </div>
  );
};

export default TaskTitle;
