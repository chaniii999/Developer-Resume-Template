import { ProjectMetaProps } from './types';

const getRepositoryUrl = (url: string) => {
  if (url.startsWith('http')) {
    return url;
  }

  return `https://${url}`;
};

export default function ProjectMeta({ project }: ProjectMetaProps) {
  const repository = project.repository;

  const renderRepositoryLink = (url?: string, label?: string) => {
    if (!url) {
      return null;
    }

    const href = getRepositoryUrl(url);

    if (!label) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900 hover:underline"
        >
          {url}
        </a>
      );
    }

    return (
      <div>
        <span className="text-gray-600">{label}: </span>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900 hover:underline"
        >
          {url}
        </a>
      </div>
    );
  };

  return (
    <div className="bg-white border border-gray-300 rounded">
      <div className="grid grid-cols-[100px_1fr] gap-x-4 gap-y-2 text-[13px] p-4">
        <div className="text-gray-700 font-semibold">주제</div>
        <div className="text-gray-800 font-medium">{project.subject}</div>

        <div className="text-gray-700 font-semibold">프로젝트 기간</div>
        <div className="text-gray-800">{project.period}</div>

        <div className="text-gray-700 font-semibold">역할 및 인원</div>
        <div className="text-gray-800">{project.role}</div>

        {repository && (
          <>
            <div className="text-gray-700 font-semibold">저장소</div>
            <div className="text-gray-800 flex flex-col gap-1">
              {renderRepositoryLink(repository.repo)}
              {renderRepositoryLink(repository.backend, 'BE')}
              {renderRepositoryLink(repository.frontend, 'FE')}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
