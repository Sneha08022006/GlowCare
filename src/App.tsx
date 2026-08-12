import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import SkinQuiz from '@/components/SkinQuiz';
import Recommendation from '@/components/Recommendation';
import About from '@/components/About';
import Reviews from '@/components/Reviews';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FaceScanner from '@/components/FaceScanner';
export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink antialiased">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <SkinQuiz />
        <FaceScanner />
        <Recommendation />
        <About />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
