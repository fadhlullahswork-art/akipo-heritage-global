import Image from "next/image";

export default function GlobalVision() {
  return (
    <section className="bg-heritage-cream text-heritage-brown">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center gap-6">
        <h2 className="font-heading text-3xl md:text-5xl leading-tight max-w-3xl">
          From Nigeria, with a global outlook.
        </h2>

        <p className="text-heritage-brown/80 text-lg max-w-2xl">
          Akipo Heritage Global Ltd. is proudly building from Nigeria while
          looking beyond borders. Our ambition is to develop businesses that
          can participate meaningfully in regional and international
          markets.
        </p>

        <div className="relative mt-6 w-full max-w-3xl aspect-[4/5] md:aspect-[16/10] rounded-2xl overflow-hidden">
          <Image
            src="/images/global-vision.jpg"
            alt="Aerial view of an Africa-shaped monument, representing Akipo Heritage's African roots and global ambition"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}