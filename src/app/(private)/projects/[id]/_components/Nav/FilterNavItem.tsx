import { LuFilter } from 'react-icons/lu';

import AssigneeFilter from '../filters/AssigneeFilter';
import EstimationFilter from '../filters/EstimationFilter';
import PriorityFilter from '../filters/PriorityFilter';
import StatusFilter from '../filters/StatusFilter';
import TypeFilter from '../filters/TypeFilter';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const FilterNavItem = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="[&_svg]:size-[18px]">
          <LuFilter className="text-primary" />
          Filter
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-fit">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-medium text-primary">Filters</h3>
          <Button variant="ghost" size="sm" disabled>
            Clear all
          </Button>
        </div>
        <div className="flex gap-4">
          <TypeFilter />
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
