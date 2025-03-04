'use client';
import Image from 'next/image';
import { LuChevronsUpDown } from 'react-icons/lu';
import { IoIosClose } from 'react-icons/io';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useState } from 'react';

const mockUsers = [
  {
    id: 'user1',
    name: 'John Doe',
    username: 'johndoe',
    avatar:
      'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 'user2',
    name: 'Any Christen',
    username: 'any_christen',
    avatar:
      'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 'user3',
    name: 'Mike Tyson',
    username: 'miketyson',
    avatar:
      'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 'user4',
    name: 'Sam Smith',
    username: 'samsmith',
    avatar:
      'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
] as const;
const AssigneeFilter = () => {
  //temporary approach
  const [users, setUsers] = useState(mockUsers);
  const [selected, setSelected] = useState<(typeof users)[]>([]);
  const removeUser = (user) => {
    setSelected((p) => p.filter((u) => user.id !== u.id));
    setUsers((p) => [...p, user]);
  };
  const handleClick = (user) => {
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
            <button className="hover:bg-primary-10 flex h-9 min-w-56 items-center justify-between gap-2 rounded border px-2.5 py-1 text-sm text-gray-400">
              <p>Select assignee</p>
              <LuChevronsUpDown className="text-gray-400" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="max-h-48 w-56 overflow-auto p-0">
            {users.map((user) => (
              <div
                key={user.id}
                className="hover:bg-primary-10 flex cursor-pointer items-center gap-2 px-2.5 py-1.5"
                onClick={() => handleClick(user)}
              >
                <Image
                  src={user.avatar}
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
