import { PropsWithChildren, useState } from 'react';
import { LuPencilLine } from 'react-icons/lu';

import { StatusParams } from '@/types/status';

import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

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
      <PopoverContent className="w-56 p-0">
        <ul className="border-b p-2">
          {options.map((option) => (
            <li
              key={option.id}
              onClick={() => handleSelect(option)}
              className="flex h-9 cursor-pointer items-center gap-2 rounded-sm px-2 text-sm hover:bg-primary-10"
            >
              <div
                className="size-4 rounded"
                style={{ backgroundColor: option.color }}
              />
              {option.label}
            </li>
          ))}
        </ul>
        <div className="flex justify-center py-2">
          {/* TODO: add edit labels function */}
          <Button className="mx-auto h-8 hover:bg-transparent" variant="ghost">
            <LuPencilLine />
            Edit Labels
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default StatusSelect;
