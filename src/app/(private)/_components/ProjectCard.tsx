import Link from 'next/link';
import { FaRegStar, FaStar } from 'react-icons/fa6';
import { LuSquareKanban, LuTable2 } from 'react-icons/lu';

import { ProjectParams } from '@/data/mock/projects';

type CardProps = {
  project: ProjectParams;
};

const ProjectCard: React.FC<CardProps> = ({ project }) => {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="flex h-full w-full cursor-pointer flex-col justify-between rounded-3xl border border-gray-100 bg-white p-4 transition-shadow duration-200 hover:shadow">
        <div>
          <div className="flex gap-2">
            {project.view === 'board' ? (
              <LuSquareKanban
                className="mt-[3px] flex-[0_0_20px] text-primary"
                size={20}
              />
            ) : (
              <LuTable2
                className="mt-[3px] flex-[0_0_20px] text-primary"
                size={20}
              />
            )}

            <p className="text-base font-medium">{project.name}</p>
          </div>
          <p className="mt-2 line-clamp-2 text-sm text-gray-600">
            {project.description}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-gray-600">1 month ago</p>
          <button>
            {project.favorite ? (
              <FaStar className="text-primary-80" size={16} />
            ) : (
              <FaRegStar className="text-primary-80" size={16} />
            )}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
