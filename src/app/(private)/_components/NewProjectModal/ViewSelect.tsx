import { LuSquareKanban, LuTable2 } from 'react-icons/lu';

import { cn } from '@/lib/utils';

type SelectProps = {
  value: string;
  onChange: (newValue: string) => void;
};

const ViewSelect: React.FC<SelectProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-2">
      <p className="text-gray-700">What view you prefer?</p>
      <div className="flex h-12 gap-2">
        <button
          type="button"
          onClick={() => onChange('table')}
          className={cn(
            'flex w-1/2 items-center justify-center gap-2 rounded-lg border px-2 text-primary',
            value === 'table' && 'border-primary',
          )}
        >
          <LuTable2 size={18} />
          <p>Table</p>
        </button>
        <button
          type="button"
          onClick={() => onChange('board')}
          className={cn(
            'flex w-1/2 items-center justify-center gap-2 rounded-lg border px-2 text-primary',
            value === 'board' && 'border-primary',
          )}
        >
          <LuSquareKanban size={18} />
          <p>Board</p>
        </button>
      </div>
    </div>
  );
};

export default ViewSelect;
