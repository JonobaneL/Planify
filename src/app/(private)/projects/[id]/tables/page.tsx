import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import BoardNav from '../_components/Nav/BoardNav';

const TablesPage = () => {
  return (
    <div>
      <div className="px-8">
        <BoardNav />
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger
            iconPosition="left"
            className="text-base data-[state=open]:text-primary"
            iconClassName="size-5 text-primary"
          >
            <div className="flex size-5 items-center justify-center rounded-full bg-primary text-sm text-white">
              4
            </div>
            <p>Features</p>
          </AccordionTrigger>
          <AccordionContent className="pt-2">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger
            iconPosition="left"
            className="text-base data-[state=open]:text-primary"
            iconClassName="size-5"
          >
            <div className="flex size-5 items-center justify-center rounded-full bg-primary text-sm text-white">
              4
            </div>
            <p>Bugs</p>
          </AccordionTrigger>
          <AccordionContent className="pt-2">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-none">
          <AccordionTrigger
            className="border-b text-base data-[state=open]:text-primary"
            iconPosition="left"
            iconClassName="size-5"
          >
            <div className="flex size-5 items-center justify-center rounded-full bg-primary text-sm text-white">
              0
            </div>
            <p>Task</p>
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
