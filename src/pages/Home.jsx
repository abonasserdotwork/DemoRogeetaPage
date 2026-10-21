import { useEffect } from "react";
import HeroSection from "../components/sections/hero/HeroSection.jsx";
import AboutSection from "../components/sections/about/AboutSection.jsx";
import ServicesSection from "../components/sections/services/ServicesSection.jsx";
import CounterSection from "../components/sections/counter/CounterSection.jsx";
import NewsSection from "../components/sections/news/NewsSection.jsx";
import AppointmentsSection from "../components/sections/appointments/AppointmentsSection.jsx";
import ContactSection from "../components/sections/contact/ContactSection.jsx";
import FooterSection from "../components/sections/footer/FooterSection.jsx";
import Header from "../components/sections/header/Header.jsx";
import { logoSrc, navbarLists, socials } from "../staticData/navbar.js";

function Home({ onLoadProgress, onReady }) {
  useEffect(() => {
    let isCancelled = false;
    let readyTimer;
    const abortController = new AbortController();

    const reportProgress = (progress) => {
      if (!isCancelled) onLoadProgress(progress);
    };

    async function waitForPageReady() {
      reportProgress(15);

      if (document.readyState !== "complete") {
        await new Promise((resolve) => {
          window.addEventListener("load", resolve, {
            once: true,
            signal: abortController.signal,
          });
          abortController.signal.addEventListener("abort", resolve, { once: true });
        });
      }
      if (isCancelled) return;
      reportProgress(30);

      const images = Array.from(document.images);
      let completedImages = 0;
      const imageLoads = images.map(async (image) => {
        try {
          await image.decode();
        } catch {
          if (image.naturalWidth === 0) {
            console.error("Failed to load page image:", image.currentSrc || image.src);
          }
        } finally {
          completedImages += 1;
          reportProgress(30 + (completedImages / Math.max(images.length, 1)) * 50);
        }
      });
      await Promise.all(imageLoads);
      if (isCancelled) return;

      await document.fonts.ready;
      if (isCancelled) return;
      reportProgress(90);

      readyTimer = window.setTimeout(() => {
        if (isCancelled) return;
        onLoadProgress(100);
        onReady();
      }, 1000);
    }

    waitForPageReady();

    return () => {
      isCancelled = true;
      abortController.abort();
      window.clearTimeout(readyTimer);
    };
  }, [onLoadProgress, onReady]);

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f5f8f8]">
      <Header logoSrc={logoSrc} navbarLists={navbarLists} socials={socials} />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CounterSection />
        <NewsSection />
        <AppointmentsSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}

export default Home;
