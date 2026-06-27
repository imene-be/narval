import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Experiences from "@/components/sections/Experiences";
import Destinations from "@/components/sections/Destinations";
import Fleet from "@/components/sections/Fleet";
import WhyNarval from "@/components/sections/WhyNarval";
import CtaBanner from "@/components/sections/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experiences />
        <Destinations />
        <Fleet />
        <WhyNarval />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
