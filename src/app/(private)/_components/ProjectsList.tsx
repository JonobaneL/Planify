import { mockProjects } from '@/data/mock/projects';

import ProjectCard from './ProjectCard';

const ProjectsList: React.FC = () => {
  return (
    <div className="grid h-full w-full auto-rows-min grid-cols-[repeat(auto-fit,minmax(250px,1fr))] items-stretch gap-4 rounded-t-3xl bg-primary-5 p-4">
      {mockProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
