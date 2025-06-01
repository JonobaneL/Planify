'use client';

import Avatar from '@/components/Avatar';
import { useAuthStore } from '@/stores/auth';

const UserCard: React.FC = () => {
  const { first_name, last_name } = useAuthStore();

  return (
    <div className="flex items-center justify-between rounded-2xl border border-none border-gray-100 p-4 transition-shadow hover:shadow">
      <div>
        <p className="text-lg text-gray-800">Hello,</p>
        <h2 className="text-primary">
          {first_name} {last_name}
        </h2>
      </div>
      <Avatar name={`${first_name?.[0]}${last_name?.[0]}`} />
    </div>
  );
};

export default UserCard;
