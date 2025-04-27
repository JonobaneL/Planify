import Image from 'next/image';

const EmptyLabel: React.FC = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <Image
        src="/assets/empty-comments.svg"
        width={220}
        height={200}
        alt="empty-comments"
      />
      <h3 className="mb-2">No updates yet</h3>
      <p className="text-sm">
        Share progress, mention a teammate, or leave some thoughts
      </p>
    </div>
  );
};

export default EmptyLabel;
