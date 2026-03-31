import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LatestRelease from "@/components/LatestRelease";
import Discography from "@/components/Discography";
import About from "@/components/About";
import Shows from "@/components/Shows";
import Press from "@/components/Press";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <LatestRelease />
      <Discography />
      <About />
      <Shows />
      <Press />
      <Contact />
      <Footer />
    </main>
  );
}
