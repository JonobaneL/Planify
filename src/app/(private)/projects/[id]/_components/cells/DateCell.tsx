'use client';

import { useMutation } from '@tanstack/react-query';
import { CellContext } from '@tanstack/react-table';
import { LuCalendarPlus } from 'react-icons/lu';

import ClearButton from '@/components/ClearButton';
import DateSelect from '@/components/DateSelect';
import { cn } from '@/lib/utils';
import { TaskParams } from '@/types/task';
import { formatDate } from '@/utils/dateFormatting';

import { updateTask } from '../../_actions/task';

const DateCell: React.FC<CellContext<TaskParams, string | null>> = ({
  getValue,
  row,
}) => {
  const initialDate = getValue();

  const { mutate, isPending } = useMutation({
    mutationFn: (date: string | null) =>
      updateTask(row.original.id, row.original.projectId, {
        dueDate: date,
      }),
  });

  return (
    <DateSelect
      value={initialDate ? new Date(initialDate) : undefined}
      onValueChange={(date) => mutate(date?.toISOString() ?? null)}
    >
      {!initialDate ? (
        <div className="h-full p-1">
          <button
            className={cn(
              'flex h-full w-full items-center justify-center rounded-sm opacity-0 transition-all duration-150 hover:border hover:opacity-100',
              isPending && 'pointer-events-none animate-pulse',
            )}
          >
            <LuCalendarPlus className="text-primary" size={16} />
          </button>
        </div>
      ) : (
        <div
          className={cn(
            'group flex h-full items-center justify-between p-2',
            isPending && 'pointer-events-none animate-pulse',
          )}
        >
          <p>{formatDate(new Date(initialDate))}</p>
          <ClearButton handler={() => mutate(null)} />
        </div>
      )}
    </DateSelect>
  );
};

export default DateCell;
