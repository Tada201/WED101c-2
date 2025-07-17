import aboutContent from '../data/aboutContent.json';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-portal font-bold mb-6">{aboutContent.title}</h1>
      {aboutContent.paragraphs.map((para, idx) => (
        <p key={idx} className="mb-4 leading-relaxed text-lg">
          {para}
        </p>
      ))}
    </div>
  );
}
