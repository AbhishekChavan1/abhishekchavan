
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Gallery from '../components/Gallery';
import Profiles from '../components/Profiles';
import Contact from '../components/Contact';
import BlogPreview from '../components/BlogPreview';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Gallery />
      <BlogPreview />
      <Profiles />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
