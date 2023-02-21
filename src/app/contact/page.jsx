import { PhoneArrowUpRightIcon } from '@heroicons/react/20/solid'

export default function About() {
    return (
        <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto py-12 md:py-24 mt-24">
            <div className="flex flex-col md:w-1/2 gap-4 px-6 md:px-0">
                <h1 className="text-5xl font-bold">{'ติดต่อเรา'}</h1>
                <p className="text-xl text-gray-800">
                    {`KING PACKAGING CO.,LTD
                        บริษัท คิงแพคเกจจิ้ง
                        เลขที่ 33 เพชรเกษม 41 แขวงบางแค เขตบางแค เขตบางรัก กรุงเทพฯ 10160`}
                </p>
                <div className="flex flex-col py-12 w-full">
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
                        <div className="flex w-full gap-4 pr-4 border-t-2 border-gray-300 pt-4">
                            <a href="" className="flex items-center gap-4 w-full md:w-1/2 bg-green-600 px-6 py-4 rounded-full hover:scale-105 transition-transform transform  duration-300">
                                <span className="  font-bold text-white">{'line'}</span>
                                <span className="  font-bold text-white">{'@kingpack'}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex md:w-1/2 px-6 md:px-0">
                <div className="flex flex-col w-full z-10 items-center justify-center">
                    <div className="flex w-full md:w-[28rem] h-[28rem] md:rounded-2xl overflow-hidden">
                        <iframe
                            src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.8440773625166!2d100.5224521146337!3d13.727888201546248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e298d3e7d61789%3A0x35cc8a775f2ea1ec!2sKing%20of%20Advertising%20and%20Graphic!5e0!3m2!1sen!2sth!4v1668743045804!5m2!1sen!2sth'}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div >
            </div>
        </div>
    )
}