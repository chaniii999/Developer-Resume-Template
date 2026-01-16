interface SummaryProps {
  summary: string;
}

export default function Summary({ summary }: SummaryProps) {
  return (
    <section className="mb-6">
      <h2 className="text-[16px] font-semibold text-gray-900 mb-4 uppercase tracking-wide border-b-2 border-gray-800 pb-2">
        Summary
      </h2>
      <div className="bg-gray-50 border-l-4 border-gray-800 rounded-r">
        <p className="text-[14px] leading-loose text-gray-800 whitespace-pre-line p-4">
          {summary}
        </p>
      </div>
    </section>
  );
}

