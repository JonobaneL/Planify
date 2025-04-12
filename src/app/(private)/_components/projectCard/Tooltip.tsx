import { TooltipProps } from 'recharts';
import {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent';

const Tooltip: React.FC<TooltipProps<ValueType, NameType>> = ({
  active,
  payload,
}) => {
  if (!active || !payload) return null;
  const tooltipPayload = payload[0].payload;
  const color = tooltipPayload.fill;
  return (
    <div className="flex items-center gap-4 rounded-md border bg-white px-2 py-1.5 shadow-md">
      <div className="flex items-center gap-2">
        <div className="size-3 rounded-sm" style={{ backgroundColor: color }} />
        <p className="text-sm font-medium">{tooltipPayload.status}</p>
      </div>
      <p className="text-sm text-gray-600">{tooltipPayload.tasks}</p>
    </div>
  );
};

export default Tooltip;
