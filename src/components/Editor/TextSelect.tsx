import { Level } from '@tiptap/extension-heading';
import { Editor } from '@tiptap/react';
import { useCallback } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { textControls } from './utils/constants';

type SelectProps = {
  editor: Editor | null;
};
const TextSelect: React.FC<SelectProps> = ({ editor }) => {
  const getValue = useCallback(() => {
    return [1, 2, 3].reduce((acc, level) => {
      if (editor?.isActive('heading', { level })) {
        return String(level);
      }
      return acc;
    }, 'p');
  }, [editor]);

  const value = getValue();

  const changeHandler = (value: string) => {
    if (value === 'p') {
      editor?.chain().focus().setParagraph().run();
      return;
    }

    editor
      ?.chain()
      .focus()
      .toggleHeading({ level: Number(value) as Level })
      .run();
  };

  if (!editor) return null;

  return (
    <Select defaultValue="p" value={value} onValueChange={changeHandler}>
      <SelectTrigger className="w-[120px] rounded-none border-none p-0 text-neutral-600 shadow-none !ring-0">
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end">
        {textControls.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="text-neutral-600"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default TextSelect;
