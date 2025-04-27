'use client';

import { useQueryState } from 'nuqs';
import { LuSquareKanban, LuTable2 } from 'react-icons/lu';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';

const LayoutSelect: React.FC = () => {
  const [view, setView] = useQueryState('view', {
    defaultValue: 'table',
    clearOnDefault: false,
  });
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="[&_svg]:size-[18px]">
          {view === 'board' ? <LuSquareKanban /> : <LuTable2 />}
          Layout
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-[16rem] rounded-xl">
        <p className="mb-2 font-poppins text-sm font-medium text-gray-800">
          Layout
        </p>
        <RadioGroup value={view} onValueChange={setView} className="gap-0">
          <label
            className={cn(
              'flex h-8 cursor-pointer items-center justify-between rounded text-sm text-gray-600',
              view === 'table' && 'font-medium text-gray-900',
            )}
          >
            <div className="flex items-center gap-2">
              <LuTable2 className="size-[18px] text-primary" />
              Table
            </div>

            <RadioGroupItem value="table" />
          </label>
          <label
            className={cn(
              'flex h-8 cursor-pointer items-center justify-between rounded text-sm text-gray-600',
              view === 'board' && 'font-medium text-gray-900',
            )}
          >
            <div className="flex items-center gap-2">
              <LuSquareKanban className="size-[18px] text-primary" />
              Board
            </div>

            <RadioGroupItem value="board" />
          </label>
        </RadioGroup>
      </PopoverContent>
    </Popover>
  );
};

export default LayoutSelect;
