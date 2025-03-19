import { CellContext, ColumnDef } from '@tanstack/react-table';
import { LuEllipsisVertical } from 'react-icons/lu';

import DateCell from '../cells/DateCell';
import StatusCell from '../cells/StatusCell';
import TitleCell from '../cells/TitleCell';

import { Checkbox } from '@/components/ui/checkbox';
import { mockPriorities } from '@/data/mock/mockPriorities';
import { statuses } from '@/data/mock/mockStatuses';
import { StatusParams } from '@/types/status';
import { TaskParams } from '@/types/task';

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
    header: () => <div className="px-2">Title</div>,
    size: '20rem',
    cell: (props: CellContext<TaskParams, string>) => <TitleCell {...props} />,
  },
  {
    accessorKey: 'slug',
    header: () => <div className="px-2">Slug</div>,
    size: 100,
    cell: ({ getValue }) => <div className="px-2">{getValue() as string}</div>,
  },
  {
    accessorKey: 'status',
    header: () => <div className="px-2">Status</div>,
    cell: (props: CellContext<TaskParams, StatusParams>) => (
      <StatusCell {...props} options={statuses} />
    ),
  },
  {
    accessorKey: 'priority',
    header: () => <div className="px-2">Priority</div>,
    cell: (props: CellContext<TaskParams, StatusParams | null>) => (
      <StatusCell {...props} options={mockPriorities} cleanButton={true} />
    ),
  },
  {
    accessorKey: 'due_date',
    header: () => <div className="px-2">Due Date</div>,
    cell: (props: CellContext<TaskParams, string | null>) => (
      <DateCell {...props} />
    ),
  },
  {
    accessorKey: 'assigned_user',
    header: () => <div className="px-2">Assignee</div>,
    cell: () => <div></div>,
    size: 200,
  },

  {
    accessorKey: 'empty',
    header: (
      <div className="flex w-full justify-end px-2">
        <button className="cursor-pointer p-0.5">
          <LuEllipsisVertical size={16} className="text-primary" />
        </button>
      </div>
    ),
    size: '100%',
    cell: <div className="w-full" />,
  },
] as ColumnDef<TaskParams>[];
