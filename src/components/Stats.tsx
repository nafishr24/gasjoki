import { CheckCircle, Star, Clock } from "lucide-react";

export default function Stats() {
  return (
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
          <p className="text-slate-300 font-semibold mt-2">Tugas Terselesaikan</p>
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
  );
}
