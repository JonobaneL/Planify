import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import ClearButton from '@/components/ClearButton';
import Select from '@/components/StatusSelect';
import clientAxios from '@/lib/axiosClient';
import { cn } from '@/lib/utils';
import { StatusParams } from '@/types/status';

import { updateStatus } from '../../../_actions/status';

type SelectProps = {
  label?: string;
  value: StatusParams | null;
  column: string;
  cleanButton?: boolean;
  taskId: string;
  projectId: string;
};

const StatusSelect: React.FC<SelectProps> = ({
  label = 'Empty',
  value,
  column,
  cleanButton = false,
  taskId,
  projectId, //temporary
}) => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (statusId: string | null) =>
      updateStatus(statusId, `${column}Id`, taskId, projectId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['task', taskId],
      });
    },
  });
  const { data: statusesResponse } = useQuery({
    queryKey: ['status-options', column],
    queryFn: () => clientAxios.get(`/statuses?type=${column}`),
  });
  const options = statusesResponse?.data;

  return (
    <Select
      options={options ?? []}
      onValueChange={(status) => mutate(status.id)}
    >
      {!value ? (
        <button
          className={cn(
            'flex h-10 w-fit cursor-pointer items-center rounded-lg p-2 text-gray-600 hover:bg-primary-10',
            isPending && 'pointer-events-none animate-pulse',
          )}
        >
          {label}
        </button>
      ) : (
        <div
          className={cn(
            'group flex h-10 w-fit cursor-pointer items-center gap-2 rounded-lg p-2 hover:bg-primary-10',
            isPending && 'pointer-events-none animate-pulse',
          )}
        >
          <button className="flex items-center gap-2">
            <div
              className="size-4 rounded"
              style={{ backgroundColor: value?.color }}
            />
            <p className="text-sm">{value?.label}</p>
          </button>
          <ClearButton
            className="p-0"
            handler={() => mutate(null)}
            visible={cleanButton}
          />
        </div>
      )}
    </Select>
  );
};

export default StatusSelect;
