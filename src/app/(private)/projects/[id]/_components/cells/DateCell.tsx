'use client';
import { CellContext } from '@tanstack/react-table';
import { useState } from 'react';
import { LuCalendarPlus } from 'react-icons/lu';

import ClearButton from '@/components/ClearButton';
import DateSelect from '@/components/DateSelect';
import { TaskParams } from '@/types/task';
import { formatDate } from '@/utils/dateFormatting';

const DateCell: React.FC<CellContext<TaskParams, string | null>> = ({
  getValue,
}) => {
  const initialDate = getValue();
  //temporary state
  const [date, setDate] = useState<Date | undefined>(() => {
    if (!initialDate) return undefined;
    return new Date();
  });

  return (
    <DateSelect value={date} onValueChange={setDate}>
      {!date ? (
        <div className="h-full p-1">
          <button className="flex h-full w-full items-center justify-center rounded-sm opacity-0 transition-all duration-150 hover:border hover:opacity-100">
            <LuCalendarPlus className="text-primary" size={16} />
          </button>
        </div>
      ) : (
        <div className="group flex h-full items-center justify-between p-2">
          <p>{formatDate(date)}</p>
          <ClearButton handler={() => setDate(undefined)} />
        </div>
      )}
    </DateSelect>
  );
};

export default DateCell;
