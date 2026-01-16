import { PersonalInfo } from '../../../data/resume';

interface HeaderProps {
  personalInfo: PersonalInfo;
}

function getPortfolioDisplayText(url: string): string {
  if (url.includes('notion.so')) {
    const match = url.match(/notion\.so\/([^/?]+)/);
    if (match) {
      return `notion.so/${match[1]}`;
    }
  }
  return url;
}

export default function Header({ personalInfo }: HeaderProps) {
  return (
    <header className="mb-6">
      <div className="flex items-start gap-6 pb-5 border-b border-gray-300">
        <div className="flex-shrink-0">
          <img
            src="/image/증명사진.jpg"
            alt="증명사진"
            className="w-28 h-36 object-cover rounded-md border border-gray-300 shadow-md"
          />
        </div>
        <div className="flex flex-col gap-2.5 flex-1">
          <h1 className="text-[34px] font-bold leading-tight text-gray-900 tracking-tight">
            {personalInfo.name} | {personalInfo.nameEn}
          </h1>
          <div className="flex items-center gap-2.5">
            <p className="text-[19px] font-semibold text-gray-800">
              {personalInfo.position}
            </p>
            <div className="w-1 h-1 rounded-full bg-gray-400"></div>
          </div>
        </div>
      </div>
      <div className="mt-4 bg-gray-50 border-l-4 border-gray-800 rounded-r">
        <div className="text-[13.5px] text-gray-800 flex flex-col gap-2 p-4">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-gray-900 min-w-[75px] text-[14px]">Email</span>
            <span className="text-gray-500">:</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="font-medium text-gray-700 hover:text-gray-900 hover:underline transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-gray-900 min-w-[75px] text-[14px]">GitHub</span>
            <span className="text-gray-500">:</span>
            <a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-700 hover:text-gray-900 hover:underline transition-colors"
            >
              {personalInfo.github}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-gray-900 min-w-[75px] text-[14px]">Blog</span>
            <span className="text-gray-500">:</span>
            <a
              href={`https://${personalInfo.blog}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-700 hover:text-gray-900 hover:underline transition-colors"
            >
              {personalInfo.blog}
            </a>
          </div>
          {personalInfo.portfolio && (
            <div className="flex items-center gap-3">
              <span className="font-semibold text-gray-900 min-w-[75px] text-[14px]">Portfolio</span>
              <span className="text-gray-500">:</span>
              <a
                href={personalInfo.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-700 hover:text-gray-900 hover:underline transition-colors"
              >
                {getPortfolioDisplayText(personalInfo.portfolio)}
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

