const principles = [
  {
    number: "01",
    title: "Purpose",
    text: "We build businesses around meaningful opportunities and real-world needs.",
  },
  {
    number: "02",
    title: "Excellence",
    text: "We pursue high standards in how we serve customers, develop products and operate our businesses.",
  },
  {
    number: "03",
    title: "Long-Term Thinking",
    text: "We focus on creating businesses and assets capable of generating lasting value.",
  },
  {
    number: "04",
    title: "Innovation",
    text: "We continuously explore better ways to serve people, improve operations and create new opportunities.",
  },
];

export default function Approach() {
  return (
    <section className="bg-premium-white text-heritage-brown">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <h2 className="font-heading text-4xl md:text-5xl leading-tight max-w-2xl mb-16">
          Built for today. Designed for tomorrow.
        </h2>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
          {principles.map((p) => (
            <div key={p.number} className="flex gap-6 border-t border-heritage-brown/10 pt-6">
              <span className="font-heading text-3xl text-champagne">
                {p.number}
              </span>
              <div>
                <h3 className="font-heading text-xl mb-2">{p.title}</h3>
                <p className="text-heritage-brown/80">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}