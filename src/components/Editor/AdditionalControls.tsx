import { Editor } from '@tiptap/react';
import { LuEllipsis } from 'react-icons/lu';

import { cn } from '@/lib/utils';

import { getAdditionalControls } from './utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

type ControlsProps = {
  editor: Editor | null;
};

const AdditionalControls: React.FC<ControlsProps> = ({ editor }) => {
  const controls = getAdditionalControls(editor);
  if (!editor) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex size-8 items-center justify-center rounded text-primary hover:bg-primary-10">
          <LuEllipsis />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        {controls.map((control, i) => (
          <DropdownMenuItem
            key={i}
            className={cn(
              'hover:bg-primary-10 focus:bg-primary-10',
              control.active && 'bg-primary-10',
            )}
            onClick={control.onClick}
          >
            <div className="flex items-center gap-2">
              <span className="text-primary">{control.icon}</span>
              {control.title}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AdditionalControls;
