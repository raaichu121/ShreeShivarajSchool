import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Curriculum from '@/components/Curriculum';
import Facilities from '@/components/Facilities';
import Admission from '@/components/Admission';
import Teachers from '@/components/Teachers';
import Gallery from '@/components/Gallery';
import News from '@/components/News';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Curriculum />
        <Facilities />
        <Admission />
        <Teachers />
        <Gallery />
        <News />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
