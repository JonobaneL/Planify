import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import dayjs from '@/lib/dayjs';
import { Project } from '@/types/projects';

import CardDropdown from './CardDropdown';
import FavoriteButton from './FavoriteButton';

type CardProps = {
  project: Project;
};

const getProjectStatusLabel = (isNewProject: boolean, percentage: number) => {
  if (isNewProject) return 'New';
  if (percentage === 100) return 'Completed';
  if (percentage === 0) return 'In Progress';
  return `${percentage}% Complete`;
};

const ProjectCard: React.FC<CardProps> = ({ project }) => {
  // TODO: Replace with actual data from API
  const randomTasks = Math.floor(Math.random() * 50);
  const randomCompleted = Math.floor(Math.random() * randomTasks);
  const randomPercentage = Math.round((randomCompleted / randomTasks) * 100);
  console.log('project', project);
  const isNewProject = randomTasks === 0;
  return (
    <div className="flex h-full w-full max-w-[520px] flex-col rounded-3xl border-2 border-gray-300 bg-white p-4">
      <div className="flex items-center justify-between">
        <Link
          href={`/projects/${project.id}`}
          className="font-poppins text-base font-semibold text-gray-800"
        >
          {project.name}
        </Link>
        <div className="flex items-center gap-1">
          <FavoriteButton projectId={project.id} favorite={project.favorite} />
          <CardDropdown projectId={project.id} archived={project.archived} />
        </div>
      </div>
      <div className="h-full flex-1">
        <p className="mt-2 line-clamp-2 text-[15px] font-medium text-gray-600">
          {/* TODO: crate a better placeholder for description (Click to add a project overview...) */}
          {project.description ?? (
            <span className="italic text-gray-400">No details added yet.</span>
          )}
        </p>
      </div>

      <div className="mt-4 flex divide-x border-t pt-2">
        <div className="flex-1 pr-4 text-gray-600">
          <p className="text-[15px] font-medium">Tasks:</p>
          <p className="text-sm">
            {isNewProject ? '--/--' : `${randomCompleted}/${randomTasks}`}
          </p>
        </div>
        <div className="flex-1 px-4 text-gray-600">
          <p className="text-[15px] font-medium">Updated:</p>
          <p className="text-sm">{dayjs(project.updatedAt).fromNow()}</p>
        </div>
      </div>
      <div className="mt-3 h-1.5 rounded-full bg-gray-200 text-gray-600">
        <div
          className="h-full rounded-full bg-primary"
          style={{ width: `${randomPercentage}%` }}
        />
      </div>

      <div className="mt-3 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-600">
          {getProjectStatusLabel(isNewProject, randomPercentage)}
        </p>
        <Link href={`/projects/${project.id}`}>
          <Button className="h-9 gap-1 rounded-xl px-3 py-1">
            View Details <ArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
