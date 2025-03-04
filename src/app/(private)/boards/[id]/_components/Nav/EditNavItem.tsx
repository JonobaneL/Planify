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
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="h-fit min-h-9 rounded px-2 py-1 [&_svg]:size-[18px]"
        >
          <LuPencilLine className="text-primary-80" /> Edit
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end">
        <h3 className="text-primary mb-2 font-medium">Display columns</h3>
        <div className="mb-1 flex items-center gap-2">
          <label className="flex w-fit cursor-pointer items-center gap-2 text-sm">
            <Checkbox
              checked
              className="border-primary-80 data-[state=checked]:bg-primary-80 rounded-sm"
            />
            All columns
          </label>
          <p className="text-xs">6 selected</p>
        </div>
        <ul className="">
          {tableColumns.map((column, index) => (
            <li key={index}>
              <label className="hover:bg-primary-10 flex min-h-[30px] cursor-pointer items-center gap-2 rounded-sm px-2.5 py-1 text-sm">
                <Checkbox
                  checked
                  className="border-primary-80 data-[state=checked]:bg-primary-80 rounded-sm"
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
