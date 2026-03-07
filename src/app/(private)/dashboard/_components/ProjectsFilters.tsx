import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
const VIEW_OPTIONS = [
  { value: 'all', label: 'All Projects' },
  { value: 'favorite', label: 'Favorite' },
  { value: 'archived', label: 'Archived' },
] as const;

const ProjectsFilters: React.FC = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <ToggleGroup
          type="single"
          defaultValue="all"
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
      <div className="flex items-center gap-2">
        <p className="text-[15px] font-semibold text-gray-800">Sort:</p>
        <Select defaultValue="recent">
          <SelectTrigger className="w-52 border-gray-400">
            <SelectValue placeholder="Select a sort order" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Recent (Default)</SelectItem>
            <SelectItem value="name-asc">Name (A-Z)</SelectItem>
            <SelectItem value="name-desc">Name (Z-A)</SelectItem>
            <SelectItem value="created-asc">Created (Oldest first)</SelectItem>
            <SelectItem value="created-desc">Created (Newest first)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ProjectsFilters;
