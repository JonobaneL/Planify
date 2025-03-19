'use client';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';

import { columnsDef } from './columnsDef';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { TaskParams } from '@/types/task';

type TableProps = {
  tasks: TaskParams[];
};

const TasksTable: React.FC<TableProps> = ({ tasks }) => {
  const [nTasks] = useState<TaskParams[]>(tasks);
  const table = useReactTable({
    data: nTasks,
    columns: columnsDef,
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
                className="h-10 w-fit min-w-0 whitespace-nowrap p-0"
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
            className="data-[state=selected]:bg-primary-5 divide-x"
            data-state={row.getIsSelected() && 'selected'}
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell
                key={cell.id}
                className="h-11 w-fit min-w-0 whitespace-nowrap p-0"
                style={{ width: cell.column.columnDef.size }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TasksTable;
