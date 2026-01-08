import { PersonalInfo } from '../../../data/resume';

interface HeaderProps {
  personalInfo: PersonalInfo;
}

export default function Header({ personalInfo }: HeaderProps) {
  return (
    <header className="mb-6">
      <div className="border-b-2 border-gray-300 pb-3 mb-3">
        <h1 className="text-[32px] font-bold leading-tight mb-1 text-gray-900">
          {personalInfo.name} | {personalInfo.nameEn}
        </h1>
        <p className="text-[18px] font-semibold text-gray-700">
          {personalInfo.position}
        </p>
      </div>
      <div className="bg-gray-50 border border-gray-200 rounded-sm">
        <div className="text-[13px] text-gray-700 flex flex-wrap gap-x-3 gap-y-1 p-2">
          <a
            href={`mailto:${personalInfo.email}`}
            className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
          >
            {personalInfo.email}
          </a>
          <span className="text-gray-400">|</span>
          <a
            href={`https://${personalInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
          >
            {personalInfo.github}
          </a>
          <span className="text-gray-400">|</span>
          <a
            href={`https://${personalInfo.blog}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
          >
            {personalInfo.blog}
          </a>
        </div>
      </div>
    </header>
  );
}

