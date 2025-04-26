'use client';

import { useState } from 'react';

import ClearButton from '@/components/ClearButton';

const estimations = [
  {
    id: 'estimation1',
    name: '1',
  },
  {
    id: 'estimation2',
    name: '3',
  },
  {
    id: 'estimation3',
    name: '5',
  },
  {
    id: 'estimation4',
    name: '8',
  },
  {
    id: 'estimation5',
    name: '12',
  },
];

const EstimationFilter = () => {
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
        <h4 className="text-sm font-medium text-gray-500">Estimation</h4>
        <ClearButton
          handler={() => setChecked([])}
          asParent
          visible={!!checked.length}
        />
      </div>
      <div className="flex min-w-36 max-w-36 flex-wrap gap-1">
        {estimations.map((estimation) => (
          <button
            key={estimation.id}
            className={`flex min-h-[30px] w-fit min-w-[30px] cursor-pointer items-center justify-center gap-2 rounded-sm border px-2.5 py-1 text-sm hover:bg-primary-10 ${checked.includes(estimation.id) ? 'bg-primary-10' : ''}`}
            onClick={() => handleCheck(estimation.id)}
          >
            {estimation.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EstimationFilter;
