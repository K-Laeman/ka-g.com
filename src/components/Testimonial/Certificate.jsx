import Image from "next/image"

export default function Certificate() {
    return (
        <div className="relative flex w-full bg-gray-100 pt-24 pb-12 overflow-hidden">
            <span className="absolute -rotate-45 top-44 -right-44 flex w-[45rem] h-[45rem] bg-gradient-to-b from-white rounded-full"></span>
            <span className="absolute rotate-45 -bottom-20 -left-44 flex w-[45rem] h-[45rem] bg-gradient-to-b from-white rounded-full"></span>


            <div className="flex flex-col w-full max-w-6xl mx-auto z-10">
                <div className="flex flex-col w-full items-center gap-4">
                    <h1 className="text-3xl font-bold">{'มั่นใจในทุกกระบวนการ'}</h1>
                    <h1 className="text-4xl font-bold text-green-600">{'ด้วยมาตรฐาน ISO'}</h1>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-12 overflow-x-scroll">
                    <div className="flex flex-col md:w-1/2 px-12 py-12 gap-6 justify-center items-center">
                        <Image src={'/assets/certificate/cert-01.png'} width={'260'} height={'600'} className='w-full'></Image>
                        <div className="flex flex-col items-center">
                            <h1 className="text-green-600 font-bold ">{'ISO 9001:2015'}</h1>
                            <span>{'certificated by ICIM'}</span>
                        </div>
                    </div>
                    <div className="flex flex-col md:w-1/2 px-12 py-12 gap-6 justify-center items-center">
                        <Image src={'/assets/certificate/cert-02.png'} width={'260'} height={'600'} className='w-full'></Image>
                        <div className="flex flex-col items-center">
                            <h1 className="text-green-600 font-bold">{'CODEX HACCP & GMP'}</h1>
                            <span>{'certificated by BSI'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}