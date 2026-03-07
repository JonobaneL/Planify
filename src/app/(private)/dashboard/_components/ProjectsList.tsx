import serverAxios from '@/lib/axiosServer';
import { Project } from '@/types/projects';
import { generateQueryString } from '@/utils/generateQueryString';

import ProjectCard from './ProjectCard';
import { parseViewParam, projectsSearchParamsCache } from '../_utils';

const ProjectsList: React.FC = async () => {
  try {
    const { view, ...params } = projectsSearchParamsCache.all();
    const viewParam = parseViewParam(view);
    const searchQuery = generateQueryString({ ...params, ...viewParam });
    const response = await serverAxios.get<Project[]>(
      `/projects?${searchQuery}`,
    );
    const projects = response.data;

    //TODO: add empty state
    if (!projects.length) return <div>You don&apos;t have any projects</div>;

    return projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ));
  } catch (err) {
    console.error(err);
    return <div className="p-4 text-red-500">Failed to load projects.</div>;
  }
};

export default ProjectsList;
