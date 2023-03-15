import { whatsapp } from '../assets/list'

export default function ButtonWa() {
    return (
        <>
            <button className='flex border border-slate-500 bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text rounded-lg py-2 px-6 font-medium text-lg outline-none'>
                <a href="#contact" className='flex'>
                    <img src={whatsapp} alt='' className='mr-2' />
                    Contact
                </a>
            </button>
        </>
    )
}

