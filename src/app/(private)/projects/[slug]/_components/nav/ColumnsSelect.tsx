'use client';
import { useState } from 'react';
import { LuPencilLine } from 'react-icons/lu';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { tableColumns } from '@/data/mockColumns';

const EditNavItem = () => {
  const [checked, setChecked] = useState(tableColumns);
  const onChangeHandler = (value: string) => {
    setChecked((p) => {
      if (p.includes(value)) return p.filter((item) => item !== value);
      return [...p, value];
    });
  };
  const allCheckedHandler = () => {
    setChecked((p) => {
      if (p.length === tableColumns.length) return [];
      return tableColumns;
    });
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="[&_svg]:size-[18px]">
          <LuPencilLine className="text-primary" />
          Edit
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="rounded-xl">
        <p className="mb-4 font-poppins text-sm font-medium text-gray-800">
          Display columns
        </p>
        <div className="mb-1 flex items-center gap-2">
          <label className="flex w-fit cursor-pointer items-center gap-2 text-sm">
            <Checkbox
              checked={checked.length === tableColumns.length}
              onCheckedChange={allCheckedHandler}
            />
            All columns
          </label>
          {checked.length > 0 && (
            <p className="text-xs">{checked.length} selected</p>
          )}
        </div>
        <ul>
          {tableColumns.map((column, index) => (
            <li key={index}>
              <label className="flex min-h-8 cursor-pointer items-center gap-2 rounded px-2.5 py-1 text-sm hover:bg-primary-10">
                <Checkbox
                  checked={checked.includes(column)}
                  onCheckedChange={() => onChangeHandler(column)}
                />
                {column}
              </label>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default EditNavItem;
