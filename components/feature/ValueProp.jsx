import Image from "next/image"
import Link from "next/link"

const ValueProposition = () => {
    return (
        <section className="relative flex justify-center w-full md:h-[890px] overflow-hidden py-12">
            <span style={{ 'borderTopLeftRadius': '50% 100%', 'borderTopRightRadius': '50% 100%' }} className="absolute top-0 flex w-[150%] h-[10rem] bg-green-50 z-0"></span>
            <span className="absolute hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:flex w-64 h-64 items-center justify-center rounded-full bg-gradient-to-br from-green-500 via-yellow-200 to-green-400 z-20 shadow-xl"></span>
            <span className="absolute hidden md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:flex w-60 h-60 items-center justify-center rounded-full bg-white z-20">
                <Image src='/logo.png' width={150} height={150} className="object-contain" />
            </span>
            <span style={{ 'borderBottomLeftRadius': '50% 100%', 'borderBottomRightRadius': '50% 100%' }} className="absolute bottom-0 flex w-[150%] h-[10rem] bg-green-50 z-0"></span>

            <div className="flex flex-col w-full bg-green-50 z-10 mt-6">
                <div className="flex flex-col w-full justify-center items-center gap-4">
                    <span className="text-2xl text-gray-800">{'ทำไมผู้ประกอบการ'}</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-700">{'ถึงเลือกใช้'}<span className="text-green-500">{' KA-G'}</span></h1>
                    <span className="text-2xl text-gray-800">{'บริการครบ จบ ในที่เดียว'}</span>
                </div>
                <div className="flex flex-col md:grid grid-cols-3 w-full h-full mt-8 md:mt-12 pb-12">
                    <div className="col-span-1 flex flex-col w-full gap-12 md:gap-24">
                        {/* Service 1 */}
                        <Link href={'/portfolio'} className="flex flex-col md:flex-row justify-center items-center w-full gap-4">
                            <div className="flex flex-col text-center md:text-end w-60 order-2 md:order-1">
                                <h1 className="text-2xl font-bold text-gray-800">{'ฉลากสินค้า แพคเกจจิ้ง และสินค้าพรีเมี่ยมต่างๆ'}</h1>
                                <span>{'ดูตัวอย่างผลงาน'}</span>
                            </div>
                            <div className="flex justify-center items-center w-28 h-28 bg-white rounded-full order-1 md:order-2">
                                <span className="text-6xl font-bold text-green-500">
                                    {'1'}
                                </span>
                            </div>
                        </Link>
                        {/* Service 2 */}
                        <Link href={'/'} className="flex flex-col md:flex-row justify-end items-center w-full gap-4">
                            <div className="flex flex-col text-center md:text-end order-2 md:order-1">
                                <h1 className="text-2xl font-bold text-gray-800">{'แผ่นพับ ใบปลิว โบรชัวร์'}</h1>
                                <span>{'ดูตัวอย่างผลงาน'}</span>
                            </div>
                            <div className="flex justify-center items-center w-28 h-28 bg-white rounded-full order-1 md:order-2">
                                <span className="text-6xl font-bold text-green-500">
                                    {'2'}
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div className="col-span-1 flex w-full h-full justify-center items-end mt-12 md:gap-24">
                        {/* Service 3 */}
                        <div className="flex flex-col justify-center items-center w-full gap-4">
                            <div className="flex justify-center items-center w-28 h-28 bg-white rounded-full">
                                <span className="text-6xl font-bold text-green-500">
                                    {'3'}
                                </span>
                            </div>
                            <div className="flex flex-col text-center">
                                <h1 className="text-2xl font-bold text-gray-800">{'อุปกรณ์ออกบูธ จัดอีเว้นท์'}</h1>
                                <span>{'ดูตัวอย่างผลงาน'}</span>
                            </div>

                        </div>
                    </div>

                    <div className="col-span-1 flex flex-col w-full mt-12 gap-12 md:gap-24">
                        {/* Service 4 */}
                        <div className="flex flex-col md:flex-row justify-start items-center w-full gap-4 order-2 md:order-1">
                            <div className="flex justify-center items-center w-28 h-28 bg-white rounded-full">
                                <span className="text-6xl font-bold text-green-500">
                                    {'5'}
                                </span>
                            </div>
                            <div className="flex flex-col text-center md:text-start">
                                <h1 className="text-2xl font-bold w-60 text-gray-800">{'สื่อโฆษณาและวางแผนการทำการตลาดออนไลน์'}</h1>
                                <span>{'ดูตัวอย่างผลงาน'}</span>
                            </div>

                        </div>
                        {/* Service 5 */}
                        <div className="flex flex-col md:flex-row justify-start items-center w-full gap-4">
                            <div className="flex justify-center items-center w-28 h-28 bg-white rounded-full">
                                <span className="text-6xl font-bold text-green-500">
                                    {'4'}
                                </span>
                            </div>
                            <div className="flex flex-col text-center md:text-start">
                                <h1 className="text-2xl font-bold text-gray-800">{'ป้ายโฆษณา ป้ายโลโก้'}</h1>
                                <span>{'ดูตัวอย่างผลงาน'}</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default ValueProposition