import { Qualification } from '../../../data/resume';

interface QualificationsProps {
  qualifications: Qualification[];
}

export default function Qualifications({ qualifications }: QualificationsProps) {
  return (
    <section className="mb-10">
      <h2 className="text-[16px] font-semibold text-gray-900 mb-4 uppercase tracking-wide border-b-2 border-gray-800 pb-2">
        Qualifications
      </h2>
      <div className="flex flex-col gap-3">
        {qualifications.map((qualification, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded"
          >
            <div className="flex justify-between items-baseline p-4">
              <div className="flex flex-col gap-1">
                <div className="text-[14px] font-semibold text-gray-900">
                  {qualification.title}
                </div>
                <div className="text-[13px] text-gray-700 font-medium">
                  {qualification.issuer}
                </div>
              </div>
              <span className="text-[12px] text-gray-600 font-medium">
                {qualification.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

