import { ProjectListSectionProps } from './types';

export default function ProjectListSection({
  title,
  items,
  isHighlight = false,
}: ProjectListSectionProps) {
  const renderListItem = (item: string, index: number) => {
    const itemClassName = isHighlight ? 'font-medium' : undefined;

    return (
      <li key={`${title}-${index}`} className={itemClassName}>
        {item}
      </li>
    );
  };

  const containerClassName = isHighlight
    ? 'bg-gray-100 border border-gray-300 rounded'
    : 'bg-white border border-gray-300 rounded';
  const borderClassName = isHighlight ? 'border-gray-900' : 'border-gray-800';

  return (
    <div className="flex flex-col gap-2">
      <div className={`text-[14px] font-semibold text-gray-900 uppercase tracking-wide border-l-4 ${borderClassName} pl-3 py-1 bg-gray-100`}>
        {title}
      </div>
      <div className={containerClassName}>
        <ul className="list-disc list-outside flex flex-col gap-1.5 text-[13px] text-gray-700 p-4 pl-6 leading-relaxed">
          {items.map(renderListItem)}
        </ul>
      </div>
    </div>
  );
}
