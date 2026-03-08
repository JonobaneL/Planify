import {
  LuBell,
  LuCircleHelp,
  LuSettings,
  LuUserRoundPlus,
} from 'react-icons/lu';

import ActionButton from './ActionButton';
import InviteUser from './InviteUser';
import UserBadge from './UserBadge';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex h-[60px] w-full items-center justify-between bg-gradient-to-br from-primary-60 to-primary-80 px-6 shadow-sm">
      <div className="flex items-center gap-6">
        <h1 className="text-2xl font-bold text-white">Planify</h1>
        <ActionButton />
      </div>

      <nav className="flex items-center gap-1">
        <button className="h-fit rounded p-1.5 hover:bg-primary-60">
          <LuBell size={20} className="text-white" />
        </button>
        <InviteUser>
          <button className="h-fit rounded p-1.5 hover:bg-primary-60">
            <LuUserRoundPlus size={20} className="text-white" />
          </button>
        </InviteUser>
        <button className="h-fit rounded p-1.5 hover:bg-primary-60">
          <LuSettings size={20} className="text-white" />
        </button>
        <button className="h-fit rounded p-1.5 hover:bg-primary-60">
          <LuCircleHelp size={20} className="text-white" />
        </button>
        <UserBadge />
      </nav>
    </header>
  );
};

export default Header;
