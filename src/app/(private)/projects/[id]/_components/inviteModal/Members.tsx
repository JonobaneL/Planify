'use client';
import Avatar from '@/components/Avatar';
import { useAuthStore } from '@/stores/auth';

const Members: React.FC = () => {
  const { first_name, last_name } = useAuthStore();
  return (
    <div>
      <p className="mb-2 text-base font-medium">Members</p>
      <ul>
        <li className="flex items-center justify-between rounded-md px-3 py-1.5 transition-colors hover:bg-primary-10">
          <div className="flex items-center gap-3">
            <Avatar
              className="size-7"
              textStyles="text-sm font-medium"
              name={String(first_name)}
            />
            <p>
              {first_name} {last_name}
            </p>
          </div>
          <p className="text-sm font-semibold text-primary">Owner</p>
        </li>
      </ul>
    </div>
  );
};

export default Members;
