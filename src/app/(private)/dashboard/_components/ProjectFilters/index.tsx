'use client';

import { useQueryState } from 'nuqs';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

import SortSelect from './SortSelect';
const VIEW_OPTIONS = [
  { value: 'all', label: 'All Projects' },
  { value: 'favorite', label: 'Favorite' },
  { value: 'archived', label: 'Archived' },
] as const;

const ProjectsFilters: React.FC = () => {
  const [view, setView] = useQueryState('view', {
    defaultValue: 'all',
    shallow: false,
  });

  return (
    <div className="flex items-center justify-between">
      <div>
        <ToggleGroup
          type="single"
          value={view}
          onValueChange={setView}
          size="sm"
          variant="outline"
          className="gap-1.5"
        >
          {VIEW_OPTIONS.map((option) => (
            <ToggleGroupItem
              key={option.value}
              value={option.value}
              className="rounded-lg border-gray-300 !bg-transparent px-3 text-[15px] !text-gray-800 shadow-none aria-checked:border-primary"
            >
              {option.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      <SortSelect />
    </div>
  );
};

export default ProjectsFilters;
