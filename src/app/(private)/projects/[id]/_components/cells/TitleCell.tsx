'use client';

import { CellContext } from '@tanstack/react-table';
import { useQueryState } from 'nuqs';
import { useState } from 'react';
import { LuMessageCircle } from 'react-icons/lu';

import { Input } from '@/components/ui/input';
import { useCommentsStore } from '@/stores/comments';
import { TaskParams } from '@/types/task';

const TitleCell: React.FC<CellContext<TaskParams, string>> = ({
  getValue,
  row,
}) => {
  const initialTitle = getValue();

  const setTaskId = useQueryState('task')[1];
  const setTab = useQueryState('tab')[1];

  const getCommentsCount = useCommentsStore((state) => state.getCommentsCount);
  const commentsCount = getCommentsCount(row.original.id);

  //temporary state
  const [title, setTitle] = useState<string>(initialTitle);
  const [edit, setEdit] = useState(false);
  return (
    <div
      className="group flex h-full w-full items-center justify-between gap-2 p-2"
      onClick={() => setTaskId(row.original.id)}
    >
      {edit ? (
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={() => setEdit(false)}
          className="h-full rounded-sm px-1"
          autoFocus
        />
      ) : (
        <p
          className="max-w-full truncate rounded-sm p-0.5 ring-gray-300 transition-all duration-100 hover:ring-1"
          onClick={(e) => {
            e.stopPropagation();
            setEdit(true);
          }}
          title={title}
        >
          {title}
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
