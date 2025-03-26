import { CellContext, ColumnDef } from '@tanstack/react-table';

import StatusCell from '../../projects/[id]/tables/_components/cells/StatusCell';

import { Checkbox } from '@/components/ui/checkbox';
import { mockPriorities } from '@/data/mock/priorities';
import { statuses } from '@/data/mock/statuses';
import { StatusParams } from '@/types/status';
import { TaskParams } from '@/types/task';

const DateCell: React.FC<CellContext<TaskParams, unknown>> = ({ getValue }) => {
  const date = getValue();
  if (!date) return null;
  const formattedDate = new Date(date as string).toDateString();
  return <div className="p-2">{formattedDate}</div>;
};

export const columnsDef = [
  {
    id: 'select',
    header: ({ table }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    size: 42,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: 'Title',
    size: '18rem',
    cell: ({ getValue }) => <div className="px-2">{getValue() as string}</div>,
  },
  {
    accessorKey: 'slug',
    header: 'Slug',
    size: 100,
    cell: ({ getValue }) => <div className="px-2">{getValue() as string}</div>,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: (props: CellContext<TaskParams, StatusParams>) => (
      <StatusCell {...props} options={statuses} />
    ),
  },
  {
    accessorKey: 'priority',
    header: 'Priority',
    cell: (props: CellContext<TaskParams, StatusParams | null>) => (
      <StatusCell {...props} options={mockPriorities} />
    ),
  },
  {
    accessorKey: 'due_date',
    header: 'Due Date',
    cell: (props) => <DateCell {...props} />,
  },
  {
    accessorKey: 'empty',
    header: '',
    size: '100%',
    cell: <div className="w-full" />,
  },
] as ColumnDef<TaskParams>[];
