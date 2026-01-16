import { Education as EducationType } from '../../../data/resume';

interface EducationProps {
  education: EducationType[];
}

export default function Education({ education }: EducationProps) {
  return (
    <section>
      <h2 className="text-[16px] font-semibold text-gray-900 mb-4 uppercase tracking-wide border-b-4 border-gray-800 pb-2">
        Education
      </h2>
      <div className="flex flex-col gap-3">
        {education.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-50/80 to-blue-50/30 border border-gray-200/60 rounded-lg shadow-sm hover:shadow transition-shadow"
          >
            <div className="flex justify-between items-baseline p-3.5">
              <div className="flex flex-col gap-1">
                <div className="text-[14px] font-semibold text-gray-900">
                  {item.title}
                </div>
                <div className="text-[13px] text-gray-700 font-medium">
                  {item.institution}
                </div>
              </div>
              <span className="text-[12px] text-gray-600 font-medium">
                {item.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

