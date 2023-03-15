import { values } from '../constant'
import { strategi } from '../assets/list'

export default function Value() {
    const ValueCard = ({ icon, title, content }) => (
        <div className='flex flex-col rounded-lg py-3 mx-14'>
            <div className='w-16 h-16 m-5 rounded-full flex justify-center items-center'>
                <img src={icon} alt='' className='object-contain' />
            </div>
            <div className='flex flex-1 flex-col ml-3'>
                <h3 className='font-semibold text-xl mb-1 text-justify'>{title}</h3>
                <p className='font-normal text-lg mb-1 text-justify'>{content}</p>
            </div>
        </div>
    )
    return (
        <section className='flex justify-center flex-col items-start bg-white'>
            <div className='mx-14 md:mt-32 mt-14 flex-col text-justify'>
                <h1 className='text-3xl mb-5 font-bold'>Our Values</h1>
                <p className='text-xl mb-5'>
                    We believe the values below help guide our vision and daily interactions with each other. Our culture is seeded in the core tenet
                    of being good to people.
                </p>
            </div>
            <div className='flex flex-1 justify-between items-center w-full md:flex-row flex-col-reverse '>
                <div className='flex flex-wrap max-w-[600px]'>
                    {values.map((value, index) => (
                        <ValueCard key={value.id} {...value} index={index} />
                    ))}
                </div>
                <div className='sm:py-15 py-5 flex justify-center items-center'>
                    <img src={strategi} alt='strategi' className='w-full min-w-[300px]' />
                </div>
            </div>
        </section>
    )
}
