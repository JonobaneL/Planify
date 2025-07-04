'use client';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { TaskParams } from '@/types/task';

import { columnsDef } from './columnsDef';
import TasksTableFooter from './TasksTableFooter';
import { useTableStore } from '../../store';

type TableProps = {
  tasks: TaskParams[];
};

const TasksTable: React.FC<TableProps> = ({ tasks }) => {
  const columnVisibility = useTableStore((state) => state.columnVisibility);
  const table = useReactTable({
    data: tasks,
    columns: columnsDef,
    state: {
      columnVisibility,
    },
    getCoreRowModel: getCoreRowModel(),
  });
  const headers = table.getHeaderGroups();
  const { rows } = table.getCoreRowModel();
  return (
    <Table className="w-full table-fixed">
      <TableHeader>
        {headers.map((headerGroup) => (
          <TableRow
            key={headerGroup.id}
            className="divide-x-0 hover:bg-inherit"
          >
            {headerGroup.headers.map((header) => (
              <TableHead
                key={header.id}
                className="h-11 w-fit min-w-0 whitespace-nowrap p-0"
                style={{ width: header.column.columnDef.size }}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
            className="divide-x data-[state=selected]:bg-primary-5"
            data-state={row.getIsSelected() && 'selected'}
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell
                key={cell.id}
                className="h-11 w-fit min-w-0 whitespace-nowrap p-0"
                style={{ minWidth: cell.column.columnDef.size }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
      <TasksTableFooter colSpan={headers[0].headers.length} />
    </Table>
  );
};

export default TasksTable;
