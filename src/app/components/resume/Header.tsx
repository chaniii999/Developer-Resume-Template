import { PersonalInfo } from '../../../data/resume';

interface HeaderProps {
  personalInfo: PersonalInfo;
}

export default function Header({ personalInfo }: HeaderProps) {
  return (
    <header className="mb-6">
      <div className="flex items-start gap-6 pb-4 border-b-2 border-gray-200">
        <div className="flex-shrink-0">
          <img
            src="/image/증명사진.jpg"
            alt="증명사진"
            className="w-24 h-32 object-cover rounded-sm border-2 border-gray-300"
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <h1 className="text-[32px] font-bold leading-tight text-gray-900">
            {personalInfo.name} | {personalInfo.nameEn}
          </h1>
          <div className="flex items-center gap-3">
            <p className="text-[18px] font-semibold text-gray-700">
              {personalInfo.position}
            </p>
            <div className="w-1 h-1 rounded-full bg-blue-600"></div>
          </div>
        </div>
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

