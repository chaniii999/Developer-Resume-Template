import { SkillCategory } from '../../../data/resume';

interface SkillsProps {
  skills: SkillCategory[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section className="mb-6">
      <h2 className="text-[16px] font-semibold text-gray-900 mb-4 uppercase tracking-wide border-b-4 border-gray-800 pb-2">
        Skills
      </h2>
      <div className="flex flex-col gap-3">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-50 border border-gray-200 rounded-sm">
            <div className="flex flex-col gap-1.5 p-3">
              <div className="text-[13px] font-semibold text-gray-900 border-b border-gray-300 pb-1">
                {skill.category}
              </div>
              <div className="text-[13px] text-gray-700">
                {skill.items}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

