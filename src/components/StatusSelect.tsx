import { PropsWithChildren, useState } from 'react';
import { LuPencilLine } from 'react-icons/lu';

import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

import { StatusParams } from '@/types/status';

type SelectProps = {
  onValueChange: (value: StatusParams) => void;
  options: StatusParams[];
};

const StatusSelect: React.FC<PropsWithChildren<SelectProps>> = ({
  onValueChange,
  options,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = (option: StatusParams) => {
    onValueChange(option);
    setIsOpen(false);
  };
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-56">
        <ul className="mb-2 space-y-1.5 border-b px-2 pb-3">
          {options.map((option) => (
            <li
              key={option.id}
              style={{ backgroundColor: option.color }}
              onClick={() => handleSelect(option)}
              className="flex h-8 cursor-pointer items-center justify-center rounded-sm px-2 text-sm text-white"
            >
              {option.label}
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          {/* TODO: add edit labels function */}
          <Button className="mx-auto h-8" variant="ghost">
            <LuPencilLine />
            Edit Labels
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default StatusSelect;
