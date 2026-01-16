import { resumeData } from '../data/resume';
import Header from './components/resume/Header';
import Summary from './components/resume/Summary';
import Skills from './components/resume/Skills';
import Projects from './components/resume/Projects';
import Education from './components/resume/Education';
import Qualifications from './components/resume/Qualifications';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8 print:p-0 print:bg-white">
      <div className="bg-white shadow-lg print:shadow-none w-[210mm] min-h-[297mm] font-[Inter,system-ui,-apple-system,sans-serif] print-top-design">
        {/* 상단 디자인 요소 */}
        <div className="bg-gray-900 h-2 top-bar"></div>
        <div className="flex items-center gap-3 px-[28px] pt-8 pb-6 top-design-line">
          <div className="flex-1 h-px bg-gray-300"></div>
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
          </div>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        <div className="px-[28px]">
          <Header personalInfo={resumeData.personalInfo} />

          <div className="h-10"></div>

          <Summary summary={resumeData.summary} />

          <div className="h-10"></div>

          <Skills skills={resumeData.skills} />

          <div className="h-10"></div>

          <Projects projects={resumeData.projects} />

          <div className="h-10"></div>

          <Education education={resumeData.education} />

          {resumeData.qualifications && resumeData.qualifications.length > 0 && (
            <>
              <div className="h-10"></div>
              <Qualifications qualifications={resumeData.qualifications} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
