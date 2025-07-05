'use client';
import { LuPencilLine } from 'react-icons/lu';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { COLUMNS } from '@/data/mockColumns';

import { useTableStore } from '../../store';

const EditNavItem = () => {
  const { columnVisibility, setColumnVisibility, toggleAllColumns } =
    useTableStore();

  const checkedLength = Object.values(columnVisibility).filter(
    (item) => item,
  ).length;
  const isAllSelected = checkedLength === Object.keys(columnVisibility).length;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="[&_svg]:size-[18px]">
          <LuPencilLine className="text-primary" />
          Edit
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="rounded-xl">
        <div className="mb-4 flex items-center justify-between">
          <p className="font-poppins text-sm font-medium text-gray-800">
            Display columns
          </p>
          <Button variant="outline" size="xs" className="border" disabled>
            Save as view
          </Button>
        </div>

        <div className="mb-1 flex items-center gap-2">
          <label className="flex w-fit cursor-pointer items-center gap-2 text-sm font-medium">
            <Checkbox
              checked={isAllSelected}
              onCheckedChange={() => toggleAllColumns(!isAllSelected)}
              className="size-[18px]"
            />
            All columns
          </label>
          {checkedLength > 0 && (
            <p className="text-sm text-gray-600">{checkedLength} selected</p>
          )}
        </div>
        <ul>
          {COLUMNS.map((column, index) => (
            <li key={index}>
              <label className="flex min-h-8 cursor-pointer items-center gap-2 rounded px-2.5 py-1 text-sm hover:bg-primary-10">
                <Checkbox
                  checked={columnVisibility[column.key] ?? true}
                  onCheckedChange={(value) =>
                    setColumnVisibility(column.key, Boolean(value))
                  }
                  className="size-[18px]"
                />
                {column.label}
              </label>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default EditNavItem;
