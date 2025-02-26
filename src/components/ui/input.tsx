import * as React from 'react';

import { cn } from '@/lib/utils';

interface InputProps extends React.ComponentProps<'input'> {
  icon?: React.ReactNode;
  iconSide?: 'left' | 'right';
  errorMessage?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, icon, iconSide = 'left', errorMessage, ...props },
    ref,
  ) => {
    return (
      <div className="w-full">
        <div className="relative flex w-full items-center">
          <input
            type={type}
            className={cn(
              'flex h-9 w-full rounded border border-neutral-200 bg-transparent px-3 py-1 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-b disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 md:text-sm',
              className,
              icon && iconSide === 'left' && 'pl-10',
              icon && iconSide === 'right' && 'pr-10',
            )}
            ref={ref}
            {...props}
          />
          {icon && (
            <div
              className={cn(
                'absolute',
                iconSide === 'left' ? 'left-3' : 'right-3',
              )}
            >
              {icon}
            </div>
          )}
        </div>
        {errorMessage && (
          <p className="ml-2 mt-1 text-sm text-red-600">{errorMessage}</p>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
