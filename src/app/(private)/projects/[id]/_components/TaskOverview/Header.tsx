import { LuX } from 'react-icons/lu';

import { SheetClose } from '@/components/ui/sheet';
import { TaskParams } from '@/types/task';

type HeaderProps = {
  task: TaskParams;
};

const Header: React.FC<HeaderProps> = ({ task }) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-8">
        <p className="text-sm">{task.id}</p>
        <p className="text-sm">
          Created by{' '}
          <span className="cursor-pointer text-primary">johndoe</span> 15 min
          ago
        </p>
        <p className="text-sm">
          Updated by{' '}
          <span className="cursor-pointer text-primary">johndoe</span> 15 min
          ago
        </p>
      </div>
      <SheetClose>
        <LuX
          className="text-gray-500 transition-colors hover:text-gray-950"
          size={20}
        />
        <span className="sr-only">Close</span>
      </SheetClose>
    </div>
  );
};

export default Header;
