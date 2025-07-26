import Avatar from '@/components/Avatar';
import { auth } from '@/lib/auth';

const Members: React.FC = async () => {
  const session = await auth();
  const user = session?.user;
  return (
    <div>
      <p className="mb-2 text-base font-medium">Members</p>
      <ul>
        <li className="flex items-center justify-between rounded-md px-3 py-1.5 transition-colors hover:bg-primary-10">
          <div className="flex items-center gap-3">
            <Avatar
              className="size-7"
              textStyles="text-sm font-medium"
              name={String(user?.first_name)}
            />
            <p>
              {user?.first_name} {user?.last_name}
            </p>
          </div>
          <p className="text-sm font-semibold text-primary">Owner</p>
        </li>
      </ul>
    </div>
  );
};

export default Members;
