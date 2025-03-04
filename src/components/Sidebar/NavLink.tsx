import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useSidebarContext } from '@/context/SidebarProvider';
import { cn } from '@/lib/utils';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

type NavLinkProps = {
  icon: React.ReactNode;
  title: string;
  link: string;
  activeState?: boolean;
};
const NavLink = ({ icon, title, link, activeState = false }: NavLinkProps) => {
  const { isOpen } = useSidebarContext();
  const path = usePathname();
  const isActive = path.includes(link);
  const getStyles = () => {
    if (isOpen) {
      return 'gap-2 px-2 py-1';
    }
    return 'gap-0 p-1 justify-center size-9';
  };
  const styles = getStyles();
  return (
    <Link href={link} className={isOpen ? 'w-full' : 'w-fit'}>
      <TooltipProvider>
        <Tooltip delayDuration={300} disableHoverableContent={true}>
          <TooltipTrigger asChild>
            <div
              className={cn(
                `text-primary hover:bg-primary group flex items-center rounded transition-colors duration-75 hover:text-white ${isActive && activeState ? 'bg-primary text-white' : ''}`,
                styles,
              )}
            >
              {icon}
              {isOpen && (
                <p
                  className={`text-primary transition-colors duration-75 group-hover:text-white ${isActive && activeState ? 'text-white' : ''}`}
                >
                  {title}
                </p>
              )}
            </div>
          </TooltipTrigger>
          {!isOpen && (
            <TooltipContent side="right" className="bg-primary rounded shadow">
              <p className="font-geist">{title}</p>
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    </Link>
  );
};

export default NavLink;
