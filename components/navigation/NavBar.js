import navItems from "./navItems"

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"

const NavBar = () => {
    const router = useRouter()
    const activePath = router.asPath.split("/");
    console.log(activePath[1])

    return (
        <nav className=" fixed flex w-full bg-white shadow-xl z-50 px-6 md:px-0">
            <div className="flex justify-between items-center max-w-6xl mx-auto w-full py-4">
                <Link href={'/'} className="flex items-center gap-2 text-3xl">
                    <Image src={'/logo.png'} width={80} height={80} />
                    <h1 className=" font-semibold uppercase">{'pac'}<span className="text-green-500 font-bold">{'kag'}</span>{'ing'}</h1>
                </Link>
                <ul className="flex gap-6">
                    {
                        navItems.map((item, index) => {
                            return (

                                <Link key={index} href={item.path}>
                                    <li className="text-lg">
                                        {item.title}
                                    </li>
                                </Link>

                            )
                        })
                    }
                </ul>
            </div>
        </nav >
    )
}

export default NavBar