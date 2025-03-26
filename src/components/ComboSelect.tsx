import Image from 'next/image';
import { PropsWithChildren, useState } from 'react';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './ui/command';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

interface OptionType {
  id: string | number;
  avatar?: string;
  [key: string]: unknown;
}

type SelectProps<T> = {
  value?: T | null;
  onValueChange: (value: T | null) => void;
  options: T[];
  displayField?: keyof T;
  valueField?: keyof T;
  placeholder?: string;
  emptyMessage?: string;
};

const ComboSelect = <T extends OptionType>({
  onValueChange,
  options,
  children,
  displayField = 'username',
  valueField = 'id',
  placeholder = 'Search...',
  emptyMessage = 'No results found.',
}: PropsWithChildren<SelectProps<T>>) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (selectedValue: string) => {
    const newSelectedOption = options.find(
      (option) => String(option[valueField]) === selectedValue,
    );
    onValueChange(newSelectedOption || null);
    setOpen(false);
  };
  return (
    <Popover open={open} onOpenChange={setOpen} modal>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-[220px] p-0">
        <Command>
          <CommandInput placeholder={placeholder} className="h-9" />
          <CommandList>
            <CommandEmpty className="py-4 text-center text-sm">
              {emptyMessage}
            </CommandEmpty>
            <CommandGroup>
              {options.map((option: T) => {
                const optionValue = String(option[valueField]);
                const optionDisplay = String(option[displayField]);
                return (
                  <CommandItem
                    key={option.id}
                    value={optionValue}
                    onSelect={handleSelect}
                    className="flex items-center gap-2"
                  >
                    {option.avatar && (
                      <Image
                        width={25}
                        height={25}
                        className="rounded-full"
                        src={option.avatar}
                        alt={optionDisplay}
                      />
                    )}
                    {optionDisplay}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default ComboSelect;
