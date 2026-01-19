import ProjectItem from './ProjectItem';
import { ProjectItemRenderer, ProjectsProps } from './types';

export default function Projects({ projects }: ProjectsProps) {
  const renderProjectItem: ProjectItemRenderer = (project, index) => {
    const isLast = index === projects.length - 1;

    return (
      <ProjectItem
        key={`${project.title}-${index}`}
        project={project}
        isLast={isLast}
      />
    );
  };

  return (
    <section className="mb-6">
      <h2 className="text-[16px] font-semibold text-gray-900 mb-4 uppercase tracking-wide border-b-2 border-gray-800 pb-2">
        Projects
      </h2>

      <div className="flex flex-col gap-6 mt-8">
        {projects.map(renderProjectItem)}
      </div>
    </section>
  );
}

