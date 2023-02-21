import Image from "next/image"
import { PhoneArrowUpRightIcon } from '@heroicons/react/20/solid'


export default function Footer() {
    return (
        <div className="flex w-full bg-gradient-to-tr from-black to-black/80 py-24">
            <div className="flex flex-col md:flex-row max-w-6xl mx-auto w-full gap-12">
                <div className="flex flex-col md:flex-row md:w-1/2 gap-6">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <Image src={'/assets/logo.png'} width={150} height={150} className={'object-contain w-1/3 md:w-full'} />
                        <span className="text-xl text-white font-bold">{'PACKAGING'}</span>
                    </div>
                    <div className="flex flex-col justify-center text-white text-sm md:text-lg px-6 md:px-0">
                        <p className=" font-bold text-sm md:text-lg mb-2"> {'King of Advertising and Graphic Co.,Ltd.'}</p>
                        <p>{'บริษัท คิงออฟแอดเวอร์ไทซิ่งแอนด์กราฟฟิค จำกัด'}</p>
                        <p>{'เลขที่ 204/6-7 ถนนสุรวงศ์  แขวงสี่พระยา เขตบางรัก กรุงเทพฯ 10500'}</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:w-1/2 justify-center items-center px-6 md:px-0">
                    <div className="flex flex-col gap-4 w-full z-20">
                        <div className="flex flex-col md:flex-row w-full gap-4">
                            <a href="" className="flex items-center gap-4 w-full bg-green-600 px-6 py-4 rounded-full hover:scale-105 transition-transform transform  duration-300">
                                <PhoneArrowUpRightIcon className="w-6 h-6 fill-white" />
                                <span className="  font-bold text-white">{'085-664-4692'}</span>
                                <span className="  font-bold text-white">{'คุณฝน'}</span>
                            </a>
                            <a href="" className="flex items-center gap-4 w-full bg-green-600 px-6 py-4 rounded-full hover:scale-105 transition-transform transform  duration-300">
                                <PhoneArrowUpRightIcon className="w-6 h-6 fill-white" />
                                <span className="  font-bold text-white">{'065-214-8899'}</span>
                                <span className="  font-bold text-white">{'แนน'}</span>
                            </a>
                        </div>
                        <div className="flex flex-col md:flex-row w-full gap-4">
                            <a href="" className="flex items-center gap-4 w-full bg-green-600 px-6 py-4 rounded-full hover:scale-105 transition-transform transform  duration-300">
                                <PhoneArrowUpRightIcon className="w-6 h-6 fill-white" />
                                <span className="  font-bold text-white">{'099-419-1924'}</span>
                                <span className="  font-bold text-white">{'คุณเปา'}</span>
                            </a>
                            <a href="" className="flex items-center gap-4 w-full bg-green-600 px-6 py-4 rounded-full hover:scale-105 transition-transform transform  duration-300">
                                <PhoneArrowUpRightIcon className="w-6 h-6 fill-white" />
                                <span className="  font-bold text-white">{'088-501-8990'}</span>
                                <span className="  font-bold text-white">{'คุณพิม'}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}