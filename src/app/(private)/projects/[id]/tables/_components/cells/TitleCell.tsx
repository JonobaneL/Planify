'use client';

import { CellContext } from '@tanstack/react-table';
import { useQueryState } from 'nuqs';
import { useState } from 'react';
import { LuMaximize2, LuMessageCircle } from 'react-icons/lu';

import { Input } from '@/components/ui/input';
import { TaskParams } from '@/types/task';

import { useTaskOverviewStore } from '../../../_components/taskOverview/store';

const TitleCell: React.FC<CellContext<TaskParams, string>> = ({
  getValue,
  row,
}) => {
  const initialTitle = getValue();

  // const setTaskId = useParamsState('task')[1];
  const setTaskId = useQueryState('task')[1];
  const setTab = useQueryState('tab')[1];
  const showOverview = useTaskOverviewStore((state) => state.showOverview);

  const showHandler = () => {
    setTaskId(row.original.id);
    showOverview();
  };

  //temporary state
  const [title, setTitle] = useState<string>(initialTitle);
  const [edit, setEdit] = useState(false);
  return (
    <div className="group flex h-full w-full items-center justify-between gap-2 p-2">
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
        <>
          <p
            className="max-w-full truncate rounded-sm p-0.5 ring-gray-300 transition-all duration-100 hover:ring-1"
            onClick={() => setEdit(true)}
            title={title}
          >
            {title}
          </p>
          <div className="flex w-0 gap-2 group-hover:w-fit">
            <button
              className="invisible flex cursor-pointer items-center gap-0.5 text-gray-400 transition-colors hover:text-primary group-hover:visible"
              onClick={() => {
                showHandler();
                setTab('Comments');
              }}
            >
              <LuMessageCircle size={16} />
              <p className="text-xs font-medium">2</p>
            </button>
            <button className="cursor-pointer" onClick={showHandler}>
              <LuMaximize2
                className="invisible text-gray-400 transition-colors hover:text-primary group-hover:visible"
                size={16}
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TitleCell;
