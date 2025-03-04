import { LuSearch } from 'react-icons/lu';

import EditNavItem from './EditNavItem';
import FilterNavItem from './FilterNavItem';

import { Button } from '@/components/ui/button';

const BoardNav = () => {
  return (
    <div className="flex w-full justify-end">
      <div className="space-x-2">
        <Button
          variant="ghost"
          className="h-fit min-h-9 rounded px-2 py-1 text-primary [&_svg]:size-[18px]"
        >
          <LuSearch className="text-primary" /> Search
        </Button>
        <FilterNavItem />
        <EditNavItem />
      </div>
    </div>
  );
};

export default BoardNav;
