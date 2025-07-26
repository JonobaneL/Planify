'use client';

import { CellContext } from '@tanstack/react-table';
import { useState } from 'react';
import { LuPlus } from 'react-icons/lu';

import ClearButton from '@/components/ClearButton';
import StatusSelect from '@/components/StatusSelect';
import clientAxios from '@/lib/axiosClient';
import { StatusParams } from '@/types/status';
import { TaskParams } from '@/types/task';

type StatusCellProps = {
  options: StatusParams[];
  cleanButton?: boolean;
} & CellContext<TaskParams, StatusParams | null>;

const StatusCell: React.FC<StatusCellProps> = ({
  getValue,
  options,
  row,
  column,
  cleanButton = false,
}) => {
  const initialStatus = getValue();

  const updateStatus = async (status: StatusParams) => {
    setStatus(status);
    const taskId = row.original.id;
    const columnId = `${column.id}Id`;
    try {
      await clientAxios.patch(`/tasks/${taskId}`, {
        [columnId]: status.id,
      });
    } catch (e) {
      console.error(e);
    }
  };

  //temporary state
  const [status, setStatus] = useState<StatusParams | null>(initialStatus);

  return (
    <StatusSelect options={options} onValueChange={updateStatus}>
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
              style={{ backgroundColor: status?.color }}
            />
            <p>{status?.label}</p>
          </button>
          <ClearButton handler={() => setStatus(null)} visible={cleanButton} />
        </div>
      )}
    </StatusSelect>
  );
};

export default StatusCell;
