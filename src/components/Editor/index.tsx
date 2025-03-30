'use client';

import { Editor as EditorType, EditorContent } from '@tiptap/react';

type EditorProps = {
  editor: EditorType | null;
};
const Editor: React.FC<EditorProps> = ({ editor }) => {
  if (!editor) return null;

  return <EditorContent editor={editor} autoFocus={true} />;
};

export default Editor;
