export default function Insights() {
  return (
    <section className="bg-heritage-cream text-heritage-brown">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="mb-16">
          <h2 className="font-heading text-4xl md:text-5xl leading-tight">
            From the Group
          </h2>
        </div>

        <div className="border-t border-heritage-brown/15 pt-16">
          <p className="text-heritage-brown/70 text-lg max-w-xl mb-10">
            We&apos;ll be sharing updates from across the group here soon —
            company news, business milestones, and stories from each of our
            divisions.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Company Announcements",
              "Travel & Tourism Updates",
              "Commodity Market Insights",
              "Property Developments",
              "Technology & Innovation",
              "Group News",
            ].map((category) => (
              <div
                key={category}
                className="bg-premium-white rounded-xl border border-heritage-brown/10 px-5 py-4"
              >
                <span className="text-sm font-medium text-heritage-brown/80">
                  {category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}