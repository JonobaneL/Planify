import { PropsWithChildren } from 'react';

import { Calendar } from '@/components/ui/calendar';

import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

type SelectPropsT = {
  value?: Date;
  onValueChange: (date: Date | undefined) => void;
};

const DateSelect: React.FC<PropsWithChildren<SelectPropsT>> = ({
  value,
  onValueChange,
  children,
}) => {
  return (
    <Popover modal>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-auto rounded-xl p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onValueChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DateSelect;
