export default function Testimoni() {
  return (
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
                <p className="text-xs text-slate-400">Mahasiswa Psikologi UI</p>
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
                <p className="text-xs text-slate-400">Teknik Informatika ITB</p>
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
  );
}
