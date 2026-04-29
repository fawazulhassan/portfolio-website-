import Navbar from '../components/Shared/Navbar';
import Hero from '../components/Home/Hero';
import Projects from '../components/Home/Projects';
import Technologies from '../components/Home/Technologies';
import Services from '../components/Home/Services';
import About from '../components/Home/About';
import Cta from '../components/Home/Cta';
import Footer from '../components/Shared/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Technologies />
      <Services />
      <About />
      <Cta />
      <Footer />
    </>
  );
}
