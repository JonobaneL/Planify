'use client';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import {
  Table as TableT,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { TaskParams } from '@/types/task';

import { columnsDef } from './columnsDef';
import TableRows from './TableRows';
import TasksTableFooter from './TasksTableFooter';
import { useTableStore } from '../../store';

type TableProps = {
  tasks: TaskParams[];
};

const Table: React.FC<TableProps> = ({ tasks }) => {
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
    <TableT className="w-full table-fixed">
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
      <TableRows rows={rows} />
      <TasksTableFooter colSpan={headers[0].headers.length} />
    </TableT>
  );
};

export default Table;
