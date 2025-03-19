'use client';
import { CellContext } from '@tanstack/react-table';
import { useState } from 'react';
import { LuCalendarPlus, LuX } from 'react-icons/lu';

import { formatDate } from '../tasksTable/utils';

import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { TaskParams } from '@/types/task';

const DateCell: React.FC<CellContext<TaskParams, string | null>> = ({
  getValue,
}) => {
  const initialDate = getValue();
  //temporary state
  const [date, setDate] = useState<Date | undefined>(() => {
    if (!initialDate) return undefined;
    return new Date();
  });
  const clearHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setDate(undefined);
  };
  return (
    <>
      <Popover modal>
        <PopoverTrigger asChild>
          {!date ? (
            <div className="h-full p-1">
              <button className="flex h-full w-full items-center justify-center rounded-sm opacity-0 transition-all duration-150 hover:border hover:opacity-100">
                <LuCalendarPlus className="text-primary" size={16} />
              </button>
            </div>
          ) : (
            <div className="group flex h-full items-center justify-between p-2">
              <p>{formatDate(date)}</p>
              <button
                onClick={clearHandler}
                className="rounded p-1 opacity-0 hover:bg-primary-10 group-hover:opacity-100"
              >
                <LuX size={14} />
              </button>
            </div>
          )}
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </>
  );
};

export default DateCell;
