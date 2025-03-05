import { LuFilter } from 'react-icons/lu';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import AssigneeFilter from '../Filters/AssigneeFilter';
import EstimationFilter from '../Filters/EstimationFilter';
import PriorityFilter from '../Filters/PriorityFilter';
import StatusFilter from '../Filters/StatusFilter';
import TypeFilter from '../Filters/TypeFilter';

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
