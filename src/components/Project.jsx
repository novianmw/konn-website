import { project } from "../constant"

export default function Project() {
    const ProjectCard = ({content, title, img}) => (
        <div className="w-full flex justify-between flex-col px-10 py-12 rounded-3xl max-w-[420px]">
            <img src={img} alt={title} className="w-[1280px]" />
            <div className="flex flex-col text-center my-5">
                <h3 className="font-semibold text-2xl">
                    {title}
                </h3>
                <p className="font-normal text-xl">
                    {content}
                </p>
            </div>
        </div>
    )
    return <>
        <section id="project" className="flex justify-center flex-col items-center md:py-32 py-10 target:scroll-m-20 bg-gradient-to-b from-white to-sky-300 ">
            <div className="flex justify-center items-center flex-col">
                <h1 className="mx-14 text-center text-3xl font-bold mb-5">
                    Project that we created
                </h1>
                <p className="mx-14 text-center text-xl font-normal">
                    We have more valuable customer that trust to our goal
                </p>
            </div>
            <div className="flex lg:flex-none md:flex-row flex-col md:justify-start justify-between">
                {project.map((card) => (
                    <ProjectCard key={card.id} {...card} />
                ))}
            </div>
            <div className="my-32 flex justify-center items-center">
                <h3 className="text-xl md:text-2xl">
                    And many more ...
                </h3>
            </div>
        </section>
    </>
}

