import { PropsWithChildren } from 'react';

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type AccordionProps = {
  title: string;
  tasksLength: number;
  value: string;
};

const TaskAccordion: React.FC<PropsWithChildren<AccordionProps>> = ({
  title,
  tasksLength,
  value,
  children,
}) => {
  return (
    <AccordionItem value={value} className="border-none">
      <AccordionTrigger
        iconPosition="left"
        className="flex-0 w-fit py-3 pl-8 text-base data-[state=open]:text-primary"
        iconClassName="size-5 text-primary"
      >
        <div className="flex size-5 items-center justify-center rounded-full bg-primary-10 text-sm font-medium text-primary">
          {tasksLength}
        </div>
        <h3 className="font-poppins text-base font-medium capitalize">
          {title}
        </h3>
      </AccordionTrigger>
      <AccordionContent className="p-0 pb-2">
        <div className="shadow-sm">{children}</div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default TaskAccordion;
