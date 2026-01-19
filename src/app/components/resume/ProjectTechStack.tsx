import { ProjectTechStackProps } from './types';

export default function ProjectTechStack({ techStack }: ProjectTechStackProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-[14px] font-semibold text-gray-900 uppercase tracking-wide border-l-4 border-gray-800 pl-3 py-1 bg-gray-100">
        기술 스택
      </div>
      <div className="bg-white border border-gray-300 rounded">
        <div className="grid grid-cols-[100px_1fr] gap-x-4 gap-y-2 text-[13px] p-4">
          {techStack.backend && (
            <>
              <div className="text-gray-700 font-semibold">Backend</div>
              <div className="text-gray-800 font-mono text-[12px]">{techStack.backend}</div>
            </>
          )}
          {techStack.frontend && (
            <>
              <div className="text-gray-700 font-semibold">Frontend</div>
              <div className="text-gray-800 font-mono text-[12px]">{techStack.frontend}</div>
            </>
          )}
          {techStack.database && (
            <>
              <div className="text-gray-700 font-semibold">Database</div>
              <div className="text-gray-800 font-mono text-[12px]">{techStack.database}</div>
            </>
          )}
          {techStack.infra && (
            <>
              <div className="text-gray-700 font-semibold">Infra / Tools</div>
              <div className="text-gray-800 font-mono text-[12px]">{techStack.infra}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
