const FeatureSection = () => {
    return (
        <section id="features" className=" bg-[#E4EBE8] scroll-mt-40 px-6 py-68">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold  text-[#131418] max-w-7xl text-center leading-tight">
                    Apa saja Yang Feature Yang Tersedia?
                </h2>

                <div className="mt-10 grid grid-cols-2 gap-8">

                    <article className="rounded-3xl bg-[#F8F8F8] p-8 flex flex-col shadow-md">
                        <h3 className="text-xl font-semibold text-[#131418]">Data yang Aman</h3>
                        <p className="mt-3 text-[#131418]/75 leading-relaxed">
                            Data di akses secara offline karena data yang disimpan bukan kedalam sebuah server, melainkan kedalam broser anda masing masing
                        </p>

                    </article>


                    <article className="rounded-3xl bg-[#F8F8F8] p-8 shadow-md">
                        <h3 className="text-xl font-semibold">Memberikan Saran Setelah skrining</h3>
                        <p className="mt-3 text-[#131418]/75 leading-relaxed">
                        Setelah anda menginput gejala berdasarkan apa yang anda alami, kami memberikan beberapa saran sesuai dengan apa yang anda alami
                    </p>
                    </article>

                    <article className="rounded-3xl bg-[#F8F8F8] p-8 shadow-md">
                        <h3 className="text-xl font-semibold">History anda tersimpan</h3>
                        <p className="mt-3 text-[#131418]/75 leading-relaxed">
                            History anda tersimpan dan bisa dilihat secara mudah, karena kami menggunakan bar diagram yang mudah dibaca dan dilihat
                        </p>
                    </article>

                    <article className="rounded-3xl bg-[#F8F8F8] p-8 shadow-md">
                        <h3 className="text-xl font-semibold">Sesuai dengan Data</h3>
                        <p  className="mt-3 text-[#131418]/75 leading-relaxed">
                            Hasil yang anda terima sesuai dengan data yang diperoleh, dan sesuai dengan perhitungan menggunakan rumus yang sudah dipakai global
                        </p>
                    </article>
                </div>
            </div>
        </section>
    )
}


export default FeatureSection;