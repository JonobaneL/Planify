import { PopoverClose } from '@radix-ui/react-popover';
import { Editor } from '@tiptap/react';
import { LuCheck, LuHighlighter } from 'react-icons/lu';

import { highlightColors } from './utils/constants';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

type SelectProps = {
  editor: Editor | null;
};

const HighlightSelect: React.FC<SelectProps> = ({ editor }) => {
  if (!editor) return null;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex size-8 items-center justify-center rounded text-primary hover:bg-primary-10">
          <LuHighlighter />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="grid max-w-fit grid-cols-5 gap-1 p-1.5"
      >
        {highlightColors.map((color, i) => {
          const active = editor.isActive('highlight', { color });
          return (
            <PopoverClose asChild key={i}>
              <button
                className="flex size-5 items-center justify-center rounded text-primary hover:bg-primary-10"
                style={{ backgroundColor: color }}
                onClick={() => editor.commands.toggleHighlight({ color })}
              >
                {active && <LuCheck />}
              </button>
            </PopoverClose>
          );
        })}
      </PopoverContent>
    </Popover>
  );
};

export default HighlightSelect;
