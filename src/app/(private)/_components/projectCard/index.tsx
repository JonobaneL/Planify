'use client';

import { FaRegStar, FaStar } from 'react-icons/fa6';
import { LuSquareKanban, LuTable } from 'react-icons/lu';

import { ProjectParams } from '@/data/mock/projects';

type CardProps = {
  project: ProjectParams;
};

const ProjectCard: React.FC<CardProps> = ({ project }) => {
  return (
    <div className="w-full cursor-pointer rounded-3xl border border-gray-100 bg-white p-4 transition-shadow duration-200 hover:shadow">
      <div className="flex items-center gap-2">
        {project.view === 'board' ? (
          <LuSquareKanban className="text-primary" size={20} />
        ) : (
          <LuTable className="text-primary" size={20} />
        )}

        <p className="text-lg font-medium">{project.name}</p>
      </div>
      <p className="mt-1 text-sm text-gray-600">{project.description}</p>
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
  );
};

export default ProjectCard;
