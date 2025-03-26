import Image from 'next/image';
import { useState } from 'react';
import { LuUserPlus } from 'react-icons/lu';

import ClearButton from '@/components/ClearButton';
import ComboSelect from '@/components/ComboSelect';
import { usersMock } from '@/data/mock/users';
import { User } from '@/types/user';

const AssigneeCell: React.FC = () => {
  //temporary state
  const [user, setUser] = useState<User | null>(null);
  return (
    <ComboSelect
      options={usersMock}
      onValueChange={setUser}
      valueField="username"
      placeholder="Search assignee..."
      emptyMessage="No assignee found."
    >
      {!user ? (
        <div className="h-full p-1">
          <button className="flex h-full w-full items-center justify-center rounded-sm opacity-0 transition-all duration-150 hover:border hover:opacity-100">
            <LuUserPlus className="text-primary" size={16} />
          </button>
        </div>
      ) : (
        <div className="group flex h-full cursor-pointer items-center justify-between px-2">
          <div className="flex items-center gap-2">
            <Image
              src={user.avatar!}
              alt="avatar"
              className="rounded-full"
              width={25}
              height={25}
            />
            <p>{user.username}</p>
          </div>
          <ClearButton handler={() => setUser(null)} />
        </div>
      )}
    </ComboSelect>
  );
};

export default AssigneeCell;
