import { useEffect, useState } from "react";

interface NavbarProps {
  scrollToLayanan: () => void;
}

export default function Navbar({ scrollToLayanan }: NavbarProps) {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-xl border-b border-white/10 ${
        navBg ? "bg-[#0A1123]" : "bg-[#051231]"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <img
          src="/images/logo.webp"
          alt="GasJoki.id"
          className="h-16 md:h-20 w-auto object-contain"
        />

        <div className="hidden md:flex space-x-8 font-semibold">
          <a
            href="#beranda"
            className="hover:text-blue-400 transition duration-300 text-white"
          >
            Beranda
          </a>
          <a
            href="#profil"
            className="hover:text-blue-400 transition duration-300 text-white"
          >
            Tentang
          </a>
          <a
            href="#layanan"
            className="hover:text-blue-400 transition duration-300 text-white"
          >
            Layanan
          </a>
          <a
            href="#testimoni"
            className="hover:text-blue-400 transition duration-300 text-white"
          >
            Testimoni
          </a>
        </div>
        <button
          onClick={scrollToLayanan}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-md hover:shadow-blue-500/30 transform hover:scale-105"
        >
          Gas Order!
        </button>
      </div>
    </nav>
  );
}
