'use client';

import { useRouter } from 'next/navigation';

import { useAuthStore } from '@/stores/auth';

const UserCard: React.FC = () => {
  const { username, logout } = useAuthStore();
  const router = useRouter();
  ///temporary
  const logoutHandler = async () => {
    try {
      await logout();
      router.push('/log-in');
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div
      className="flex cursor-pointer justify-between rounded-2xl border border-gray-100 p-4 transition-shadow hover:shadow"
      onClick={logoutHandler}
    >
      <div>
        <p className="text-lg text-gray-800">Hello,</p>
        <h2 className="text-primary">{username}</h2>
      </div>
      <div className="flex size-14 items-center justify-center rounded-full bg-profile bg-auto">
        <p className="font-poppins text-2xl font-semibold text-white">A</p>
      </div>
    </div>
  );
};

export default UserCard;
