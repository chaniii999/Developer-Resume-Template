import { SkillCategory } from '../../../data/resume';

interface SkillsProps {
  skills: SkillCategory[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section className="mb-6">
      <h2 className="text-[16px] font-semibold text-gray-900 mb-4 uppercase tracking-wide border-b-2 border-gray-800 pb-2">
        Skills
      </h2>
      <div className="flex flex-col gap-5">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col gap-1.5">
            <div className="text-[13px] font-semibold text-gray-900 uppercase tracking-wide">
              {skill.category}
            </div>
            <div className="text-[13px] text-gray-700 leading-relaxed">
              {skill.items}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

