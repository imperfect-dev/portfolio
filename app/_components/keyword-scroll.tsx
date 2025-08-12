export function KeywordScroll() {
  const keywords = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Firebase',
    'Tailwind CSS', 'JavaScript', 'Python', 'Express.js', 'Git', 'AWS'
  ];

  return (
    <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="overflow-hidden">
        <div className="flex animate-scroll space-x-8 py-4">
          {keywords.map((keyword, index) => (
            <span
              key={index}
              className="whitespace-nowrap text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
            >
              {keyword}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {keywords.map((keyword, index) => (
            <span
              key={`duplicate-${index}`}
              className="whitespace-nowrap text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}