import { useState } from 'react';

import ClearButton from '@/components/ClearButton';
import Select from '@/components/StatusSelect';
import { StatusParams } from '@/types/status';

type SelectProps = {
  label?: string;
  value: StatusParams | null;
  options: StatusParams[];
  cleanButton?: boolean;
};

const StatusSelect: React.FC<SelectProps> = ({
  label = 'Empty',
  value,
  options,
  cleanButton = false,
}) => {
  const [status, setStatus] = useState<StatusParams | null>(value);
  return (
    <Select options={options} onValueChange={setStatus}>
      {status === null ? (
        <button className="flex h-10 w-fit cursor-pointer items-center rounded p-2 text-gray-600 hover:bg-primary-10">
          {label}
        </button>
      ) : (
        <div className="group flex h-10 w-fit cursor-pointer items-center gap-2 rounded p-2 hover:bg-primary-10">
          <button className="flex items-center gap-2">
            <div
              className="size-4 rounded"
              style={{ backgroundColor: status.color }}
            />
            <p className="text-sm">{status.label}</p>
          </button>
          <ClearButton
            className="p-0"
            handler={() => setStatus(null)}
            visible={cleanButton}
          />
        </div>
      )}
    </Select>
  );
};

export default StatusSelect;
