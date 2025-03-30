import { Editor } from '@tiptap/react';
import {
  LuBold,
  LuItalic,
  LuList,
  LuListOrdered,
  LuUnderline,
} from 'react-icons/lu';

export const getControls = (editor: Editor | null) => {
  if (!editor) return [];
  return [
    {
      icon: <LuBold />,
      value: 'bold',
      tooltip: 'Bold',
      onClick: () => editor.chain().focus().toggleBold().run(),
      pressed: editor.isActive('bold'),
    },
    {
      icon: <LuItalic />,
      value: 'italic',
      tooltip: 'Italic',
      onClick: () => editor.chain().focus().toggleItalic().run(),
      pressed: editor.isActive('italic'),
    },
    {
      icon: <LuUnderline />,
      value: 'underline',
      tooltip: 'Underline',
      onClick: () => editor.chain().focus().toggleUnderline().run(),
      pressed: editor.isActive('underline'),
    },
    {
      icon: <LuList />,
      value: 'bulleted-list',
      tooltip: 'Bulleted List',
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      pressed: editor.isActive('bulletList'),
    },
    {
      icon: <LuListOrdered />,
      value: 'numbered-list',
      tooltip: 'Numbered List',
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      pressed: editor.isActive('orderedList'),
    },
  ];
};
