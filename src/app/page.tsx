import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyEchoAI from '../components/WhyEchoAI';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <WhyEchoAI />
      <ContactCTA />
      <Footer />
    </main>
  );
}
