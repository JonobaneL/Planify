import { Editor } from '@tiptap/react';
import { useRef, useState } from 'react';
import { LuLink2 } from 'react-icons/lu';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Toggle } from '../ui/toggle';

type ControlProps = {
  editor: Editor | null;
};

const LinkControl: React.FC<ControlProps> = ({ editor }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const pressed = editor?.isActive('link');
  const [open, setOpen] = useState(false);
  const changeHandler = (value: boolean) => {
    if (pressed && value) return;
    setOpen(value);
  };
  const handleSave = () => {
    if (!inputRef.current) return;
    editor?.commands.setLink({
      href: inputRef.current.value,
      target: '_blank',
    });
    setOpen(false);
  };

  if (!editor) return null;

  return (
    <Popover open={open} onOpenChange={changeHandler}>
      <PopoverTrigger asChild>
        <Toggle
          size="sm"
          title="Link"
          data-pressed={pressed}
          onClick={() => editor.commands.unsetLink()}
          className="data-[pressed=true]:bg-primary-10"
        >
          <LuLink2 />
        </Toggle>
      </PopoverTrigger>
      <PopoverContent className="flex max-w-[320px] gap-1 p-1" align="end">
        <Input ref={inputRef} type="url" className="h-9 px-2 py-1" />
        <Button size="sm" className="ml-auto mr-0 block" onClick={handleSave}>
          Save
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default LinkControl;
