import {AnatomicalHeart} from "../assets/HeartAnimations.jsx"

const HeroSection = () => {
    return (
        <section id="hero" className='min-h-screen flex items-center justify-center px-6 py-12'>
            <div className='max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-18 items-center '>
                <div className='flex flex-col items-start space-y-3 '>
                    <h1 className="text-4xl font-bold leading-tight  ">
                        Cintai jantungmu hari ini, <br />
                        Ia akan menjagamu seumur <br />
                        hidup.
                    </h1>
                </div>

                <div className='flex justify-center items-center w-full ml-25'>
                    <AnatomicalHeart className='' size={320}/>

                </div>

            </div>



        </section>
    )
}


export default HeroSection;