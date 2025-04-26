'use client';

import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { LuChevronsUpDown } from 'react-icons/lu';

import ClearButton from '@/components/ClearButton';
import ComboSelect from '@/components/ComboSelect';
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
  const handleClick = (user: User | null) => {
    if (!user) return;
    setSelected((p) => [...p, user]);
    setUsers((p) => p.filter((u) => u.id !== user.id));
  };
  const clearHandler = () => {
    setSelected([]);
    setUsers(usersMock);
  };
  return (
    <div className="min-w-32">
      <div className="mb-1.5 flex min-h-6 items-center justify-between">
        <h4 className="text-sm font-medium text-gray-500">Assignee</h4>
        <ClearButton
          handler={clearHandler}
          asParent
          visible={!!selected.length}
        />
      </div>
      <div>
        {selected.length ? (
          <div className="mb-2 flex max-w-44 flex-wrap gap-1">
            {selected.map((user) => (
              <div
                key={user.id}
                className="flex h-8 w-fit items-center gap-1.5 rounded border py-1 pl-2.5 pr-1.5 text-sm"
              >
                <p>{user.username}</p>
                <IoIosClose
                  size={20}
                  className="cursor-pointer text-gray-500"
                  onClick={() => removeUser(user)}
                />
              </div>
            ))}
          </div>
        ) : null}

        <ComboSelect
          options={users}
          onValueChange={handleClick}
          valueField="username"
          placeholder="Search assignee..."
          emptyMessage="No assignee found."
        >
          <div className="flex h-10 w-[220px] cursor-pointer items-center justify-between gap-2 rounded border p-2">
            <p className="text-sm text-gray-400">Select assignee</p>
            <LuChevronsUpDown size={14} className="text-gray-500" />
          </div>
        </ComboSelect>
      </div>
    </div>
  );
};
export default AssigneeFilter;
