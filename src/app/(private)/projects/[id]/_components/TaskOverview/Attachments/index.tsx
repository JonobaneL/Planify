import Image from 'next/image';

import emptyFiles from '@/assets/images/empty-files.svg';

const Attachments: React.FC = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col items-center">
        <Image src={emptyFiles} alt="empty-files" />
        <h3 className="mb-2">Drag & drop or add files here</h3>
        <p className="text-sm">
          Upload and review all files in this item to easily collaborate in
          context
        </p>
      </div>
    </div>
  );
};

export default Attachments;
