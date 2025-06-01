import { LuFilter } from 'react-icons/lu';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import AssigneeFilter from '../filters/AssigneeFilter';
import EstimationFilter from '../filters/EstimationFilter';
import PriorityFilter from '../filters/PriorityFilter';
import StatusFilter from '../filters/StatusFilter';

const FilterNavItem = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="[&_svg]:size-[18px]">
          <LuFilter className="text-primary" />
          Filters
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-fit rounded-xl">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-grey-800 font-poppins text-sm font-medium">
            Filters
          </p>
          <div className="flex gap-1">
            <Button variant="ghost" size="xs" disabled>
              Clear all
            </Button>
            <Button variant="outline" size="xs" className="border" disabled>
              Save as view
            </Button>
          </div>
        </div>
        <div className="flex gap-3">
          <StatusFilter />
          <PriorityFilter />
          <EstimationFilter />
          <AssigneeFilter />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FilterNavItem;
