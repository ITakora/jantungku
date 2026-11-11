const AboutSection = () => {
    return (
        <section id="about" className="scroll-mt-40 px-6 py-40">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold  text-[#131418] max-w-7xl text-center leading-tight">
                    Kenali Kondisi Jantungmu Dari Gejala Yang Kamu Rasakan
                </h2>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">

                    <article className="rounded-3xl bg-[#F8DBD5] p-8 flex flex-col">
                        <h3 className="text-xl font-semibold text-[#131418]">Apa itu Jantungku?</h3>
                        <p className="mt-3 text-[#131418]/75 leading-relaxed">
                            Jantungku adalah sistem pakar yang membantu mengenali kemungkinan penyakit
                            jantung berdasarkan gejala yang kamu pilih. Hasilnya ditampilkan sebagai
                            tingkat keyakinan, lengkap dengan saran tindak lanjut.
                        </p>
                        <p className="mt-auto pt-6 text-sm text-[#A7392A]">
                            Hasil diagnosa tidak menggantikan pemeriksaan dokter.
                        </p>
                    </article>


                    <article className="rounded-3xl bg-[#F8DBD5] p-8 ">
                        <h3 className="text-xl font-semibold">Bagaimana cara kerjanya?</h3>
                        <ol className="mt-5 space-y-4">
                            {[
                                'Pilih gejala yang sedang kamu rasakan.',
                                'Tentukan seberapa yakin kamu terhadap tiap gejala.',
                                'Lihat hasil diagnosa dan saran dari sistem.',
                            ].map((step, i) => (
                                <li key={step} className="flex items-start gap-4">
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E3523F] text-sm font-semibold">
                                        {i + 1}
                                    </span>
                                    <span className="pt-1 leading-relaxed">{step}</span>
                                </li>
                            ))}
                        </ol>
                    </article>
                </div>
            </div>
        </section>
    )
}


export default AboutSection;