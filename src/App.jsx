import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import LogoStrip from './components/LogoStrip.jsx';
import Intelligence from './components/Intelligence.jsx';
import Enterprise from './components/Enterprise.jsx';
import Customers from './components/Customers.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <Intelligence />
        <Enterprise />
        <Customers />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
