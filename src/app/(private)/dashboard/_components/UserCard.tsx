import Avatar from '@/components/Avatar';
import { auth } from '@/lib/auth';

const UserCard: React.FC = async () => {
  const session = await auth();
  const user = session?.user;

  return (
    <div className="flex items-center justify-between rounded-2xl border border-none border-gray-100 p-4 transition-shadow hover:shadow">
      <div>
        <p className="text-lg text-gray-800">Hello,</p>
        <h2 className="text-primary">
          {user?.first_name} {user?.last_name}
        </h2>
      </div>
      <Avatar name={`${user?.first_name?.[0]}${user?.last_name?.[0]}`} />
    </div>
  );
};

export default UserCard;
