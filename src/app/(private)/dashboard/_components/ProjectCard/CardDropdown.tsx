'use client';

import {
  LuArchive,
  LuEllipsisVertical,
  LuExternalLink,
  // LuPencil,
  LuTrash,
  LuUserRoundPlus,
} from 'react-icons/lu';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { deleteProject } from '../../actions';

const CardDropdown: React.FC<{ projectId: string }> = ({ projectId }) => {
  const options = [
    // {
    //   name: 'Rename',
    //   icon: <LuPencil />,
    //   callback: () => {},
    // },
    {
      name: 'Invite members',
      icon: <LuUserRoundPlus />,
      callback: () => {},
    },
    {
      name: 'Delete',
      icon: <LuTrash />,
      callback: deleteProject,
    },
    ///not sure about this option
    {
      name: 'Archive',
      icon: <LuArchive />,
      callback: () => {},
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-1 outline-none transition-colors">
        <LuEllipsisVertical />
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
