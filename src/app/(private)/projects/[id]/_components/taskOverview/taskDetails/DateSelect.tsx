import { useState } from 'react';

import ClearButton from '@/components/ClearButton';
import DateSelectC from '@/components/DateSelect';
import { formatDate } from '@/utils/dateFormatting';

type SelectProps = {
  value: string | null;
};

const DateSelect: React.FC<SelectProps> = ({ value }) => {
  const [date, setDate] = useState<Date | undefined>(() => {
    if (!value) return undefined;
    return new Date();
  });
  return (
    <DateSelectC value={date} onValueChange={setDate}>
      {!date ? (
        <button className="flex h-10 w-fit cursor-pointer items-center rounded-lg p-2 text-gray-500 hover:bg-primary-10">
          No due date
        </button>
      ) : (
        <div className="group flex h-10 w-fit cursor-pointer items-center gap-2 rounded-lg p-2 hover:bg-primary-10">
          <p>{formatDate(date)}</p>
          <ClearButton className="p-0" handler={() => setDate(undefined)} />
        </div>
      )}
    </DateSelectC>
  );
};

export default DateSelect;
