import { Rocket, Award, Lock, CreditCard } from "lucide-react";

export default function WhyChooseUs() {
  return (
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
            <h3 className="text-xl font-bold mb-2 text-white">Lulusan Ahli</h3>
            <p className="text-slate-300 text-sm">
              Tim dari UI, ITB, UGM berpengalaman di bidangnya.
            </p>
          </div>
          <div className="card-why p-6 rounded-2xl text-center transition-all hover:border-blue-400/50 reveal">
            <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">100% Privasi</h3>
            <p className="text-slate-300 text-sm">
              Data dan identitas dijamin rahasia, tidak bocor.
            </p>
          </div>
          <div className="card-why p-6 rounded-2xl text-center transition-all hover:border-blue-400/50 reveal">
            <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-8 h-8 text-orange-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Harga Bersahabat</h3>
            <p className="text-slate-300 text-sm">
              Sesuai kantong mahasiswa, ada promo untuk first order.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
