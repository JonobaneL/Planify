import { useState } from 'react';

import { Input } from '@/components/ui/input';
import { SheetTitle } from '@/components/ui/sheet';

type TitleProps = {
  title: string;
};

const TaskTitle: React.FC<TitleProps> = ({ title }) => {
  const [newTitle, setTitle] = useState(title);
  const [edit, setEdit] = useState(false);
  return (
    <div className="pt-2">
      {!edit ? (
        <SheetTitle
          onClick={() => setEdit(true)}
          className="rounded border border-transparent px-0.5 py-[3px] text-xl font-medium hover:border-gray-300"
        >
          {newTitle}
        </SheetTitle>
      ) : (
        <Input
          autoFocus
          onBlur={() => setEdit(false)}
          className="h-9 px-2 py-0 !text-lg font-medium"
          value={newTitle}
          onChange={(e) => setTitle(e.target.value)}
        />
      )}
    </div>
  );
};

export default TaskTitle;
