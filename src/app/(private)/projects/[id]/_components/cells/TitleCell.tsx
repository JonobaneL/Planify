'use client';

import { useMutation } from '@tanstack/react-query';
import { CellContext } from '@tanstack/react-table';
import { useQueryState } from 'nuqs';
import { useState } from 'react';
import { LuMessageCircle } from 'react-icons/lu';

import { cn } from '@/lib/utils';
import { useCommentsStore } from '@/stores/comments';
import { TaskParams } from '@/types/task';

import { updateTask } from '../../_actions/task';
import TitleInput from '../TitleInput';

const TitleCell: React.FC<CellContext<TaskParams, string>> = ({
  getValue,
  row,
}) => {
  const initialTitle = getValue();

  const setTaskId = useQueryState('task')[1];
  const setTab = useQueryState('tab')[1];

  const getCommentsCount = useCommentsStore((state) => state.getCommentsCount);
  const commentsCount = getCommentsCount(row.original.id);

  const [edit, setEdit] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: (newTitle: string) =>
      updateTask(row.original.id, row.original.projectId, {
        title: newTitle,
      }),
  });

  //todo:create a better loader

  return (
    <div
      className="group flex h-full w-full items-center justify-between gap-2 p-2"
      onClick={() => setTaskId(row.original.id)}
    >
      {edit ? (
        <TitleInput
          title={initialTitle}
          onChange={(value) => mutate(value)}
          className="h-full rounded-sm px-1"
          onClose={() => setEdit(false)}
        />
      ) : (
        <p
          className={cn(
            'max-w-full truncate rounded-sm p-0.5 ring-gray-300 transition-all duration-100 hover:ring-1',
            isPending && 'pointer-events-none animate-pulse',
          )}
          onClick={(e) => {
            e.stopPropagation();
            setEdit(true);
          }}
          title={initialTitle}
        >
          {initialTitle}
        </p>
      )}
      {commentsCount && !edit ? (
        <button
          className="flex cursor-pointer items-center gap-0.5 text-gray-400 transition-colors hover:text-primary"
          onClick={() => {
            setTab('Comments');
          }}
        >
          <LuMessageCircle size={16} />
          <p className="text-xs font-medium">{commentsCount}</p>
        </button>
      ) : null}
    </div>
  );
};

export default TitleCell;
