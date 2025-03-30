import { LuEllipsis } from 'react-icons/lu';

import { additionalControls } from './utils/constants';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const AdditionalControls: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex size-8 items-center justify-center rounded text-primary hover:bg-primary-10">
          <LuEllipsis />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        {additionalControls.map((control, i) => (
          <DropdownMenuItem key={i} className="hover:bg-primary-10">
            <div className="flex items-center gap-2">
              <span className="text-primary">{control.icon}</span>
              {control.title}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AdditionalControls;
