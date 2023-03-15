import { feedback } from '../constant'

export default function Testimonials() {
    const FeedBackCard = ({content, name, title, img}) => (
        <div className="flex justify-between flex-col px-10 py-12 rounded-3xl max-w-[370px] mx-5">
            <p className="font-normal text-lg my-10 text-justify">
                {content}
            </p>
            <div className="flex flex-row">
                <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full'/>
                <div className="flex flex-col ml-4">
                    <h4 className="font-semibold text-xl">
                        {name}
                    </h4>
                    <h4 className="font-normal text-lg">
                        {title}
                    </h4>
                </div>
            </div>
        </div>
    )
    return <>
    <section id="testimonials" className="flex-col flex justify-center items-center md:py-32 py-10 bg-gradient-to-b from-sky-300 via-sky-300 to-orange-50 target:scroll-m-20">
        <div className="flex justify-center text-center items-center flex-col">
            <h1 className='text-3xl font-bold'>What people are saying about us</h1>
        </div>
        <div className="flex flex-wrap md:justify-start justify-center">
            {feedback.map((card) => (
                <FeedBackCard key={card.id} {...card} />
            ))}
        </div>
    </section>
    </>
}

