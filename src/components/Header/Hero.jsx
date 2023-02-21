import Image from "next/image"
import { PhoneArrowUpRightIcon } from '@heroicons/react/20/solid'


const Hero = () => {
    return (
        <div
            style={{ borderBottomLeftRadius: '40% 10%', borderBottomRightRadius: '40% 10%' }}
            className="flex flex-col md:flex-row w-full md:h-[680px] bg-gray-200 shadow-xl overflow-hidden py-12 md:py-0 mt-20">
            <div className="flex w-full md:w-1/2 px-6 md:px-0 ">
                <div className="flex flex-col items-center justify-center md:pl-36 gap-12">
                    <div className="flex flex-col gap-2 md:gap-4 w-full">
                        <h1 className="text-2xl md:text-4xl font-bold text-green-600">{'โรงพิมพ์มาตรฐานสากล'}</h1>
                        <h1 className="text-2xl md:text-4xl font-bold">{'อันดับต้นของไทย'}</h1>
                        <span className=" font-normal text-base md:text-xl w-fit md:w-full">{'โรงพิมพ์ผลิตสติ๊กเกอร์ม้วน ระบบ Flexo และงานกล่อง OFFSET บริการงานพิมพ์ครบวงจร ด้วยเครื่องพิมพ์ที่ทันสมัย ได้มาตรฐาน ISO ตอบโจทย์ทุกธุรกิจ'}</span>
                    </div>

                    <div className="flex flex-col gap-4 w-full z-20">
                        <div className="flex flex-col md:flex-row w-full gap-4">
                            <a href="" className="flex items-center gap-4 w-full bg-green-600 px-6 py-4 rounded-full hover:scale-105 transition-transform transform  duration-300">
                                <PhoneArrowUpRightIcon className="w-6 h-6 fill-white" />
                                <span className="  font-bold text-white">{'065-2148899'}</span>
                                <span className="  font-bold text-white">{'คุณแนน'}</span>
                            </a>
                            <a href="" className="flex items-center gap-4 w-full bg-green-600 px-6 py-4 rounded-full hover:scale-105 transition-transform transform  duration-300">
                                <PhoneArrowUpRightIcon className="w-6 h-6 fill-white" />
                                <span className="  font-bold text-white">{'099-4191924'}</span>
                                <span className="  font-bold text-white">{'คุณเปา'}</span>
                            </a>
                        </div>
                        <div className="flex flex-col md:flex-row w-full gap-4">
                            <a href="" className="flex items-center gap-4 w-full bg-green-600 px-6 py-4 rounded-full hover:scale-105 transition-transform transform  duration-300">
                                <PhoneArrowUpRightIcon className="w-6 h-6 fill-white" />
                                <span className="  font-bold text-white">{'065-4414150'}</span>
                                <span className="  font-bold text-white">{'คุณเอ้'}</span>
                            </a>
                            <a href="" className="flex items-center gap-4 w-full bg-green-600 px-6 py-4 rounded-full hover:scale-105 transition-transform transform  duration-300">
                                <PhoneArrowUpRightIcon className="w-6 h-6 fill-white" />
                                <span className="  font-bold text-white">{'099-505-2869'}</span>
                                <span className="  font-bold text-white">{'คุณบิ้วตี้'}</span>
                            </a>
                        </div>
                        <div className="flex flex-col md:flex-row w-full gap-4">
                            <a href="" className="flex items-center gap-4 w-full bg-green-600 px-6 py-4 rounded-full hover:scale-105 transition-transform transform  duration-300">
                                <PhoneArrowUpRightIcon className="w-6 h-6 fill-white" />
                                <span className="  font-bold text-white">{'085-6644692'}</span>
                                <span className="  font-bold text-white">{'คุณฝน'}</span>
                            </a>
                            <a href="" className="flex items-center gap-4 w-full bg-green-600 px-6 py-4 rounded-full hover:scale-105 transition-transform transform  duration-300">
                                <PhoneArrowUpRightIcon className="w-6 h-6 fill-white" />
                                <span className="  font-bold text-white">{'080-0816055'}</span>
                                <span className="  font-bold text-white">{'คุณที'}</span>
                            </a>
                        </div>
                        {/* <div className="flex w-full gap-4 pr-4 border-t-2 border-gray-300 pt-4">
                            <a href="" className="flex items-center gap-4 w-full md:w-1/2 bg-green-600 px-6 py-4 rounded-full hover:scale-105 transition-transform transform  duration-300">
                                <span className="  font-bold text-white">{'line'}</span>
                                <span className="  font-bold text-white">{'@kingpack'}</span>
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="relative hidden md:flex md:w-1/2">
                <span className=" absolute w-full h-full bg-gradient-to-r from-gray-200 "></span>
                <Image src={'/assets/hero/bg.png'} height={680} width={1280} className={' object-cover w-full h-[680px]'} />
            </div>
        </div>
    )
}

export default Hero