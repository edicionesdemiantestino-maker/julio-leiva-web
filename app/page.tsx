import ContactSection from "@/src/components/ContactSection";
import HeroSection from "@/src/components/HeroSection";
import Portfolio from "@/src/components/Portfolio";
import UpcomingReleases from "@/src/components/UpcomingReleases";

export default function Home() {
  return (
    <main className="bg-zinc-950">
      <HeroSection />
      <UpcomingReleases />
      <Portfolio />
      <ContactSection />
    </main>
  );
}
