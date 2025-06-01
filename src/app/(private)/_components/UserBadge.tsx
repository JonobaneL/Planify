'use client';

import { useRouter } from 'next/navigation';
import { LuLogOut, LuSettings, LuUser } from 'react-icons/lu';

import Avatar from '@/components/Avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuthStore } from '@/stores/auth';

const OPTIONS = [
  {
    name: 'My Profile',
    icon: <LuUser className="text-primary" />,
  },
  {
    name: 'Settings',
    icon: <LuSettings className="text-primary" />,
  },
];

const UserBadge: React.FC = () => {
  const { first_name, last_name, logout } = useAuthStore();
  const router = useRouter();

  const logoutHandler = async () => {
    try {
      await logout();
      router.push('/log-in');
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Avatar
          name={`${first_name?.[0]}${last_name?.[0]}`}
          className="size-10"
          textStyles="text-lg font-semibold "
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={16} className="w-48">
        {OPTIONS.map((option) => (
          <DropdownMenuItem
            key={option.name}
            className="h-9 gap-3 font-medium text-gray-800 [&>svg]:size-[18px]"
          >
            {option.icon}
            <p>{option.name}</p>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="h-9 gap-3 font-medium text-gray-800 [&>svg]:size-[18px]"
          onClick={logoutHandler}
        >
          <LuLogOut className="text-primary" />
          <p>Log Out</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserBadge;
