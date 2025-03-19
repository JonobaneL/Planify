'use client';

import { CellContext } from '@tanstack/react-table';
import { useState } from 'react';
import { LuPencilLine, LuPlus } from 'react-icons/lu';

import ClearButton from './clearButton';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { StatusParams } from '@/types/status';
import { TaskParams } from '@/types/task';

type StatusCellProps = {
  options: StatusParams[];
  cleanButton?: boolean;
} & CellContext<TaskParams, StatusParams | null>;

const StatusCell: React.FC<StatusCellProps> = ({
  getValue,
  options,
  cleanButton = false,
}) => {
  const initialStatus = getValue();
  //temporary state
  const [status, setStatus] = useState<StatusParams | null>(initialStatus);

  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = (option: StatusParams) => {
    setStatus(option);
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        {status === null ? (
          <div className="h-full p-1">
            <button className="flex h-full w-full items-center justify-center rounded-sm opacity-0 transition-all duration-150 hover:border hover:opacity-100">
              <LuPlus className="text-primary" size={16} />
            </button>
          </div>
        ) : (
          <div className="group flex h-full w-full items-center justify-between gap-2 px-2">
            <button className="flex items-center gap-2">
              <div
                className="size-4 rounded"
                style={{ backgroundColor: status.color }}
              />
              <p>{status.label}</p>
            </button>
            <ClearButton
              handler={() => setStatus(null)}
              visible={cleanButton}
            />
          </div>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-56">
        <ul className="mb-2 space-y-1.5 border-b px-2 pb-3">
          {options.map((option) => (
            <li
              key={option.id}
              style={{ backgroundColor: option.color }}
              onClick={() => handleSelect(option)}
              className="flex h-8 cursor-pointer items-center justify-center rounded-sm px-2 text-sm text-white"
            >
              {option.label}
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <Button className="mx-auto h-8" variant="ghost">
            <LuPencilLine />
            Edit Labels
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default StatusCell;
