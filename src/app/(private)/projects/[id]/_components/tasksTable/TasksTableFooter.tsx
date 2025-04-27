import { useRef } from 'react';

import { Checkbox } from '@/components/ui/checkbox';
import { TableCell, TableFooter, TableRow } from '@/components/ui/table';

type FooterProps = {
  colSpan: number;
};

const TasksTableFooter: React.FC<FooterProps> = ({ colSpan }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusHandler = () => {
    console.log('check');
    inputRef.current?.focus();
  };
  return (
    <TableFooter className="border-b">
      <TableRow className="group divide-x bg-white" onClick={focusHandler}>
        <TableCell className="h-11 p-0">
          <div className="flex h-full items-center justify-center pl-8">
            <Checkbox disabled className="disabled:border-gray-500" />
          </div>
        </TableCell>
        <TableCell colSpan={colSpan - 1} className="h-11 p-0">
          <div className="h-full w-[20rem] px-2 py-1">
            <input
              ref={inputRef}
              type="text"
              className="h-full w-full rounded border border-transparent bg-transparent pl-2 font-normal outline-none ring-0 transition-colors duration-100 focus:border-gray-300 focus:bg-white group-hover:border-gray-300"
              placeholder="+ Add Task"
            />
          </div>
        </TableCell>
      </TableRow>
    </TableFooter>
  );
};

export default TasksTableFooter;
