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
        <div className="p-[28px]">
          <Header personalInfo={resumeData.personalInfo} />

          <div className="border-t border-gray-200 mb-6"></div>

          <Summary summary={resumeData.summary} />

          <div className="border-t border-gray-200 mb-6"></div>

          <Skills skills={resumeData.skills} />

          <div className="border-t border-gray-200 mb-6"></div>

          <Projects projects={resumeData.projects} />

          <div className="border-t border-gray-200 mb-6"></div>

          <Education education={resumeData.education} />

          {resumeData.qualifications && resumeData.qualifications.length > 0 && (
            <>
              <div className="border-t border-gray-200 mb-6"></div>
              <Qualifications qualifications={resumeData.qualifications} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
