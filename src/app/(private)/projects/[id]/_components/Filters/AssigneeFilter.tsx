'use client';
import Image from 'next/image';
import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { LuChevronsUpDown } from 'react-icons/lu';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { usersMock } from '@/data/mock/users';
import { User } from '@/types/user';

const AssigneeFilter = () => {
  //temporary approach
  const [users, setUsers] = useState(usersMock);
  const [selected, setSelected] = useState<User[]>([]);
  const removeUser = (user: User) => {
    setSelected((p) => p.filter((u) => user.id !== u.id));
    setUsers((p) => [...p, user]);
  };
  const handleClick = (user: User) => {
    setSelected((p) => [...p, user]);
    setUsers((p) => p.filter((u) => u.id !== user.id));
  };
  return (
    <div className="min-w-32">
      <h4 className="mb-1 text-sm font-medium text-slate-400">Assignee</h4>
      <div>
        {selected.length ? (
          <div className="mb-2 flex max-w-44 flex-wrap gap-1">
            {selected.map((user) => (
              <div
                key={user.id}
                className="flex w-fit items-center gap-1.5 rounded-sm border px-2 py-1 text-sm"
              >
                <p>{user.username}</p>
                <IoIosClose
                  size={18}
                  className="cursor-pointer"
                  onClick={() => removeUser(user)}
                />
              </div>
            ))}
          </div>
        ) : null}

        <Popover>
          <PopoverTrigger asChild>
            <button className="flex h-9 min-w-56 items-center justify-between gap-2 rounded border px-2.5 py-1 text-sm text-gray-400 hover:bg-primary-10">
              <p>Select assignee</p>
              <LuChevronsUpDown className="text-gray-400" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="max-h-48 w-56 overflow-auto p-0">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex cursor-pointer items-center gap-2 px-2.5 py-1.5 hover:bg-primary-10"
                onClick={() => handleClick(user)}
              >
                <Image
                  src={user.avatar || ''}
                  alt={user.username}
                  width={24}
                  height={24}
                  className="size-6 rounded-sm"
                />
                <p className="text-sm">{user.username}</p>
              </div>
            ))}
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
export default AssigneeFilter;
