'use client';

import { useState } from 'react';

import ClearButton from '@/components/ClearButton';
import { statuses } from '@/data/mock/statuses';
import { cn } from '@/lib/utils';

const StatusFilter = () => {
  const [checked, setChecked] = useState<string[]>([]);
  const handleCheck = (id: string) => {
    setChecked((p) => {
      if (p.includes(id)) return p.filter((item) => item !== id);
      return [...p, id];
    });
  };
  return (
    <div className="border-r pr-3">
      <div className="mb-1.5 flex min-h-6 items-center justify-between">
        <h4 className="text-sm font-medium text-gray-500">Status</h4>
        <ClearButton
          handler={() => setChecked([])}
          asParent
          visible={!!checked.length}
        />
      </div>
      <div className="space-y-1.5">
        {statuses.map((status) => (
          <button
            key={status.id}
            className={cn(
              'flex min-h-8 w-full min-w-36 cursor-pointer items-center gap-2 rounded px-2.5 py-1 hover:bg-primary-5',
              checked.includes(status.id) && 'bg-primary-5',
            )}
            onClick={() => handleCheck(status.id)}
          >
            <div
              className="size-4 rounded"
              style={{ backgroundColor: status.color }}
            />
            <p className="text-sm">{status.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StatusFilter;
