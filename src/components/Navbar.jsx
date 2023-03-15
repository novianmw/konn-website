import { useState } from 'react'
import { close, menu, logo } from '../assets/list'
import { navLinks } from '../constant'
import { ButtonWA } from '.'

export default function Navbar() {
    const [toggle, setToggle] = useState(false)

    return (
        <>
            <nav className='w-full flex justify-between fixed top-0 px-6 bg-gradient-to-b md:from-orange-50 md:via-white md:to-transparent from-orange-50 to-orange-50 md:pb-10 py-2 z-[2] flex-row'>
                <a href='/'>
                    <img src={logo} alt='logo' className='sm:w-32 w-20 my-3' />
                </a>
                <ul className='list none md:flex hidden justify-center items-center flex-1'>
                    {navLinks.map((nav, index) => (
                        <li key={nav.id} className={`font-normal cursor-pointer text-xl ${index === navLinks.length - 1 ? 'mr-0' : 'mr-14'} mr-0`}>
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
                <div className='md:flex justify-center items-center hidden'>
                    <ButtonWA />
                </div>
                <div className='md:hidden flex flex-1 justify-end items-center'>
                    <img
                        src={toggle ? close : menu}
                        alt='menu'
                        className='z-[2] w-[28px] h-[28px] object-contain'
                        onClick={() => setToggle((prev) => !prev)}
                    />
                </div>
                <div className={`${toggle ? 'flex' : 'hidden'} md:hidden z-[1] fixed w-full inset-0 mt-[70px] bg-black bg-opacity-50`}></div>
                <div
                    className={`${
                        toggle ? 'flex' : 'hidden'
                    } md:hidden w-full absolute top-16 left-0 border-t border-b border-b-slate-500 text-slate-500`}>
                    <ul className='w-full fixed left-0 bg-orange-50 z-[5]'>
                        {navLinks.map((nav) => (
                            <li key={nav.id} className='p-6 border-b-2 font-normal cursor-pointer text-lg text-center mb-0'>
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                        <div className='px-6 py-2 border-b-2 flex items-center justify-center font-normal cursor-pointer text-lg'>
                            <ButtonWA />
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    )
}
