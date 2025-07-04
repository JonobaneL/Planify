'use client';

import { useQueryState } from 'nuqs';
import { useLayoutEffect } from 'react';
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

import { useTableStore } from '../../store';

const OPTIONS = [
  { value: 'type', label: 'Type (Default)' },
  { value: 'status', label: 'Status' },
  { value: 'priority', label: 'Priority' },
  { value: 'assigned_user', label: 'Assignee' },
];

const GroupBy: React.FC = () => {
  const [group, setGroup] = useQueryState('groupBy', {
    defaultValue: 'type',
    shallow: false,
  });
  const setColumnVisibility = useTableStore(
    (state) => state.setColumnVisibility,
  );
  const [order, setOrder] = useQueryState('groupOrder', { shallow: false });

  const updateColumns = (hiddenColumn: string) => {
    OPTIONS.forEach((option) => {
      if (option.value !== hiddenColumn) {
        setColumnVisibility(option.value, true);
        return;
      }
      setColumnVisibility(option.value, false);
    });
  };

  const groupHandler = (value: string) => {
    setGroup(value);
    updateColumns(value);
    setOrder(null);
  };

  const clearHandler = () => {
    setGroup('type');
    setOrder(null);
  };

  useLayoutEffect(() => {
    if (group) {
      setColumnVisibility(group, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
          <Select value={group ?? ''} onValueChange={groupHandler}>
            <SelectTrigger className="w-full text-gray-600">
              <SelectValue placeholder="Select property" />
            </SelectTrigger>
            <SelectContent>
              {OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <ToggleGroup
            type="single"
            value={order ?? ''}
            onValueChange={(newValue) => setOrder(newValue ? newValue : null)}
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
