'use client';

import {
  LuArchive,
  LuEllipsisVertical,
  LuExternalLink,
  LuTrash,
  LuUserRoundPlus,
} from 'react-icons/lu';
import { toast } from 'sonner';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { archiveProject, deleteProject } from '../../actions';

const CardDropdown: React.FC<{ projectId: string }> = ({ projectId }) => {
  const options = [
    {
      name: 'Invite members',
      icon: <LuUserRoundPlus />,
      callback: () => {},
      disabled: true,
    },
    {
      name: 'Delete',
      icon: <LuTrash />,
      callback: (projectId: string) =>
        toast.promise(deleteProject(projectId), {
          loading: 'Deleting project...',
          success: 'Project deleted successfully',
          error: 'Failed to delete project',
        }),
    },
    {
      name: 'Archive',
      icon: <LuArchive />,
      callback: (projectId: string) =>
        toast.promise(archiveProject(projectId), {
          loading: 'Archiving project...',
          success: 'Project archived successfully',
          error: 'Failed to archive project',
        }),
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-1 outline-none transition-colors">
        <LuEllipsisVertical size={18} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[12rem] rounded-xl">
        <DropdownMenuItem
          className="gap-3 rounded-lg px-2.5 text-gray-700"
          onClick={() =>
            window.open(
              `/projects/${projectId}`,
              '_blank',
              'noopener,noreferrer',
            )
          }
        >
          <LuExternalLink />
          Open in new tab
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {options.map((option) => (
          <DropdownMenuItem
            key={option.name}
            className="gap-3 rounded-lg px-2.5 text-gray-700"
            onClick={() => option.callback(projectId)}
            disabled={option?.disabled}
          >
            {option.icon}
            {option.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CardDropdown;
