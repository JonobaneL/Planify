import { useEffect, useState } from 'react';
import { LuFileText, LuPencil } from 'react-icons/lu';

import Editor from '@/components/Editor';
import EditorControls from '@/components/Editor/EditorControls';
import { useEditor } from '@/components/Editor/useEditor';
import { Button } from '@/components/ui/button';

const TaskDescription: React.FC = () => {
  const [edit, setEdit] = useState(false);
  const [description, setDescription] = useState('');
  const editor = useEditor(description, setDescription, {
    autoFocus: true,
    placeholder: 'Type or paste description here',
  });
  useEffect(() => {
    if (edit && editor) {
      editor.commands.focus();
    }
  }, [edit, editor]);
  return (
    <div className="group flex flex-1 flex-col space-y-4 p-6">
      <div className="flex h-9 items-center justify-between">
        <div className="flex items-center gap-2">
          <LuFileText size={16} className="text-primary" />
          <p className="font-medium text-gray-600">Description</p>
        </div>
        {!edit && description && (
          <Button
            variant="ghost"
            size="sm"
            className="invisible w-9 opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100"
            onClick={() => setEdit(true)}
          >
            <LuPencil size={14} className="text-primary" />
          </Button>
        )}
        {edit && <EditorControls editor={editor} />}
      </div>
      {edit ? (
        <div className="relative flex-1 pb-10">
          <Editor editor={editor} />
          <div className="absolute bottom-0 left-0 right-0 flex justify-end gap-2 bg-white">
            <Button
              size="sm"
              variant="ghost"
              className="rounded-md px-3"
              onClick={() => setEdit(false)}
            >
              Cancel
            </Button>
            <Button
              size="sm"
              className="rounded-md px-3"
              onClick={() => setEdit(false)}
            >
              Save
            </Button>
          </div>
        </div>
      ) : description ? (
        <div
          className="text-sm"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      ) : (
        <p className="text-sm text-gray-400" onClick={() => setEdit(true)}>
          This task doesn&apos;t have a description yet. To add one, click here.
        </p>
      )}
    </div>
  );
};

export default TaskDescription;
