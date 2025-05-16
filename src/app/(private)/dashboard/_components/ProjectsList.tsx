import { secureInstance } from '@/lib/axios';
import { Project } from '@/types/projects';

import ProjectCard from './ProjectCard';

const ProjectsList: React.FC = async () => {
  try {
    const response = await secureInstance.get<Project[]>(`/projects`);
    const projects = response.data;

    if (!projects) return <div>You don&apos;t have any projects</div>;

    return projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ));
  } catch (err) {
    console.error(err);
    return <div className="p-4 text-red-500">Failed to load projects.</div>;
  }
};

export default ProjectsList;
