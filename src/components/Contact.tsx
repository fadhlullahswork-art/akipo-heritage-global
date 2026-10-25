import { RevealGroup, RevealItem } from "@/components/RevealGroup";

export default function Contact() {
  return (
    <section className="bg-heritage-brown text-premium-white">
      <RevealGroup className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center gap-8">
        <RevealItem>
          <h2 className="font-heading text-4xl md:text-6xl leading-tight max-w-2xl">
            Let&apos;s build what comes next.
          </h2>
        </RevealItem>

        <RevealItem>
          <p className="text-premium-white/80 text-lg max-w-xl">
            Whether you&apos;re looking to work with one of our businesses,
            explore an opportunity, or connect with the Akipo Heritage Group,
            we&apos;d be glad to hear from you.
          </p>
        </RevealItem>

        <RevealItem>
          <a
            href="#businesses"
            className="inline-block bg-premium-white text-heritage-brown rounded-full px-6 py-3 text-sm font-medium hover:bg-heritage-cream transition-colors"
          >
            Explore Our Businesses →
          </a>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}