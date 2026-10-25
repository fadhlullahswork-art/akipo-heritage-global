import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Businesses from "@/components/Businesses";
import Approach from "@/components/Approach";
import HeritageFuture from "@/components/HeritageFuture";
import GlobalVision from "@/components/GlobalVision";
import ComingSoon from "@/components/ComingSoon";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <div id="about">
        <Reveal>
          <Intro />
        </Reveal>
      </div>
      <div id="businesses">
        <Reveal>
          <Businesses />
        </Reveal>
      </div>
      <div id="approach">
        <Reveal>
          <Approach />
        </Reveal>
      </div>
      <Reveal>
        <HeritageFuture />
      </Reveal>
      <Reveal>
        <GlobalVision />
      </Reveal>
      <Reveal>
        <ComingSoon />
      </Reveal>
      <div id="contact">
        <Reveal>
          <Contact />
        </Reveal>
      </div>
      <Footer />
    </>
  );
}