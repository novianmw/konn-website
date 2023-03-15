import { Testimonials, Contact, HeroLanding, Navbar, Stats, About, Value, Project, Footer } from './components'

function App() {
    return (
        <section className='w-full overflow-hidden'>
            <div className='md:px-14 px-5 flex justify-center items-center w-full'>
                <Navbar />
            </div>
            <div className='flex justify-center items-center w-full mt-20'>
                <HeroLanding />
            </div>
            <div className='justify-center items-center w-full'>
                <Stats />
                <About />
                <Value />
                <Project/>
                <Testimonials />
                <Contact/>
                <Footer/>
            </div>
        </section>
    )
}

export default App
