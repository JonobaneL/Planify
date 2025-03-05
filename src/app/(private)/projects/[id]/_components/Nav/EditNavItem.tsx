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
        <Button variant="ghost" size="sm" className="[&_svg]:size-[18px]">
          <LuPencilLine className="text-primary" />
          Edit
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end">
        <h3 className="mb-2 font-medium text-primary">Display columns</h3>
        <div className="mb-1 flex items-center gap-2">
          <label className="flex w-fit cursor-pointer items-center gap-2 text-sm">
            <Checkbox
              checked
              className="rounded-sm border-primary data-[state=checked]:bg-primary"
            />
            All columns
          </label>
          <p className="text-xs">6 selected</p>
        </div>
        <ul className="">
          {tableColumns.map((column, index) => (
            <li key={index}>
              <label className="flex min-h-[30px] cursor-pointer items-center gap-2 rounded-sm px-2.5 py-1 text-sm hover:bg-primary-10">
                <Checkbox
                  checked
                  className="rounded-sm border-primary data-[state=checked]:bg-primary"
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
