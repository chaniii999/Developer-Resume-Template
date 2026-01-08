import { Project } from '../../../data/resume';

interface ProjectItemProps {
  project: Project;
  isLast?: boolean;
}

export default function ProjectItem({ project, isLast }: ProjectItemProps) {
  return (
    <>
      <div className="flex flex-col gap-4 project-item no-break">
        <div className="flex flex-col gap-2">
          <h3 className="text-[16px] font-bold text-gray-900 border-b-2 border-gray-300 pb-1.5">
            {project.title}
          </h3>

          <div className="bg-gray-50 border border-gray-200 rounded-sm">
            <div className="grid grid-cols-[100px_1fr] gap-x-4 gap-y-2 text-[13px] p-3">
              <div className="text-gray-700 font-semibold">주제</div>
              <div className="text-gray-800 font-medium">{project.subject}</div>

              <div className="text-gray-700 font-semibold">프로젝트 기간</div>
              <div className="text-gray-800">{project.period}</div>

              <div className="text-gray-700 font-semibold">역할 및 인원</div>
              <div className="text-gray-800">{project.role}</div>

              {project.repository && (
                <>
                  <div className="text-gray-700 font-semibold">저장소</div>
                  <div className="text-gray-800 flex flex-col gap-1">
                    {project.repository.repo && (
                      <a
                        href={project.repository.repo.startsWith('http') ? project.repository.repo : `https://${project.repository.repo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {project.repository.repo}
                      </a>
                    )}
                    {project.repository.backend && (
                      <div>
                        <span className="text-gray-600">BE: </span>
                        <a
                          href={project.repository.backend.startsWith('http') ? project.repository.backend : `https://${project.repository.backend}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          {project.repository.backend}
                        </a>
                      </div>
                    )}
                    {project.repository.frontend && (
                      <div>
                        <span className="text-gray-600">FE: </span>
                        <a
                          href={project.repository.frontend.startsWith('http') ? project.repository.frontend : `https://${project.repository.frontend}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          {project.repository.frontend}
                        </a>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-[14px] font-semibold text-gray-900 uppercase tracking-wide border-l-4 border-gray-400 pl-2">
            프로젝트 소개
          </div>
          <p className="text-[13px] text-gray-700 leading-relaxed whitespace-pre-line bg-gray-50 border border-gray-200 rounded-sm p-3">
            {project.description}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-[14px] font-semibold text-gray-900 uppercase tracking-wide border-l-4 border-gray-400 pl-2">
            기술 스택
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-sm">
            <div className="grid grid-cols-[100px_1fr] gap-x-4 gap-y-2 text-[12px] p-3">
              {project.techStack.backend && (
                <>
                  <div className="text-gray-700 font-semibold">Backend</div>
                  <div className="text-gray-800">{project.techStack.backend}</div>
                </>
              )}
              {project.techStack.frontend && (
                <>
                  <div className="text-gray-700 font-semibold">Frontend</div>
                  <div className="text-gray-800">
                    {project.techStack.frontend}
                  </div>
                </>
              )}
              {project.techStack.database && (
                <>
                  <div className="text-gray-700 font-semibold">Database</div>
                  <div className="text-gray-800">
                    {project.techStack.database}
                  </div>
                </>
              )}
              {project.techStack.infra && (
                <>
                  <div className="text-gray-700 font-semibold">Infra / Tools</div>
                  <div className="text-gray-800">{project.techStack.infra}</div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-[14px] font-semibold text-gray-900 uppercase tracking-wide border-l-4 border-gray-400 pl-2">
            담당 업무
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-sm">
            <ul className="list-disc list-outside flex flex-col gap-1 text-[13px] text-gray-700 p-3 pl-6">
              {project.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </div>

        {project.achievements && project.achievements.length > 0 && (
          <div className="flex flex-col gap-2">
            <div className="text-[14px] font-semibold text-gray-900 uppercase tracking-wide border-l-4 border-blue-500 pl-2">
              성과
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-sm">
              <ul className="list-disc list-outside flex flex-col gap-1 text-[13px] text-gray-700 p-3 pl-6">
                {project.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

      </div>
      {!isLast && <div className="border-t-2 border-gray-300 mt-2"></div>}
    </>
  );
}

