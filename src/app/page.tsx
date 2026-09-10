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

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="about">
        <Intro />
      </div>
      <div id="businesses">
        <Businesses />
      </div>
      <div id="approach">
        <Approach />
      </div>
      <HeritageFuture />
      <GlobalVision />
      <ComingSoon />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}