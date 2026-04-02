import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NowPlaying from "@/components/NowPlaying";
import LyricsWall from "@/components/LyricsWall";
import TheStory from "@/components/TheStory";
import Timeline from "@/components/Timeline";
import Live from "@/components/Live";
import Music from "@/components/Music";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <NowPlaying />
      <LyricsWall />
      <TheStory />
      <Timeline />
      <Live />
      <Music />
      <Contact />
    </main>
  );
}
