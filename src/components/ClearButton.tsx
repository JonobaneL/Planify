'use client';

import { LuX } from 'react-icons/lu';

import { cn } from '@/lib/utils';

type ButtonProps = {
  visible?: boolean;
  handler: () => void;
  className?: string;
};

const ClearButton: React.FC<ButtonProps> = ({
  handler,
  visible = true,
  className,
}) => {
  const clearHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    handler();
  };
  if (!visible) return null;
  return (
    <button
      onClick={clearHandler}
      className={cn(
        'rounded p-1 opacity-0 hover:bg-primary-10 group-hover:opacity-100',
        className,
      )}
    >
      <LuX size={14} />
    </button>
  );
};

export default ClearButton;
