import { flexRender, Row } from '@tanstack/react-table';

import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { TaskParams } from '@/types/task';

type RowsProps = {
  rows: Row<TaskParams>[];
};

const TableRows: React.FC<RowsProps> = ({ rows }) => {
  return (
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
  );
};

export default TableRows;
