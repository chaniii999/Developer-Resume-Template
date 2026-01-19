import React from 'react';
import { ProjectTextSectionProps } from './types';

export default function ProjectTextSection({ title, text }: ProjectTextSectionProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-[14px] font-semibold text-gray-900 uppercase tracking-wide border-l-4 border-gray-800 pl-3 py-1 bg-gray-100">
        {title}
      </div>
      <p className="text-[13px] text-gray-700 leading-loose whitespace-pre-line bg-white border border-gray-300 rounded p-4">
        {text}
      </p>
    </div>
  );
}
