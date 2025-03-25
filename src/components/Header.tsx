'use client';

import Image from 'next/image';
import {
  LuBell,
  LuCircleHelp,
  LuPlus,
  LuSettings,
  LuUserRoundPlus,
} from 'react-icons/lu';

import InviteUser from '@/components/InviteUser';

import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex h-[60px] w-full items-center justify-between border-b bg-white px-6 shadow-sm">
      {/* show this button only on project pages */}
      <Button className="h-fit rounded-full" variant="outline">
        <LuPlus />
        New Task
      </Button>
      <nav className="flex items-center gap-1">
        <button className="h-fit rounded p-1.5 hover:bg-gray-100">
          <LuBell size={20} className="text-primary" />
        </button>
        <InviteUser>
          <button className="h-fit rounded p-1.5 hover:bg-gray-100">
            <LuUserRoundPlus size={20} className="text-primary" />
          </button>
        </InviteUser>
        <button className="h-fit rounded p-1.5 hover:bg-gray-100">
          <LuSettings size={20} className="text-primary" />
        </button>
        <button className="h-fit rounded p-1.5 hover:bg-gray-100">
          <LuCircleHelp size={20} className="text-primary" />
        </button>
        <div className="pl-1.5">
          <Image src="/profile.svg" alt="avatar" width={40} height={40} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
