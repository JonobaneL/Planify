import { useState } from 'react';

import ClearButton from '@/components/ClearButton';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { formatDate } from '@/utils/dataFormatting';

type SelectProps = {
  value: string | null;
};

const DateSelect: React.FC<SelectProps> = ({ value }) => {
  const [date, setDate] = useState<Date | undefined>(() => {
    if (!value) return undefined;
    return new Date();
  });
  return (
    <Popover modal>
      <PopoverTrigger asChild>
        {!date ? (
          <button className="flex w-fit cursor-pointer items-center rounded p-2 text-gray-600 hover:bg-primary-10">
            No due date
          </button>
        ) : (
          <div className="group flex h-9 w-fit cursor-pointer items-center gap-2 rounded p-2 hover:bg-primary-10">
            <p>{formatDate(date)}</p>
            <ClearButton handler={() => setDate(undefined)} />
          </div>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DateSelect;
