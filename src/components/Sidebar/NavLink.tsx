'use client';

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
  exact?: boolean;
  textStyles?: string;
};
const NavLink = ({
  icon,
  title,
  link,
  exact = false,
  textStyles,
}: NavLinkProps) => {
  const { isOpen } = useSidebarContext();
  const path = usePathname();
  const isActive = exact ? path === link : path.startsWith(link);

  return (
    <Link href={link}>
      <TooltipProvider>
        <Tooltip delayDuration={300} disableHoverableContent={true}>
          <TooltipTrigger asChild>
            <div
              className={cn(
                `group flex h-9 items-center rounded-md transition-all duration-300 hover:bg-primary-15`,
                isOpen ? 'gap-2 px-3 py-1' : 'gap-0 px-[9px]',
                isActive ? 'bg-primary-30 hover:bg-primary-30' : '',
              )}
            >
              {icon}
              {isOpen && (
                <p
                  className={cn(
                    'truncate text-[15px] font-medium text-gray-700 transition-colors duration-75',
                    textStyles,
                  )}
                >
                  {title}
                </p>
              )}
            </div>
          </TooltipTrigger>
          {!isOpen && (
            <TooltipContent
              side="right"
              sideOffset={20}
              className="rounded-md bg-gradient-to-br from-primary-60 to-primary-80 shadow"
            >
              <p className="font-poppins text-sm">{title}</p>
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    </Link>
  );
};

export default NavLink;
