import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
    return (
        <div className="flex w-full mt-20">
            {/* Hilight Blog */}
            <div className="flex flex-col w-full bg-green-50 py-6 md:py-12 px-6 md:px-0">
                <div className="flex justify-center md:justify-start w-full py-4 md:ml-44">
                    <h1 className="text-2xl md:text-4xl font-bold">{'บทความน่าสนใจ'}</h1>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center max-w-6xl w-full mx-auto gap-12 ">
                    <div className="flex flex-col md:w-2/3 md:h-[31rem] bg-white rounded-3xl overflow-hidden">
                        <div className="flex h-4/5">
                            <Image src={'/assets/blog/white-box.jpg'} width={900} height={600} className={'object-cover'}></Image>
                        </div>
                        <div className="flex flex-col justify-between md:flex-row md:h-44 py-4 px-12 items-center bg-white gap-4 md:gap-0">
                            <h1 className="text-xl md:text-3xl font-bold">{'กล่องแป้งหน้าขาวหลังเทา'}</h1>
                            <Link href={'/blogs/box-white-grey'} className={' flex bg-green-500 rounded-full px-6 py-2 font-semibold text-white'} >
                                {'อ่านเพิ่ม'}
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col md:w-1/3 gap-12">
                        <div className="flex flex-col w-full md:h-[15rem] bg-white rounded-3xl overflow-hidden">
                            <div className="flex h-4/5">
                                <Image src={'/assets/blog/hongthai.jpg'} width={900} height={600} className={'object-contain'}></Image>
                            </div>
                            <div className="flex flex-col justify-between md:flex-row md:h-1/5 py-4 px-12 items-center bg-white gap-4 md:gap-0">
                                <h1 className="text-xl font-bold">{'ยาดมหงส์ไทย'}</h1>
                                <Link href={'/blogs/hong-thai'} className={' flex bg-green-500 rounded-full px-6 py-2 font-semibold text-white'} >
                                    {'อ่านเพิ่ม'}
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full h-[14rem] bg-white">
                            {'comming soon'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}