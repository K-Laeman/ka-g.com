'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'

const navItems = [
    { name: '/', title: 'หน้าแรก', path: '/' },
    { name: 'service/digital-offset', title: 'งานพิมพ์ระบบออฟเซ็ต', path: '/service/digital-offset' },
    { name: 'service/sticker', title: 'งานสติกเกอร์ม้วน', path: '/service/sticker' },
    { name: 'blog', title: 'บทความ', path: '/blogs' },
    { name: 'about', title: 'เกี่ยวกับเรา', path: '/about' },
    { name: 'contact', title: 'ติดต่อเรา', path: '/contact' },
]

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const router = useRouter()

    const handlerMenuOpen = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className="flex items-center w-full  md:h-24 bg-green-600 shadow-xl px-6 md:px-0">
            <div className="flex flex-row items-center justify-between max-w-6xl mx-auto w-full h-full ">
                <div className="flex flex-col w-fit">
                    {/* <Image src={'/assets/logo.png'} width={100} height={100} className="md:hidden w-16" ></Image> */}
                    <span className="md:block md:text-xl font-black uppercase">
                        {'King Packaging co., ltd'}
                    </span>
                    <span className="text-xs font-light capitalize">
                        {'Offset Printing, Slik Screen Printing'}
                    </span>
                </div>

                {/* Mobile */}
                <button
                    onClick={handlerMenuOpen}
                    className={'block md:hidden'}
                >
                    {
                        menuOpen ? <XMarkIcon className="h-6" /> : <Bars3Icon className="h-6 w-6" />
                    }
                </button>

                <div
                    style={{ transform: `${menuOpen ? 'translateX(0%)' : 'translateX(-100%)'}` }}
                    className="md:hidden absolute flex flex-col top-20 left-0 z-50 bg-black/90 w-screen min-h-screen transition-transform duration-500 ease-in-out"
                >
                    <div className="flex flex-col justify-between w-full h-[90vh] px-6 py-6">
                        <ul className="flex flex-col gap-6">
                            {
                                navItems.map((item, index) => (
                                    <Link
                                        onClick={handlerMenuOpen}
                                        key={index}
                                        href={item.path}
                                        className={`${router.asPath === item.name ? 'font-medium' : ' font-normal'} ' text-white  capitalize transition-colors duration-300 hover:text-opacity-50`}>
                                        {item.title}
                                    </Link>
                                ))
                            }
                        </ul>
                    </div>
                </div>


                {/* Desktop */}
                <ul className="hidden md:flex w-fit gap-6">
                    {
                        navItems.map((item, index) => (
                            <Link key={index} href={item.path} className={`${router.asPath === item.name ? 'font-medium' : ' font-normal'} ' text-black  capitalize transition-colors duration-300 hover:text-opacity-50`}>
                                {item.title}
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default NavBar