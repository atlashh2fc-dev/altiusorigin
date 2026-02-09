import { Header } from "@/components/landing/Header";
import { SiteBackground } from "@/components/landing/SiteBackground";
import { Hero } from "@/components/landing/Hero";
import { Benefits } from "@/components/landing/Benefits";
import { ScrollStory } from "@/components/landing/ScrollStory";
import { PortfolioShowcase } from "@/components/landing/PortfolioShowcase";
import { Pricing } from "@/components/landing/Pricing";
import { Comparison } from "@/components/landing/Comparison";
import { OneTime } from "@/components/landing/OneTime";
import { Trust } from "@/components/landing/Trust";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { StickyCtaDock } from "@/components/landing/StickyCtaDock";

export default function Home() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <SiteBackground />
      <Header />
      <main className="relative">
        <Hero />
        <Benefits />
        <ScrollStory />
        <PortfolioShowcase />
        <Pricing />
        <Comparison />
        <OneTime />
        <Trust />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <StickyCtaDock />
    </div>
  );
}
