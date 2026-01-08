import { Project } from '../../../data/resume';
import ProjectItem from './ProjectItem';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className="mb-6">
      <h2 className="text-[16px] font-semibold text-gray-900 mb-4 uppercase tracking-wide border-b-4 border-gray-800 pb-2">
        Projects
      </h2>

      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            project={project}
            isLast={index === projects.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

