import { useMutation, useQueryClient } from '@tanstack/react-query';

import ClearButton from '@/components/ClearButton';
import DateSelectC from '@/components/DateSelect';
import { cn } from '@/lib/utils';
import { formatDate } from '@/utils/dateFormatting';

import { updateTask } from '../../../_actions/task';

type SelectProps = {
  value: string | null;
  taskId: string;
  projectId: string;
};

const DateSelect: React.FC<SelectProps> = ({ value, taskId, projectId }) => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (date: string | null) =>
      updateTask(taskId, projectId, {
        dueDate: date,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['task', taskId],
      });
    },
  });

  return (
    <DateSelectC
      value={value ? new Date(value) : undefined}
      onValueChange={(date) => mutate(date?.toISOString() ?? null)}
    >
      {!value ? (
        <button
          className={cn(
            'flex h-10 w-fit cursor-pointer items-center rounded-lg p-2 text-gray-500 hover:bg-primary-10',
            isPending && 'pointer-events-none animate-pulse',
          )}
        >
          No due date
        </button>
      ) : (
        <div
          className={cn(
            'group flex h-10 w-fit cursor-pointer items-center gap-2 rounded-lg p-2 hover:bg-primary-10',
            isPending && 'pointer-events-none animate-pulse',
          )}
        >
          <p>{formatDate(new Date(value))}</p>
          <ClearButton className="p-0" handler={() => mutate(null)} />
        </div>
      )}
    </DateSelectC>
  );
};

export default DateSelect;
