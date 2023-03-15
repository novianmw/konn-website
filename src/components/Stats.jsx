import { stats } from '../constant'

export default function Stats() {
    return (
        <section className='flex w-[100%] sm:flex-row flex-col pb-10 bg-gradient-to-b from-white to-teal-200'>
            {stats.map((stat, index) => (
                <div key={stat.id} className={`flex justify-center items-center flex-1 flex-row ${index === stats.length ? 'pb-0' : 'pb-5'} pb-0`}>
                    <h3 className='lg:text-xl sm:text-[15px] text-[10px] font-bold'>{stat.value}</h3>
                    <p className='lg:text-xl sm:text-[15px] text-[10px] ml-1 sm:ml-3 font-normal uppercase'>{stat.title}</p>
                </div>
            ))}
        </section>
    )
}
