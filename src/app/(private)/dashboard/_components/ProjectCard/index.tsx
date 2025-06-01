import Link from 'next/link';
import { FaRegStar, FaStar } from 'react-icons/fa6';
import { LuSquareKanban, LuTable2 } from 'react-icons/lu';

import dayjs from '@/lib/dayjs';
import { Project } from '@/types/projects';

import CardDropdown from './CardDropdown';

type CardProps = {
  project: Project;
};

const ProjectCard: React.FC<CardProps> = ({ project }) => {
  return (
    <div className="flex h-full w-full cursor-pointer flex-col justify-between rounded-3xl border border-gray-100 bg-white p-4 transition-shadow duration-200 hover:shadow">
      <div>
        <div className="flex items-center justify-between">
          <Link
            href={`/projects/${project.id}`}
            className="flex items-center gap-2"
          >
            {project.view === 'board' ? (
              <LuSquareKanban
                className="flex-[0_0_20px] text-primary"
                size={20}
              />
            ) : (
              <LuTable2 className="flex-[0_0_20px] text-primary" size={20} />
            )}

            <p className="text-base font-medium">{project.name}</p>
          </Link>
          <CardDropdown projectId={project.id} />
        </div>

        <p className="mt-2 line-clamp-2 text-sm text-gray-600">
          {project.description}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-gray-600">
          {dayjs(project.createdAt).fromNow()}
        </p>
        <button>
          {false ? (
            <FaStar className="text-primary-80" size={16} />
          ) : (
            <FaRegStar className="text-primary-80" size={16} />
          )}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
