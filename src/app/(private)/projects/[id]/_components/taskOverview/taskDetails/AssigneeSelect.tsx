import Image from 'next/image';
import { useState } from 'react';

import ClearButton from '@/components/ClearButton';
import ComboSelect from '@/components/ComboSelect';
import { usersMock } from '@/data/mock/users';
import { User } from '@/types/user';

const AssigneeSelect: React.FC = () => {
  const [value, setValue] = useState<User | null>(null);
  return (
    <ComboSelect
      options={usersMock}
      onValueChange={setValue}
      valueField="username"
      placeholder="Search assignee..."
      emptyMessage="No assignee found."
    >
      <div className="group flex h-10 w-fit cursor-pointer items-center gap-2 rounded-lg p-2 hover:bg-primary-10">
        {value === null ? (
          <p className="text-gray-600">Unassigned</p>
        ) : (
          <>
            <Image
              src={value.avatar!}
              alt="avatar"
              className="rounded-full"
              width={25}
              height={25}
            />
            {value.username}
            <ClearButton className="p-0" handler={() => setValue(null)} />
          </>
        )}
      </div>
    </ComboSelect>
  );
};

export default AssigneeSelect;
