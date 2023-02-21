import Link from "next/link"
import Image from "next/image"

export default function Service() {
    return (
        <div className="flex flex-col w-full py-12 md:py-24 gap-12">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl font-light">{'เลือกชม'}</h1>
                <h1 className="text-3xl font-bold">{'ผลงานจากลูกค้า'}</h1>
                <h1 className="text-3xl font-bold">{'ของ'}<span className="text-green-600 font-bold">{' KING PACKING'}</span></h1>
            </div>
            <div className="flex flex-col md:flex-row max-w-6xl mx-auto w-full gap-12 px-6 md:px-0">
                <div className="flex flex-col gap-6 justify-center items-center md:w-1/2 group">
                    <Link href={'/service/digital-offset'} className="flex w-full h-[20rem] md:h-[26rem] bg-slate-50 hover:scale-105 transition-transform duration-300">
                        <Image src='/assets/product/digital-offset/poster-08.webp' width={800} height={800} className='w-[30rem] object-cover rounded-3xl' />
                    </Link>
                    <span className="text-xl font-bold group-hover:text-green-600">{'งานพิมพ์ระบบดิจิตอล/ออฟเซ็ท'}</span>
                </div>
                <div className="flex flex-col gap-6 justify-center items-center md:w-1/2 group">
                    <Link href={'/service/sticker'} className="flex w-full h-[20rem] md:h-[26rem] bg-slate-50 hover:scale-105 transition-transform duration-300">
                        <Image src='/assets/product/sticker/sticker-15.webp' width={800} height={800} className='w-[30rem] object-cover rounded-3xl' />
                    </Link>
                    <span className="text-xl font-bold group-hover:text-green-600">{'สติกเกอร์ม้วน'}</span>
                </div>
            </div>
        </div>
    )
}