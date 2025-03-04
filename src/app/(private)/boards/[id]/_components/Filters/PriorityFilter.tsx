'use client';
import { useState } from 'react';

const priorities = [
  {
    id: 'priority1',
    name: 'Low',
    color: '#79AFFD',
  },
  {
    id: 'priority2',
    name: 'Middle',
    color: '#6C6FCF',
  },
  {
    id: 'priority3',
    name: 'High',
    color: '#5E429C',
  },
];

const PriorityFilter = () => {
  const [checked, setChecked] = useState<string[]>([]);
  const handleCheck = (id: string) => {
    setChecked((p) => {
      if (p.includes(id)) return p.filter((item) => item !== id);
      return [...p, id];
    });
  };
  return (
    <div>
      <h4 className="mb-1 text-sm font-medium text-slate-400">Priority</h4>
      <div className="space-y-1">
        {priorities.map((priority) => (
          <button
            key={priority.id}
            className={`hover:bg-primary-10 flex min-h-[30px] w-full min-w-32 cursor-pointer items-center gap-2 rounded-sm border px-2.5 py-1 ${checked.includes(priority.id) ? 'bg-primary-10' : ''}`}
            onClick={() => handleCheck(priority.id)}
          >
            <div
              className="size-3 rounded-sm"
              style={{ backgroundColor: priority.color }}
            />
            <p className="text-sm">{priority.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PriorityFilter;
