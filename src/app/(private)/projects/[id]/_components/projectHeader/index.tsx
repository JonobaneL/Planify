import { LuLink2 } from 'react-icons/lu';

import { serverInstance } from '@/lib/serverAxios';

import ProjectDropdown from './ProjectDropdown';
import InviteModal from '../inviteModal';

const ProjectHeader: React.FC<{ projectId: string }> = async ({
  projectId,
}) => {
  const res = await serverInstance.get(`/projects/${projectId}`);
  const project = res.data;
  const members = 1;
  return (
    <div className="flex justify-between gap-4">
      <div className="space-y-1.5">
        <h3 className="font-poppins text-xl font-semibold text-primary">
          {project.name}
        </h3>
        <p className="text-sm text-gray-600">{project.description}</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex h-9 items-center overflow-hidden rounded-full border-[1.5px] border-primary transition-shadow hover:shadow">
          <InviteModal>
            <button className="h-full border-r-[1.5px] border-primary px-5 text-sm font-medium text-primary transition-colors hover:bg-primary-5">
              Invite / {members}
            </button>
          </InviteModal>

          <button className="h-full px-2.5 py-1 transition-colors hover:bg-primary-5">
            <LuLink2 size={18} className="text-primary" />
          </button>
        </div>
        <ProjectDropdown />
      </div>
    </div>
  );
};

export default ProjectHeader;
