import infoContent from '../data/infoContent.json';

export default function Info() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-portal font-bold mb-6">{infoContent.title}</h1>
      <p className="mb-6 text-lg">{infoContent.intro}</p>
      {infoContent.sections.map((section, idx) => (
        <section key={idx} className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">{section.heading}</h2>
          <p className="text-lg leading-relaxed">{section.content}</p>
        </section>
      ))}
    </div>
  );
}
