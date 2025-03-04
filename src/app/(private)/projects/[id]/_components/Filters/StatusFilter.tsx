'use client';
import { useState } from 'react';

const statuses = [
  {
    id: 'status1',
    name: 'Not Started',
    color: '#797E93',
  },
  {
    id: 'status2',
    name: 'In Progress',
    color: '#DEA761',
  },
  {
    id: 'status3',
    name: 'In Review',
    color: '#4C18DC',
  },
  {
    id: 'status4',
    name: 'In QA',
    color: '#885A95',
  },
  {
    id: 'status5',
    name: 'Done',
    color: '#175A63',
  },
];

const StatusFilter = () => {
  const [checked, setChecked] = useState<string[]>([]);
  const handleCheck = (id: string) => {
    setChecked((p) => {
      if (p.includes(id)) return p.filter((item) => item !== id);
      return [...p, id];
    });
  };
  return (
    <div>
      <h4 className="mb-1 text-sm font-medium text-slate-400">Satus</h4>
      <div className="space-y-1">
        {statuses.map((status) => (
          <button
            key={status.id}
            className={`hover:bg-primary-10 flex min-h-[30px] w-full min-w-32 cursor-pointer items-center gap-2 rounded-sm border px-2.5 py-1 ${checked.includes(status.id) ? 'bg-primary-10' : ''}`}
            onClick={() => handleCheck(status.id)}
          >
            <div
              className="size-3 rounded-sm"
              style={{ backgroundColor: status.color }}
            />
            <p className="text-sm">{status.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StatusFilter;
