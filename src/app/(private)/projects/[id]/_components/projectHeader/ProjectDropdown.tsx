import {
  LuArchive,
  LuEllipsisVertical,
  LuFileDown,
  LuFileText,
  LuRefreshCw,
  LuSettings,
  LuTrash,
  LuTrendingUp,
} from 'react-icons/lu';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const first_options = [
  {
    name: 'Create sprint',
    icon: <LuRefreshCw />,
  },
  {
    name: 'Activity log',
    icon: <LuTrendingUp />,
  },
];

const second_options = [
  {
    name: 'Settings',
    icon: <LuSettings />,
  },
  {
    name: 'Build a report',
    icon: <LuFileText />,
  },
  {
    name: 'Export project to Excel',
    icon: <LuFileDown />,
  },
];

const third_options = [
  {
    name: 'Archive project',
    icon: <LuArchive />,
  },
  {
    name: 'Delete project',
    icon: <LuTrash />,
  },
];

const ProjectDropdown: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <LuEllipsisVertical size={18} className="text-primary" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="rounded-xl"
        sideOffset={8}
        alignOffset={8}
      >
        {first_options.map((option) => (
          <DropdownMenuItem
            key={option.name}
            className="gap-3 rounded-lg px-3 text-gray-700 focus:text-primary"
          >
            {option.icon}
            <span>{option.name}</span>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        {second_options.map((option) => (
          <DropdownMenuItem
            key={option.name}
            className="gap-3 rounded-lg px-3 text-gray-700 focus:text-primary"
          >
            {option.icon}
            <span>{option.name}</span>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        {third_options.map((option) => (
          <DropdownMenuItem
            key={option.name}
            className="gap-3 rounded-lg px-3 text-gray-700 focus:text-primary"
          >
            {option.icon}
            <span>{option.name}</span>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          key="trash"
          className="gap-3 rounded-lg px-3 text-gray-700 focus:text-primary"
        >
          <LuTrash />
          <span>Trash</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProjectDropdown;
