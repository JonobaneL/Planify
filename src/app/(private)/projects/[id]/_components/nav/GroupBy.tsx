'use client';
import { useState } from 'react';
import { LuArrowDownAZ, LuArrowUpAZ, LuLayoutGrid } from 'react-icons/lu';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const GroupBy: React.FC = () => {
  const [group, setGroup] = useState<string | null>('type');
  const [order, setOrder] = useState<string | null>(null);
  const clearHandler = () => {
    setGroup('type');
    setOrder(null);
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="[&_svg]:size-[18px]">
          <LuLayoutGrid />
          Group by
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-[22rem] rounded-xl pt-3">
        <div className="mb-4 flex items-center justify-between">
          <p className="font-poppins text-sm font-medium text-gray-800">
            Group items by
          </p>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="xs"
              disabled={group === 'type' && order === null}
              onClick={clearHandler}
            >
              Clear
            </Button>
            <Button variant="outline" size="xs" className="border" disabled>
              Save as view
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Select value={group ?? ''} onValueChange={setGroup}>
            <SelectTrigger className="w-full text-gray-600">
              <SelectValue placeholder="Select property" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="type">Type (Default)</SelectItem>
              <SelectItem value="status">Status</SelectItem>
              <SelectItem value="priority">Priority</SelectItem>
              <SelectItem value="assignee">Assignee</SelectItem>
            </SelectContent>
          </Select>
          <ToggleGroup
            type="single"
            value={order ?? ''}
            onValueChange={setOrder}
          >
            <ToggleGroupItem
              value="asc"
              aria-label="Toggle asc"
              className="[&_svg]:size-[18px]"
            >
              <LuArrowDownAZ />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="desc"
              aria-label="Toggle desc"
              className="[&_svg]:size-[18px]"
            >
              <LuArrowUpAZ />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default GroupBy;
