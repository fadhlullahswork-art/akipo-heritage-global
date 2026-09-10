import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function InnovationPage() {
  return (
    <>
      <Navbar />

      <section className="relative h-[75vh] min-h-[550px] w-full overflow-hidden bg-black">
        <Image
          src="/images/innovation.jpg"
          alt="Dark, technology-focused imagery representing Akipo Heritage Innovation & Technology"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-16 md:pb-20">
          <span className="text-xs tracking-widest uppercase text-champagne font-medium">
            Innovation & Technology
          </span>
          <h1 className="font-heading text-4xl md:text-6xl leading-tight text-premium-white max-w-2xl mt-4">
            Building digital solutions for the opportunities of tomorrow.
          </h1>
          <p className="text-premium-white/75 text-lg max-w-xl mt-4">
            We build technology ventures aimed at solving real, everyday
            problems for people in Nigeria and across Africa.
          </p>
        </div>
      </section>

      {/* UniApp */}
      <section className="bg-black text-premium-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <span className="inline-block text-xs font-medium bg-premium-white/10 text-champagne rounded-full px-4 py-1.5 mb-6">
            In Development
          </span>
          <h2 className="font-heading text-3xl md:text-5xl leading-tight">
            UniApp
          </h2>
          <p className="font-heading text-xl md:text-2xl text-champagne mt-4">
            University life, focused.
          </p>
          <p className="text-premium-white/80 text-lg mt-6 max-w-2xl">
            A focused digital environment built around your university, your
            courses, your classmates and your academic journey — designed
            around a simple philosophy: less noise, more focus.
          </p>

          {/* Feature grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { title: "Coursemate Chat", text: "Talk with classmates and coursemates in one focused space." },
              { title: "School Announcements", text: "University, faculty, department and course updates — targeted to you." },
              { title: "Course Spaces", text: "Discussions and resources organized around each course you're taking." },
              { title: "Class Board", text: "Timetables, tests, exams, assignments and deadlines, always in view." },
              { title: "AI Study Agent", text: "Summaries, flashcards and practice questions generated from your own course materials." },
              { title: "Academic Resources", text: "Lecture notes, past questions and materials, organized by course." },
            ].map((f) => (
              <div key={f.title} className="border-t border-premium-white/15 pt-6">
                <h3 className="font-heading text-xl mb-2">{f.title}</h3>
                <p className="text-premium-white/65 text-sm">{f.text}</p>
              </div>
            ))}
          </div>

          {/* Flow */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-16 text-sm font-medium text-premium-white/70">
            {["Connect", "Learn", "Organize", "Prepare", "Succeed"].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-3">
                <span className="bg-premium-white/10 rounded-full px-4 py-2">{step}</span>
                {i < arr.length - 1 && <span className="text-champagne">→</span>}
              </div>
            ))}
          </div>

          <p className="text-center font-heading text-xl md:text-2xl text-premium-white mt-16">
            Less distraction. More focus. Better university life.
          </p>
        </div>
      </section>

      {/* Lansmart */}
      <section className="bg-heritage-brown text-premium-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <span className="inline-block text-xs font-medium bg-premium-white/10 text-champagne rounded-full px-4 py-1.5 mb-6">
            In Development
          </span>
          <h2 className="font-heading text-3xl md:text-5xl leading-tight">
            Lansmart
          </h2>
          <p className="font-heading text-xl md:text-2xl text-champagne mt-4">
            Commerce, discovery and opportunity — reimagined.
          </p>
          <p className="text-premium-white/80 text-lg mt-6 max-w-2xl">
            Lansmart is a modern digital marketplace designed to bring
            products, services, businesses and opportunities together in one
            engaging environment. Beyond simply browsing listings, users will
            be able to discover products through immersive content, connect
            directly with sellers, communicate through chat, and transact
            with greater confidence through escrow-protected transactions.
          </p>

          {/* Phone mockups */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              { label: "Discover", desc: "Product videos & social-style feed" },
              { label: "Product Page", desc: "Photos, price, verified seller" },
              { label: "Seller Chat", desc: "Message sellers directly" },
            ].map((phone) => (
              <div key={phone.label} className="flex flex-col items-center gap-4">
                <div className="w-full max-w-[220px] aspect-[9/18] rounded-[2rem] border-4 border-premium-white/20 bg-black/40 flex flex-col overflow-hidden">
                  <div className="flex-1 flex items-center justify-center p-6 text-center">
                    <span className="text-premium-white/50 text-sm">
                      {phone.desc}
                    </span>
                  </div>
                </div>
                <span className="text-sm font-medium text-champagne">
                  {phone.label}
                </span>
              </div>
            ))}
          </div>

          {/* Flow */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-16 text-sm font-medium text-premium-white/70">
            {["Discover", "Chat", "Purchase", "Escrow", "Receive"].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-3">
                <span className="bg-premium-white/10 rounded-full px-4 py-2">{step}</span>
                {i < arr.length - 1 && <span className="text-champagne">→</span>}
              </div>
            ))}
          </div>

          <p className="text-center font-heading text-xl md:text-2xl text-premium-white mt-16">
            More than a marketplace. A new way to discover, connect and
            transact.
          </p>

          {/* Feature grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              { title: "Discover", text: "Explore products and businesses through a dynamic, social-style discovery experience." },
              { title: "Shop", text: "Browse products and services from businesses and independent sellers in one marketplace." },
              { title: "Connect", text: "Chat directly with sellers, ask questions, and build trust before making a purchase." },
              { title: "Watch", text: "Discover products through video and visual content, not just static listings." },
              { title: "Trust", text: "Designed to provide escrow-protected transactions for a safer buyer–seller experience." },
              { title: "Opportunities", text: "Beyond products, Lansmart brings together Services and Jobs on one platform." },
            ].map((f) => (
              <div key={f.title} className="border-t border-premium-white/15 pt-6">
                <h3 className="font-heading text-xl mb-2">{f.title}</h3>
                <p className="text-premium-white/65 text-sm">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More ventures coming */}
      <section className="bg-black text-premium-white">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28 text-center flex flex-col items-center gap-4">
          <span className="text-xs tracking-widest uppercase text-champagne font-medium">
            What&apos;s Next
          </span>
          <h2 className="font-heading text-3xl md:text-4xl">
            More ventures coming.
          </h2>
          <p className="text-premium-white/70 text-lg max-w-xl">
            Our innovation portfolio will continue to evolve as we develop
            new ideas and technology-driven businesses for Nigeria and
            Africa.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}