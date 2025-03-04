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
      return 'gap-2 px-3 py-1';
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
                `group flex h-9 items-center rounded text-white transition-colors duration-75 hover:bg-white/10 hover:text-white`,
                styles,
                isActive && activeState ? 'text-white' : 'text-white/70',
              )}
            >
              {icon}
              {isOpen && (
                <p
                  className={cn(
                    'text-white/70 transition-colors duration-75 group-hover:text-white',
                    isActive && activeState ? 'text-white' : 'text-white/70',
                  )}
                >
                  {title}
                </p>
              )}
            </div>
          </TooltipTrigger>
          {!isOpen && (
            <TooltipContent side="right" className="rounded bg-primary shadow">
              <p className="font-geist">{title}</p>
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    </Link>
  );
};

export default NavLink;
