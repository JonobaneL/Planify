'use client';

import Image from 'next/image';
import {
  LuBell,
  LuCircleHelp,
  LuSettings,
  LuUserRoundPlus,
} from 'react-icons/lu';

import InviteUser from '@/app/(private)/_components/InviteUser';
import { useSidebarContext } from '@/context/SidebarProvider';

const Header = () => {
  const { isOpen } = useSidebarContext();
  return (
    <header className="flex h-14 w-full items-center justify-between border-b bg-p-background pr-6 shadow-sm">
      <div
        className={`${
          isOpen ? 'w-60' : 'w-16'
        } flex h-full items-center justify-center border-r shadow-sm`}
      >
        <p className="text-primary text-2xl font-semibold">
          {isOpen ? 'Planify' : 'P'}
        </p>
      </div>
      <nav className="flex gap-1">
        <div className="rounded p-1.5 hover:bg-gray-100">
          <LuBell size={20} className="text-primary" />
        </div>
        <InviteUser>
          <button className="rounded p-1.5 hover:bg-gray-100">
            <LuUserRoundPlus size={20} className="text-primary" />
          </button>
        </InviteUser>
        <div className="rounded p-1.5 hover:bg-gray-100">
          <LuSettings size={20} className="text-primary" />
        </div>
        <div className="rounded p-1.5 hover:bg-gray-100">
          <LuCircleHelp size={20} className="text-primary" />
        </div>
        <div className="pl-1.5">
          <Image src="/profile.svg" alt="avatar" width={32} height={32} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
