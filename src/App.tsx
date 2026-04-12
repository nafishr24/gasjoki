import { useEffect, useState } from "react";
import {
  MessageCircle,
  Zap,
  Users,
  CheckCircle,
  Star,
  Clock,
  Crown,
  BadgeCheck,
  ShieldCheck,
  FileText,
  Repeat,
  Rocket,
  Award,
  Lock,
  CreditCard,
  BookOpen,
  GraduationCap,
  ScrollText,
  Gift,
  Clock9,
  Send,
  Mail,
  HelpCircle,
} from "lucide-react";
import OrderForm from "./components/OrderForm";
import FAQModal from "./components/FAQModal";

function App() {
  const [navBg, setNavBg] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  // Scroll Navbar effect
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

  // Typewriter effect
  useEffect(() => {
    const texts = [
      "Joki Tugas Cepat & Akurat",
      "Bebas Deadline & Stress",
      "Skripsi Auto ACC",
      "Nilai Memuaskan Tanpa Ribet",
    ];
    let idx = 0;
    let charIndex = 0;
    let currentText = "";
    let timeoutId: number;

    const typeWriter = () => {
      if (charIndex < texts[idx].length) {
        currentText += texts[idx].charAt(charIndex);
        setTypedText(currentText);
        charIndex++;
        timeoutId = setTimeout(typeWriter, 80);
      } else {
        timeoutId = setTimeout(() => {
          charIndex = 0;
          currentText = "";
          idx = (idx + 1) % texts.length;
          setTypedText("");
          typeWriter();
        }, 2500);
      }
    };

    typeWriter();

    return () => clearTimeout(timeoutId);
  }, []);

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
      { threshold: 0.15 },
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
      { threshold: 0.5 },
    );
    counters.forEach((c) => counterObserver.observe(c));

    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
    };
  }); // Run after render to catch new DOM elements if any, though it's static structure here.

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
      <button
        onClick={() => setIsFaqOpen(true)}
        className="fixed bottom-24 right-6 md:bottom-6 md:right-auto md:left-6 z-50 bg-blue-600 p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-700 transition-all duration-300 float-wa group"
      >
        <HelpCircle className="w-7 h-7 text-white" />
        <span className="absolute right-full mr-3 md:right-auto md:left-full md:mr-0 md:ml-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
          Tanya Jawab FAQ
        </span>
      </button>

      {/* Floating WhatsApp Button (Bottom Right) */}
      <button
        onClick={() => pesanWA("Konsultasi")}
        className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 transition-all duration-300 float-wa group"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
          Chat Admin
        </span>
      </button>

      {/* Navbar */}
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

      {/* Hero Section */}
      <section
        id="beranda"
        className="relative pt-36 pb-20 px-6 overflow-hidden"
      >
        <div className="absolute top-40 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[130px]"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-orange-500/15 rounded-full blur-[120px]"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-semibold backdrop-blur-sm mb-6">
            ⚡ 24/7 Siap Bantu ⚡
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white">
            BUAT APA{" "}
            <span className="text-orange-500 underline decoration-blue-500 decoration-4">
              PUSING
            </span>
            <br />& BEGADANG?!
          </h1>
          <div className="text-xl md:text-2xl text-slate-300 mb-4">
            <span id="typewriter" className="font-bold text-blue-400">
              {typedText}
            </span>
            <span className="typed-cursor"></span>
          </div>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Ratusan mahasiswa & pelajar sudah terbantu. Dapatkan nilai maksimal
            tanpa ribet.{" "}
            <span className="text-orange-400 font-bold">#GasTerus</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={scrollToLayanan}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-xl flex items-center gap-2"
            >
              <Zap className="w-5 h-5" /> Pesan Sekarang
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("testimoni")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-orange-500/50 hover:bg-orange-500/20 text-orange-400 font-semibold py-3 px-7 rounded-full transition-all flex items-center gap-2"
            >
              <Users className="w-5 h-5 text-orange-400" /> Lihat Testimoni
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 px-6 container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="card-vibrant rounded-2xl p-6 reveal">
            <CheckCircle className="w-10 h-10 text-blue-400 mx-auto mb-3" />
            <div className="text-4xl md:text-5xl font-black text-white">
              <span className="counter" data-target="847">
                0
              </span>
              +
            </div>
            <p className="text-slate-300 font-semibold mt-2">
              Tugas Terselesaikan
            </p>
          </div>
          <div className="card-vibrant rounded-2xl p-6 reveal">
            <Star className="w-10 h-10 text-orange-400 mx-auto mb-3" />
            <div className="text-4xl md:text-5xl font-black text-white">
              <span className="counter" data-target="98">
                0
              </span>
              %
            </div>
            <p className="text-slate-300 font-semibold mt-2">Kepuasan Klien</p>
          </div>
          <div className="card-vibrant rounded-2xl p-6 reveal">
            <Clock className="w-10 h-10 text-blue-400 mx-auto mb-3" />
            <div className="text-4xl md:text-5xl font-black text-white">
              <span className="counter" data-target="24">
                0
              </span>
              /7
            </div>
            <p className="text-slate-300 font-semibold mt-2">Dukungan Cepat</p>
          </div>
        </div>
      </section>

      {/* Profil Section */}
      <section id="profil" className="py-12 px-6 relative">
        <div className="container mx-auto max-w-5xl card-vibrant rounded-[2.5rem] p-8 md:p-10 border border-blue-500/30 relative overflow-hidden reveal">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  src="/images/foto.webp"
                  alt="Founder GasJoki"
                  className="w-56 h-56 md:w-64 md:h-64 rounded-3xl object-cover border-4 border-blue-500/40 shadow-2xl transform hover:scale-105 transition duration-500"
                />
                <div className="absolute -bottom-3 -right-3 bg-orange-500 rounded-full p-2 shadow-lg">
                  <Crown className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                Moh.Nafis Husen Romadani, S.Pd.
              </h2>
              <p className="text-blue-300 font-semibold mb-4 flex items-center gap-2">
                <BadgeCheck className="w-5 h-5" /> Founder & Lead Academic
                Specialist
              </p>
              <div className="text-slate-300 leading-relaxed space-y-4 text-base text-justify">
                <p>
                  Bukan sekadar joki biasa. Kami merupakan tim profesional
                  dengan member lulusan kampus terbaik, paham betul standar
                  akademik dari sekolah hingga pascasarjana. Didirikan 2024,{" "}
                  <span className="text-white font-bold">GasJoki.id</span> hadir
                  karena satu keyakinan:{" "}
                  <span className="text-orange-300">
                    "Tugas berat bukan berarti harus mengorbankan kesehatan
                    mental dan waktu istirahat."
                  </span>
                </p>
                <p>
                  Setiap pengerjaan melalui 3 tahap: riset mendalam, penulisan
                  sesuai standar ilmiah, dan cek turnitin. Kami menjaga privasi
                  dan menjamin orisinalitas. Kamu tinggal duduk manis, kami gas
                  pol!
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="bg-blue-500/20 px-3 py-1 rounded-full text-sm flex items-center gap-1 text-slate-200">
                    <ShieldCheck className="w-4 h-4" /> 100% Aman
                  </span>
                  <span className="bg-orange-500/20 px-3 py-1 rounded-full text-sm flex items-center gap-1 text-slate-200">
                    <FileText className="w-4 h-4" /> Anti Plagiat
                  </span>
                  <span className="bg-green-500/20 px-3 py-1 rounded-full text-sm flex items-center gap-1 text-slate-200">
                    <Repeat className="w-4 h-4" /> Revisi Gratis
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 reveal">
            <h2 className="text-4xl font-extrabold text-white">
              Kenapa Pilih <span className="gradient-text">GasJoki.id</span>?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mt-3 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-why p-6 rounded-2xl text-center transition-all hover:border-blue-400/50 reveal">
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Super Cepat</h3>
              <p className="text-slate-300 text-sm">
                Deadline mepet? Kami bisa kerjakan dalam hitungan jam.
              </p>
            </div>
            <div className="card-why p-6 rounded-2xl text-center transition-all hover:border-blue-400/50 reveal">
              <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Lulusan Ahli
              </h3>
              <p className="text-slate-300 text-sm">
                Tim dari UI, ITB, UGM berpengalaman di bidangnya.
              </p>
            </div>
            <div className="card-why p-6 rounded-2xl text-center transition-all hover:border-blue-400/50 reveal">
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                100% Privasi
              </h3>
              <p className="text-slate-300 text-sm">
                Data dan identitas dijamin rahasia, tidak bocor.
              </p>
            </div>
            <div className="card-why p-6 rounded-2xl text-center transition-all hover:border-blue-400/50 reveal">
              <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Harga Bersahabat
              </h3>
              <p className="text-slate-300 text-sm">
                Sesuai kantong mahasiswa, ada promo untuk first order.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan Section */}
      <section id="layanan" className="py-16 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-14 reveal">
            <h2 className="text-4xl font-extrabold text-white">
              <span className="fire-emoji">🔥</span> Layanan{" "}
              <span className="gradient-text">Unggulan</span>{" "}
              <span className="fire-emoji">🔥</span>
            </h2>
            <p className="text-slate-400 mt-2">
              Pilih layanan sesuai kebutuhan akademikmu
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="card-vibrant rounded-3xl p-7 transition-all hover:border-blue-400/70 reveal">
              <BookOpen className="w-12 h-12 text-blue-400 mb-5" />
              <h3 className="text-2xl font-bold mb-3 text-white">
                Tugas Sekolah
              </h3>
              <p className="text-slate-300 mb-4 text-sm">
                PR, Laporan praktikum, resume, hingga presentasi. SMP/SMA/SMK.
              </p>
              <ul className="text-sm text-slate-300 mb-6 space-y-1">
                <li>✓ Pengerjaan 1x24 jam</li>
                <li>✓ Format rapi & siap kumpul</li>
              </ul>
              <button
                onClick={() => pesanWA("Tugas Sekolah")}
                className="w-full py-3 bg-slate-800/80 hover:bg-blue-600 rounded-xl font-bold transition-all glow-blue text-white"
              >
                Pesan Sekarang →
              </button>
            </div>
            {/* Card 2 Best Seller */}
            <div className="card-vibrant rounded-3xl p-7 relative border-2 transform md:-translate-y-3 shadow-2xl reveal blinking-border">
              <div className="absolute -top-4 left-6 bg-orange-500 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wide shadow-lg">
                ⭐ BEST SELLER
              </div>
              <GraduationCap className="w-12 h-12 text-orange-400 mb-5" />
              <h3 className="text-2xl font-bold mb-3 text-white">
                Tugas Kuliah
              </h3>
              <p className="text-slate-300 mb-4 text-sm">
                Makalah, jurnal, studi kasus, SPSS, Matlab, dan analisis data.
              </p>
              <ul className="text-sm text-slate-300 mb-6 space-y-1">
                <li>✓ Dosen ahli & sumber jurnal terpercaya</li>
                <li>✓ Turnitin &lt; 20%</li>
              </ul>
              <button
                onClick={() => pesanWA("Tugas Kuliah")}
                className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl font-bold transition-all shadow-lg glow-orange text-white"
              >
                Gas Sekarang!
              </button>
            </div>
            {/* Card 3 */}
            <div className="card-vibrant rounded-3xl p-7 transition-all hover:border-blue-400/70 reveal">
              <ScrollText className="w-12 h-12 text-blue-400 mb-5" />
              <h3 className="text-2xl font-bold mb-3 text-white">
                Skripsi & Tesis
              </h3>
              <p className="text-slate-300 mb-4 text-sm">
                Bimbingan Bab 1-5, olah data kuantitatif/kualitatif, revisi,
                sidang.
              </p>
              <ul className="text-sm text-slate-300 mb-6 space-y-1">
                <li>✓ Konsultasi via zoom/wa</li>
                <li>✓ Revisi tanpa batas sampai lulus</li>
              </ul>
              <button
                onClick={() => pesanWA("Skripsi/Tesis")}
                className="w-full py-3 bg-slate-800/80 hover:bg-blue-600 rounded-xl font-bold transition-all glow-blue text-white"
              >
                Konsultasi Gratis
              </button>
            </div>
          </div>
          {/* promo banner */}
          <div className="mt-12 text-center bg-gradient-to-r from-blue-900/40 to-orange-900/40 p-4 rounded-2xl backdrop-blur-sm border border-blue-400/40 reveal">
            <p className="text-white font-semibold flex items-center justify-center gap-2 flex-wrap">
              <Gift className="w-5 h-5" /> PROMO KHUSUS: Potongan 15% untuk
              pemesanan pertama + GRATIS cek plagiarisme!
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimoni" className="py-16 px-6 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 reveal">
            <h2 className="text-4xl font-extrabold text-white">
              💬 Apa Kata <span className="gradient-text">Mereka?</span>
            </h2>
            <p className="text-slate-400">
              Dipercaya 800+ klien dari berbagai universitas & sekolah
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-testi p-6 rounded-2xl reveal">
              <div className="flex items-center gap-2 text-orange-400 mb-3">
                ★★★★★
              </div>
              <p className="text-slate-200 italic">
                "Skripsi saya beres dalam 2 minggu! Tim GasJoki sangat
                profesional, revisi dikit langsung ACC. Rekomendasi banget!"
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/30 flex items-center justify-center font-bold text-white">
                  DA
                </div>
                <div>
                  <p className="font-bold text-white">Dina A.</p>
                  <p className="text-xs text-slate-400">
                    Mahasiswa Psikologi UI
                  </p>
                </div>
              </div>
            </div>
            <div className="card-testi p-6 rounded-2xl reveal">
              <div className="flex items-center gap-2 text-orange-400 mb-3">
                ★★★★★
              </div>
              <p className="text-slate-200 italic">
                "Tugas kuliah numpuk, saya order 3 makalah sekaligus. Hasilnya
                memuaskan, nggak ada revisi berarti. Thank you GasJoki!"
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full bg-orange-500/30 flex items-center justify-center font-bold text-white">
                  RA
                </div>
                <div>
                  <p className="font-bold text-white">Rizky F.</p>
                  <p className="text-xs text-slate-400">
                    Teknik Informatika ITB
                  </p>
                </div>
              </div>
            </div>
            <div className="card-testi p-6 rounded-2xl reveal">
              <div className="flex items-center gap-2 text-orange-400 mb-3">
                ★★★★★
              </div>
              <p className="text-slate-200 italic">
                "Awalnya ragu, ternyata amanah banget. Olah data SPSS selesai 3
                jam, dan dijelasin step by step. Top markotop!"
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/30 flex items-center justify-center font-bold text-white">
                  SN
                </div>
                <div>
                  <p className="font-bold text-white">Siti N.</p>
                  <p className="text-xs text-slate-400">Ekonomi UGM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto max-w-4xl text-center card-vibrant rounded-3xl p-10 md:p-14 border border-blue-500/40 reveal">
          <Clock9 className="w-14 h-14 text-orange-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Jangan Tunda Lagi!
          </h2>
          <p className="text-slate-300 text-lg mb-6">
            Deadline menghantui? GasJoki.id siap bantu 24 jam. Klik tombol
            dibawah untuk konsultasi GRATIS.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <button
              onClick={() => pesanWA("Konsultasi Gratis")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg transition transform hover:scale-105 shadow-2xl flex items-center gap-2"
            >
              <Send className="w-5 h-5" /> Konsultasi Sekarang
            </button>
            <button
              onClick={scrollToLayanan}
              className="border border-blue-500 hover:bg-blue-500/20 text-white px-8 py-4 rounded-full font-semibold transition"
            >
              Lihat Layanan
            </button>
          </div>
          <p className="text-slate-500 text-sm mt-6">
            *Garansi uang kembali jika tidak sesuai kesepakatan
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-black/40">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <img
              src="/images/logo.webp"
              alt="GasJoki.id"
              className="h-20 md:h-25 w-auto object-contain mx-auto md:mx-0"
            />
            <p className="text-slate-500 text-sm mt-2">#GasTerusTanpaBeban</p>
          </div>
          <div className="flex space-x-5">
            <a
              href="https://instagram.com/gasjoki.id"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white rounded-full transition-all flex items-center justify-center relative top-[-4px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <button
              id="waFooterLink"
              onClick={() => pesanWA("Konsultasi")}
              className="p-3 bg-green-600/20 hover:bg-green-600 text-green-400 hover:text-white rounded-full transition-all"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
            <a
              href="mailto:nafishusenromadani@gmail.com"
              className="p-3 bg-slate-700/30 hover:bg-slate-600 text-slate-300 rounded-full transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-slate-600 text-sm">
          &copy; 2025 GasJoki.id - Solusi Cerdas Akademik. All rights reserved.
        </div>
      </footer>

      <OrderForm
        isOpen={isOrderFormOpen}
        onClose={() => setIsOrderFormOpen(false)}
        service={selectedService}
      />

      <FAQModal isOpen={isFaqOpen} onClose={() => setIsFaqOpen(false)} />
    </>
  );
}

export default App;
