import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Preloader from './components/Preloader.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Featured from './components/Featured.jsx';
import Cards from './components/Cards.jsx';
import Features from './components/Features.jsx';
import Gallery from './components/Gallery.jsx';
import Testimonials from './components/Testimonials.jsx';
import Pricing from './components/Pricing.jsx';
import Faq from './components/Faq.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ScrollTop from './components/ScrollTop.jsx';

export default function App() {
  useEffect(() => {
    const onLoad = () => {
      // Images change the page height, so re-measure the scroll triggers.
      ScrollTrigger.refresh();

      // Correct the scroll position for URLs that contain a #hash.
      if (window.location.hash) {
        const section = document.querySelector(window.location.hash);
        if (section) {
          setTimeout(() => {
            const marginTop = parseInt(getComputedStyle(section).scrollMarginTop, 10) || 0;
            window.scrollTo({ top: section.offsetTop - marginTop, behavior: 'smooth' });
          }, 100);
        }
      }
    };

    if (document.readyState === 'complete') onLoad();
    else window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Featured />
        <Cards />
        <Features />
        <Gallery />
        <Testimonials />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
      <Preloader />
    </>
  );
}
