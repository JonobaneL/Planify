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
    <Popover open={isOpen} onOpenChange={setIsOpen} modal>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-56 rounded-xl p-0">
        <ul className="border-b p-2">
          {options.map((option) => (
            <li
              key={option.id}
              onClick={() => handleSelect(option)}
              className="flex h-9 cursor-pointer items-center gap-2 rounded-md px-2 text-sm hover:bg-primary-10"
            >
              <div
                className="size-4 rounded"
                style={{ backgroundColor: option.color }}
              />
              {option.label}
            </li>
          ))}
        </ul>
        <div className="flex justify-center px-2 py-2">
          {/* TODO: add edit labels function */}
          <Button className="h-9 w-full hover:bg-primary-10" variant="ghost">
            <LuPencilLine />
            Edit labels
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default StatusSelect;
