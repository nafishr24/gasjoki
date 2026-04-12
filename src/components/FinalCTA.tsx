import { Clock9, Send } from "lucide-react";

interface FinalCTAProps {
  pesanWA: (jasa: string) => void;
  scrollToLayanan: () => void;
}

export default function FinalCTA({ pesanWA, scrollToLayanan }: FinalCTAProps) {
  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto max-w-4xl text-center card-vibrant rounded-3xl p-10 md:p-14 border border-blue-500/40 reveal">
        <Clock9 className="w-14 h-14 text-orange-400 mx-auto mb-4" />
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Jangan Tunda Lagi!
        </h2>
        <p className="text-slate-300 text-lg mb-6">
          Deadline menghantui? GasJoki.id siap bantu 24 jam. Klik tombol dibawah
          untuk konsultasi GRATIS.
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
  );
}
