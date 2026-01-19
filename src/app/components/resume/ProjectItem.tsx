import ProjectListSection from './ProjectListSection';
import ProjectMeta from './ProjectMeta';
import ProjectTechStack from './ProjectTechStack';
import ProjectTextSection from './ProjectTextSection';
import { ProjectItemProps } from './types';

export default function ProjectItem({ project, isLast }: ProjectItemProps) {
  const hasAchievements = Boolean(project.achievements && project.achievements.length > 0);

  return (
    <>
      <div className="flex flex-col gap-4 project-item no-break">
        <div className="flex flex-col gap-2">
          <h3 className="text-[16px] font-bold text-gray-900 border-b-2 border-gray-800 pb-2">
            {project.title}
          </h3>
          <ProjectMeta project={project} />
        </div>

        <ProjectTextSection title="개요" text={project.description} />
        <ProjectTechStack techStack={project.techStack} />
        <ProjectListSection title="주요 역할" items={project.responsibilities} />
        {hasAchievements && (
          <ProjectListSection title="성과" items={project.achievements ?? []} isHighlight />
        )}

      </div>
      {!isLast && <div className="border-t border-gray-300 mt-4"></div>}
    </>
  );
}

