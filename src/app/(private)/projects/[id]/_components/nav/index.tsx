import { LuSearch } from 'react-icons/lu';

import { Button } from '@/components/ui/button';

import ColumnsSelect from './ColumnsSelect';
import Filters from './Filters';
import GroupBy from './GroupBy';
import LayoutSelect from './LayoutSelect';

const BoardNav = () => {
  return (
    <div className="flex w-full items-center justify-end gap-1">
      <Button variant="ghost" size="sm" className="[&_svg]:size-[18px]">
        <LuSearch className="text-primary" /> Search
      </Button>
      <LayoutSelect />
      <GroupBy />
      <Filters />
      <ColumnsSelect />
    </div>
  );
};

export default BoardNav;
