interface SummaryProps {
  summary: string;
}

export default function Summary({ summary }: SummaryProps) {
  return (
    <section className="mb-6">
      <h2 className="text-[16px] font-semibold text-gray-900 mb-4 uppercase tracking-wide border-b-4 border-gray-800 pb-2">
        Summary
      </h2>
      <div className="bg-gray-50 border border-gray-200 rounded-sm">
        <p className="text-[14px] leading-relaxed text-gray-700 whitespace-pre-line p-3">
          {summary}
        </p>
      </div>
    </section>
  );
}

