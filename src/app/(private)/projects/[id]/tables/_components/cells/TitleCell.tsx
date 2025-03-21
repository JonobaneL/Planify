'use client';

import { CellContext } from '@tanstack/react-table';
import { useState } from 'react';

import { Input } from '@/components/ui/input';
import { TaskParams } from '@/types/task';

const TitleCell: React.FC<CellContext<TaskParams, string>> = ({ getValue }) => {
  const initialTitle = getValue();

  //temporary state
  const [title, setTitle] = useState<string>(initialTitle);
  const [edit, setEdit] = useState(false);
  return (
    <div className="flex h-full w-full items-center p-2">
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
          onClick={() => setEdit(true)}
          title={title}
        >
          {title}
        </p>
      )}
    </div>
  );
};

export default TitleCell;
