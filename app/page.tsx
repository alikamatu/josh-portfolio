import AboutSection from "@/components/homepage/about/about-section";
import Footer from "@/components/homepage/footer/footer";
import GalleryPage from "@/components/homepage/gallery/gallary";
import HeroPage from "@/components/homepage/hero/hero-page";
import InsightSection from "@/components/homepage/insight/insight-section";
import Navbar from "@/components/homepage/navbar/navbar";
import QuoteSection from "@/components/homepage/quote/quote-section";
import VideoSection from "@/components/homepage/video/video-section";
import WorkSection from "@/components/homepage/work/work-section";

export default function HomePage() {
  return (
    <main style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4">
        <HeroPage />
      </div>
      <QuoteSection />
      <AboutSection />
      <WorkSection />
      <VideoSection />
      <GalleryPage />
      <InsightSection />
      <Footer />
    </main>
  );
}