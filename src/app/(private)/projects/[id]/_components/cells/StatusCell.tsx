'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { CellContext } from '@tanstack/react-table';
import { LuPlus } from 'react-icons/lu';

import ClearButton from '@/components/ClearButton';
import StatusSelect from '@/components/StatusSelect';
import clientAxios from '@/lib/axiosClient';
import { cn } from '@/lib/utils';
import { StatusParams } from '@/types/status';
import { TaskParams } from '@/types/task';

import { updateStatus } from '../../_actions/status';

type StatusCellProps = {
  type: string;
  cleanButton?: boolean;
} & CellContext<TaskParams, StatusParams | null>;

const StatusCell: React.FC<StatusCellProps> = ({
  getValue,
  type,
  row,
  column,
  cleanButton = false,
}) => {
  const initialStatus = getValue();
  const taskId = row.original.id;
  const columnId = `${column.id}Id`;
  const { mutate, isPending } = useMutation({
    mutationFn: (statusId: string | null) =>
      updateStatus(statusId, columnId, taskId, row.original.projectId),
  });

  const { data: statusesResponse } = useQuery({
    queryKey: ['status-options', type],
    queryFn: () => clientAxios.get(`/statuses?type=${type}`),
  });
  const options = statusesResponse?.data;

  return (
    <StatusSelect
      options={options ?? []}
      onValueChange={(status) => mutate(status.id)}
    >
      {initialStatus === null ? (
        <div className="h-full p-1">
          <button
            className={cn(
              'flex h-full w-full items-center justify-center rounded-sm opacity-0 transition-all duration-150 hover:border hover:opacity-100',
              isPending && 'pointer-events-none animate-pulse',
            )}
          >
            <LuPlus className="text-primary" size={16} />
          </button>
        </div>
      ) : (
        <div
          className={cn(
            'group flex h-full w-full items-center justify-between gap-2 px-2',
            isPending && 'pointer-events-none animate-pulse',
          )}
        >
          <button className="flex items-center gap-2">
            <div
              className="size-4 rounded"
              style={{ backgroundColor: initialStatus?.color }}
            />
            <p>{initialStatus?.label}</p>
          </button>
          <ClearButton handler={() => mutate(null)} visible={cleanButton} />
        </div>
      )}
    </StatusSelect>
  );
};

export default StatusCell;
