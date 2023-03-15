import { heroImage } from '../assets/list'

export default function HeroLanding() {
    return (
        <section className='flex flex-col sm:pt-10 pt-5'>
            <div className='flex justify-center items-center flex-col flex-1 z-[1]'>
                <h1 className='md:text-6xl sm:text-3xl text-2xl font-bold text-center pb-3'>
                    Make a website to provide your business
                </h1>
                <p className='md:text-2xl sm:text-xl text-lg font-normal text-center xl:mr-0 lg:mr-56 mr-0'>
                    our service is to create a website for make you business's market growing up
                </p>
            </div>
            <div className='flex relative z-0 lg:-top-20 top-0 justify-center items-center sm:py-15 py-5'>
                <img src={heroImage} alt='hero image' className='w-full min-w-[300px] ' />
            </div>
        </section>
    )
}
