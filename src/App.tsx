import { useEffect, useState } from "react";
import { MessageCircle, HelpCircle } from "lucide-react";
import OrderForm from "./components/modals/OrderForm";
import FAQModal from "./components/modals/FAQModal";
import Navbar from "./components/layouts/Navbar";
import Hero from "./components/layouts/Hero";
import Stats from "./components/layouts/Stats";
import Profil from "./components/layouts/Profil";
import WhyChooseUs from "./components/layouts/WhyChooseUs";
import Layanan from "./components/layouts/Layanan";
import Testimoni from "./components/layouts/Testimoni";
import FinalCTA from "./components/layouts/FinalCTA";
import Footer from "./components/layouts/Footer";
import Button from "./components/ui/Button";

function App() {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  // Scroll Reveal and Counter Observers
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => revealObserver.observe(el));

    const counters = document.querySelectorAll(".counter");
    const counterObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseInt(el.getAttribute("data-target") || "0");
            let current = 0;
            const increment = target / 45;
            const updateCounter = () => {
              current += increment;
              if (current < target) {
                el.innerText = Math.floor(current).toString();
                requestAnimationFrame(updateCounter);
              } else {
                el.innerText = target.toString();
              }
            };
            updateCounter();
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => counterObserver.observe(c));

    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
    };
  }, []); // Run on mount to attach observers

  const pesanWA = (jasa: string) => {
    setSelectedService(jasa);
    setIsOrderFormOpen(true);
  };

  const scrollToLayanan = () => {
    document.getElementById("layanan")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Floating FAQ Button (Bottom Right Mobile, Bottom Left Desktop) */}
      <Button
        variant="floatingBlue"
        onClick={() => setIsFaqOpen(true)}
        className="fixed bottom-24 right-6 md:bottom-6 md:right-auto md:left-6 z-50"
      >
        <HelpCircle className="w-7 h-7 text-white" />
        <span className="absolute right-full mr-3 md:right-auto md:left-full md:mr-0 md:ml-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
          Tanya Jawab FAQ
        </span>
      </Button>

      {/* Floating WhatsApp Button (Bottom Right) */}
      <Button
        variant="floatingGreen"
        onClick={() => pesanWA("Konsultasi")}
        className="fixed bottom-6 right-6 z-50"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
          Chat Admin
        </span>
      </Button>

      <Navbar scrollToLayanan={scrollToLayanan} />
      <Hero scrollToLayanan={scrollToLayanan} />
      <Stats />
      <Profil />
      <WhyChooseUs />
      <Layanan pesanWA={pesanWA} />
      <Testimoni />
      <FinalCTA pesanWA={pesanWA} scrollToLayanan={scrollToLayanan} />
      <Footer pesanWA={pesanWA} />

      <OrderForm 
        isOpen={isOrderFormOpen} 
        onClose={() => setIsOrderFormOpen(false)} 
        service={selectedService} 
      />

      <FAQModal
        isOpen={isFaqOpen}
        onClose={() => setIsFaqOpen(false)}
      />
    </>
  );
}

export default App;
