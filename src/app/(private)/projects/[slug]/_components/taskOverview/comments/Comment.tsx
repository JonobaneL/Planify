import Image from 'next/image';

import { cn } from '@/lib/utils';
import { CommentType } from '@/types/comment';
import { User } from '@/types/user';

type CommentProps = {
  comment: CommentType;
};
const Comment: React.FC<CommentProps> = ({ comment }) => {
  const user = comment.created_by as User;
  //temporary approach
  const currentUserId = 'user1';
  return (
    <div
      key={comment.id}
      className={cn('flex', user.id === currentUserId && 'justify-end')}
    >
      <div className="flex max-w-[60%] items-end gap-2.5">
        {user.id !== currentUserId && (
          <Image
            className="size-8 rounded-full"
            src={user.avatar ?? ''}
            width={32}
            height={32}
            alt="avatar"
          />
        )}

        <div>
          <div
            className={cn(
              'rounded-lg p-2 text-sm',
              user.id !== currentUserId
                ? 'bg-primary-10'
                : 'bg-primary-60 text-white',
            )}
          >
            {user.id !== currentUserId && (
              <p className="mb-1 font-medium text-primary">{user.username}</p>
            )}
            <p>{comment.content}</p>
          </div>
          <p className="mt-2 text-right text-xs text-gray-500">15:35</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
