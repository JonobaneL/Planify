import Image from 'next/image';

import { cn } from '@/lib/utils';

type LoaderProps = {
  className?: string;
};
const Loader: React.FC = ({ className }: LoaderProps) => {
  return (
    <Image
      src="/assets/bars.svg"
      className={cn('size-16', className)}
      width={100}
      height={100}
      alt="loader"
    />
  );
};

export default Loader;
