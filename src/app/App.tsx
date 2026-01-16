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
      <div className="bg-white shadow-lg print:shadow-none w-[210mm] min-h-[297mm] font-[Inter,system-ui,-apple-system,sans-serif]">
        {/* 상단 디자인 요소 */}
        <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-500 h-2.5 rounded-t-sm"></div>
        <div className="flex items-center gap-3 px-[28px] pt-6 pb-5">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-200/60 to-transparent"></div>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-sm"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-blue-300 to-indigo-500 shadow-sm"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 shadow-sm"></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-200/60 to-transparent"></div>
        </div>
        <div className="px-[28px]">
          <Header personalInfo={resumeData.personalInfo} />

          <div className="h-8"></div>

          <Summary summary={resumeData.summary} />

          <div className="h-8"></div>

          <Skills skills={resumeData.skills} />

          <div className="h-8"></div>

          <Projects projects={resumeData.projects} />

          <div className="h-8"></div>

          <Education education={resumeData.education} />

          {resumeData.qualifications && resumeData.qualifications.length > 0 && (
            <>
              <div className="h-8"></div>
              <Qualifications qualifications={resumeData.qualifications} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
