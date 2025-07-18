'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b', className)}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  iconPosition?: 'left' | 'right';
  iconClassName?: string;
  underline?: boolean;
}

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(
  (
    {
      className,
      children,
      iconClassName,
      iconPosition,
      underline = true,
      ...props
    },
    ref,
  ) => (
    <AccordionPrimitive.Header className={cn('flex', underline && 'border-b')}>
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          'flex flex-1 items-center justify-between py-4 text-left text-sm font-medium transition-all [&[data-state=open]>svg]:rotate-180',
          'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
          iconPosition === 'left' && 'flex-row-reverse justify-end gap-2',
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDown
          className={cn(
            'h-4 w-4 shrink-0 text-neutral-500 transition-transform duration-200 dark:text-neutral-400',
            iconClassName,
          )}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  ),
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
