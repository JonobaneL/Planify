import { LuPlus } from 'react-icons/lu';

import Avatar from '@/components/Avatar';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/stores/auth';

const Members: React.FC = () => {
  const { first_name, last_name } = useAuthStore();
  return (
    <>
      <p>Members</p>
      <ul className="my-2">
        <li className="flex items-center justify-between rounded-md px-3 py-1.5 transition-colors hover:bg-primary-10">
          <div className="flex items-center gap-3">
            <Avatar
              className="size-7"
              textStyles="text-sm font-medium"
              name={String(first_name)}
            />
            {first_name} {last_name}
          </div>
          <p className="text-sm font-semibold text-primary">Owner</p>
        </li>
      </ul>
      <div className="flex justify-start">
        <Button variant="link" className="px-0">
          <LuPlus />
          Invite
        </Button>
      </div>
    </>
  );
};

export default Members;
