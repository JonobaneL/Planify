import { LuFilter } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import AssigneeFilter from "../Filters/AssigneeFilter";
import EstimationFilter from "../Filters/EstimationFilter";
import PriorityFilter from "../Filters/PriorityFilter";
import StatusFilter from "../Filters/StatusFilter";
import TypeFilter from "../Filters/TypeFilter";

const FilterNavItem = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="h-fit min-h-9 [&_svg]:size-[18px] rounded px-2 py-1">
          <LuFilter className="text-primary-b-80" />
          Filter
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-fit">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-medium text-primary-b">Filters</h3>
          <Button variant="ghost" className="h-8" disabled>
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
