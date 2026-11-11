const FeatureSection = () => {
    return (
        <section id="features" className="scroll-mt-40 px-6 py-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold  text-[#131418] max-w-7xl text-center leading-tight">
                    Apa saja Yang Feature Yang Tersedia?
                </h2>

                <div className="mt-10 grid grid-cols-4 gap-8">

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
                        <p className="mt-3 text-[#131418]/75 leading-relaxed">
                        Jantungku adalah sistem pakar yang membantu mengenali kemungkinan penyakit
                        jantung berdasarkan gejala yang kamu pilih. Hasilnya ditampilkan sebagai
                        tingkat keyakinan, lengkap dengan saran tindak lanjut.
                    </p>
                    </article>

                    <article className="rounded-3xl bg-[#F8DBD5] p-8 ">
                        <h3 className="text-xl font-semibold">Bagaimana cara kerjanya?</h3>
                        <p className="mt-3 text-[#131418]/75 leading-relaxed">
                            Jantungku adalah sistem pakar yang membantu mengenali kemungkinan penyakit
                            jantung berdasarkan gejala yang kamu pilih. Hasilnya ditampilkan sebagai
                            tingkat keyakinan, lengkap dengan saran tindak lanjut.
                        </p>
                    </article>

                    <article className="rounded-3xl bg-[#F8DBD5] p-8 ">
                        <h3 className="text-xl font-semibold">Bagaimana cara kerjanya?</h3>
                        <p  className="mt-3 text-[#131418]/75 leading-relaxed">
                            Jantungku adalah sistem pakar yang membantu mengenali kemungkinan penyakit
                            jantung berdasarkan gejala yang kamu pilih. Hasilnya ditampilkan sebagai
                            tingkat keyakinan, lengkap dengan saran tindak lanjut.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    )
}


export default FeatureSection;