import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { mockTasks } from '@/data/mock/mockTasks';

import BoardNav from '../_components/Nav/BoardNav';

import TasksTable from './_components/tasksTable';

const TablesPage = () => {
  return (
    <div>
      <div className="px-8">
        <BoardNav />
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger
            iconPosition="left"
            className="py-3 text-base data-[state=open]:text-primary"
            iconClassName="size-5 text-primary"
          >
            <div className="flex size-5 items-center justify-center rounded-full bg-primary-10 text-sm text-primary">
              7
            </div>
            <p>Features</p>
          </AccordionTrigger>
          <AccordionContent>
            <TasksTable tasks={mockTasks} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger
            iconPosition="left"
            className="text-base data-[state=open]:text-primary"
            iconClassName="size-5"
          >
            <div className="flex size-5 items-center justify-center rounded-full bg-primary-10 text-sm text-primary">
              4
            </div>
            <p>Bugs</p>
          </AccordionTrigger>
          <AccordionContent className="pt-2">
            <TasksTable tasks={mockTasks} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-none">
          <AccordionTrigger
            className="border-b text-base data-[state=open]:text-primary"
            iconPosition="left"
            iconClassName="size-5"
          >
            <div className="flex size-5 items-center justify-center rounded-full bg-primary-10 text-sm text-primary">
              0
            </div>
            <p>Tasks</p>
          </AccordionTrigger>
          <AccordionContent className="pt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            suscipit! Ut ipsa cum ducimus eveniet aliquid optio nobis eius
            similique maiores in, dolorem perspiciatis nesciunt eaque
            perferendis magnam quod exercitationem.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default TablesPage;
