import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LatestRelease from "@/components/LatestRelease";
import About from "@/components/About";
import Shows from "@/components/Shows";
import Discography from "@/components/Discography";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <LatestRelease />
      <About />
      <Shows />
      <Discography />
      <Contact />
      <Footer />
    </main>
  );
}
