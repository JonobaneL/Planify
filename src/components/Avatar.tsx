import Image from 'next/image';

import { cn } from '@/lib/utils';

type AvatarProps = {
  src?: string;
  name: string;
  className?: string;
  textStyles?: string;
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  name,
  className,
  textStyles,
}) => {
  if (!src)
    return (
      <div
        className={cn(
          'flex size-14 items-center justify-center rounded-full bg-profile bg-auto',
          className,
        )}
      >
        <p
          className={cn(
            'font-poppins text-2xl font-semibold text-white',
            textStyles,
          )}
        >
          {name?.[0].toUpperCase()}
        </p>
      </div>
    );
  return (
    <div className={cn('size-14 overflow-hidden rounded-full', className)}>
      <Image
        src={src}
        className="h-full w-full"
        alt={name}
        width={32}
        height={32}
      />
    </div>
  );
};

export default Avatar;
