import { LuFileText } from 'react-icons/lu';

const TaskDescription: React.FC = () => {
  return (
    <div className="space-y-4 p-6">
      <div>
        <div className="flex items-center gap-2">
          <LuFileText size={16} className="text-primary" />
          <p className="font-medium text-gray-600">Description</p>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-400">
          This task doesn&apos;t have a description yet. To add one, click here.
        </p>
      </div>
    </div>
  );
};

export default TaskDescription;
