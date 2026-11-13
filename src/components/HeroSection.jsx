import {AnatomicalHeart} from "../assets/HeartAnimations.jsx"
import {Link} from "react-router";

const HeroSection = () => {
    return (
        <section id="hero" className=' bg-[#E4EBE8] min-h-screen flex items-center justify-center px-6 py-12'>
            <div className='max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-18 items-center '>
                <div className='flex flex-col items-start space-y-3 '>
                    <h1 className="text-4xl font-bold leading-tight  ">
                        Cintai jantungmu hari ini, <br />
                        Ia akan menjagamu seumur <br />
                        hidup.
                    </h1>
                    <p className="mt-2   pr-4 text-md ">
                        Skrining mandiri berbasis sistem pakar: jawab pertanyaan singkat <br />tentang keluhan Anda, lalu dapatkan hasil dan saran langkah berikutnya <br /> dalam bahasa yang mudah dipahami.
                    </p>

                    <Link to='/signin' className=" -ml-1 mt-4 p-3.5 shadow-xl rounded-3xl bg-[#1F6B5C] hover:bg-[#195A4D] text-white font-medium  transition">Mulai Sekarang </Link>

                </div>

                <div className='flex justify-center items-center w-full ml-25'>
                    <AnatomicalHeart className='' size={320}/>

                </div>

            </div>



        </section>
    )
}


export default HeroSection;