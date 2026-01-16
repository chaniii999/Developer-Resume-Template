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
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gradient-to-r from-gray-50/80 to-blue-50/30 border border-gray-200/60 rounded-lg shadow-sm hover:shadow transition-shadow flex-1 min-w-[200px] max-w-[300px]">
            <div className="flex flex-col gap-1.5 p-3.5 items-center text-center">
              <div className="text-[13px] font-semibold text-gray-900 border-b border-blue-200/50 pb-1.5 w-full">
                {skill.category}
              </div>
              <div className="text-[13px] text-gray-700 flex flex-col gap-1">
                {skill.items.split(', ').map((item, itemIndex) => (
                  <div key={itemIndex}>{item.trim()}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

