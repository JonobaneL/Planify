'use client';

import { useQueryState } from 'nuqs';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const SORT_OPTIONS = [
  { value: 'updatedAt-desc', label: 'Recent (Default)' },
  { value: 'name-asc', label: 'Name (A-Z)' },
  { value: 'name-desc', label: 'Name (Z-A)' },
  { value: 'createdAt-asc', label: 'Created (Oldest first)' },
  { value: 'createdAt-desc', label: 'Created (Newest first)' },
] as const;

const SortSelect: React.FC = () => {
  const [sort, setSort] = useQueryState('sort', {
    defaultValue: 'updatedAt',
    shallow: false,
  });
  const [order, setOrder] = useQueryState('order', {
    defaultValue: 'desc',
    shallow: false,
  });
  const handleSortChange = (value: string) => {
    const [newSort, newOrder] = value.split('-');
    setSort(newSort);
    setOrder(newOrder);
  };
  return (
    <div className="flex items-center gap-2">
      <p className="text-[15px] font-semibold text-gray-800">Sort:</p>
      <Select value={`${sort}-${order}`} onValueChange={handleSortChange}>
        <SelectTrigger className="w-52 border-gray-400">
          <SelectValue placeholder="Select a sort order" />
        </SelectTrigger>
        <SelectContent>
          {SORT_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortSelect;
