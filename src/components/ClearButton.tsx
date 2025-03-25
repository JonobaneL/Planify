'use client';

import { LuX } from 'react-icons/lu';

type ButtonProps = {
  visible?: boolean;
  handler: () => void;
};

const ClearButton: React.FC<ButtonProps> = ({ handler, visible = true }) => {
  const clearHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    handler();
  };
  if (!visible) return null;
  return (
    <button
      onClick={clearHandler}
      className="rounded p-1 opacity-0 hover:bg-primary-10 group-hover:opacity-100"
    >
      <LuX size={14} />
    </button>
  );
};

export default ClearButton;
