import { useState } from "react";
import { MessageCircle, HelpCircle } from "lucide-react";
import useScrollAnimation from "./hooks/useScrollAnimation";
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

  useScrollAnimation();

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
