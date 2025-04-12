'use client';
import { LuStar, LuTable } from 'react-icons/lu';
import { Bar, BarChart, CartesianGrid, TooltipProps } from 'recharts';
import {
  ValueType,
  NameType,
} from 'recharts/types/component/DefaultTooltipContent';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from '@/components/ui/chart';

const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (!active || !payload) return null;
  const tooltipPayload = payload[0].payload;
  const color = payload[0].fill;
  return (
    <div className="flex items-center gap-4 rounded border bg-white px-2 py-1.5 shadow-md">
      <div className="flex items-center gap-2">
        <div className="size-3 rounded" style={{ backgroundColor: color }} />
        <p className="text-sm font-medium">{tooltipPayload.status}</p>
      </div>
      <p className="text-sm text-gray-600">{tooltipPayload.tasks}</p>
    </div>
  );
};

const TestPage: React.FC = () => {
  const chartData = [
    { status: 'Not Started', tasks: 14 },
    { status: 'In Progress', tasks: 7 },
    { status: 'In Review', tasks: 8 },
    { status: 'In QA', tasks: 3 },
    { status: 'Done', tasks: 16 },
  ];
  const chartConfig = {
    tasks: {
      label: 'Tasks',
      color: '#255eda',
    },
  } satisfies ChartConfig;
  return (
    <div className="p-8">
      <div className="w-[320px] cursor-pointer rounded-md border shadow-sm transition-shadow duration-200 hover:shadow-md">
        <div className="p-4">
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} stroke="#e5e7eb" />
              <ChartTooltip cursor={false} content={<CustomTooltip />} />
              <Bar dataKey="tasks" fill="#255eda" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>
        <div className="align-center flex justify-between border-t p-3 px-4">
          <div className="flex items-center gap-2">
            <LuTable className="text-primary" size={16} />
            <p className="font-medium">Project 1</p>
          </div>
          <button>
            <LuStar className="text-primary" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
