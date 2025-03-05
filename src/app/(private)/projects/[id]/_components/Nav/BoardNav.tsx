import { LuSearch } from 'react-icons/lu';

import { Button } from '@/components/ui/button';

import EditNavItem from './EditNavItem';
import FilterNavItem from './FilterNavItem';

const BoardNav = () => {
  return (
    <div className="flex w-full justify-end">
      <div className="space-x-2">
        <Button variant="ghost" size="sm" className="[&_svg]:size-[18px]">
          <LuSearch className="text-primary" /> Search
        </Button>
        <FilterNavItem />
        <EditNavItem />
      </div>
    </div>
  );
};

export default BoardNav;
