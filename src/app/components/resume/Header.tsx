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
            className="w-24 h-32 object-cover rounded-lg border-2 border-gray-200 shadow-sm"
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
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-50/50 to-indigo-50/50 border border-blue-100 rounded-lg shadow-sm">
        <div className="text-[13px] text-gray-700 flex flex-col gap-1.5 p-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-800 min-w-[70px]">Email:</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
            >
              {personalInfo.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-800 min-w-[70px]">GitHub:</span>
            <a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
            >
              {personalInfo.github}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-800 min-w-[70px]">Blog:</span>
            <a
              href={`https://${personalInfo.blog}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
            >
              {personalInfo.blog}
            </a>
          </div>
          {personalInfo.portfolio && (
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-800 min-w-[70px]">Portfolio:</span>
              <a
                href={personalInfo.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
              >
                {personalInfo.portfolio}
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

