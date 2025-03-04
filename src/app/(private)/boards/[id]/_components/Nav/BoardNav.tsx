import { LuSearch } from 'react-icons/lu';

import { Button } from '@/components/ui/button';

import EditNavItem from './EditNavItem';
import FilterNavItem from './FilterNavItem';

const BoardNav = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="space-x-2">
        <Button className="h-fit">New Task</Button>
      </div>
      <div className="space-x-2">
        <Button
          variant="ghost"
          className="text-primary h-fit min-h-9 rounded px-2 py-1 [&_svg]:size-[18px]"
        >
          <LuSearch className="text-primary-80" /> Search
        </Button>
        <FilterNavItem />
        <EditNavItem />
      </div>
    </div>
  );
};

export default BoardNav;
