import { SwatchIcon, BookOpenIcon, QueueListIcon, PhotoIcon, ArrowSmallRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image'

export default function Technology() {
    return (
        <div className="flex fex-col w-full">
            <div className="flex flex-col justify-center items-center w-full max-w-6xl mx-auto py-24 gap-12">
                <div className="flex flex-col items-center w-full">
                    <h1 className="text-4xl font-bold">{'เทคโนโลยีการพิมพ์'}</h1>
                    <h1 className="text-5xl font-bold text-green-600">{'มาตรฐานสากล'}</h1>
                </div>
                <div className="flex flex-col md:flex-row w-full px-6 md:px-0 gap-6 md:gap-0">
                    <div className="flex  md:w-1/2">
                        <Image src='/assets/hero/offset-card.png' width={800} height={800} className='w-[30rem] object-contain rounded-3xl' />
                    </div>
                    <div className="flex flex-col md:w-1/2 gap-12">
                        <div className="flex flex-col w-full">
                            <span className="text-2xl font-bold">{'งานพิมพ์'}</span>
                            <span className="text-2xl font-bold text-green-600">{'ระบบดิจิตอล/ออฟเซ็ท'}</span>
                        </div>
                        <div className="flex flex-col w-full gap-6">
                            <div className="flex gap-4 items-center">
                                <SwatchIcon className=' fill-green-600 w-12 h-12' />
                                <span className='md:text-xl font-medium'>{'เครื่องพิมพ์ 1 สี 2 สี 4 สี 5 สี หรือมากกว่านั้น'}</span>
                            </div>
                            <div className="flex gap-4 items-center">
                                <PhotoIcon className=' fill-green-600 w-12 h-12' />
                                <span className='md:text-xl font-medium'>{'รายละเอียดสูง ภาพสวย คมชัด'}</span>
                            </div>
                            <div className="flex gap-4 items-center">
                                <QueueListIcon className=' fill-green-600 w-12 h-12' />
                                <span className='md:text-xl font-medium'>{'ได้จำนวนพิมพ์เยอะในระดับอุตสาหกรรม'}</span>
                            </div>
                            <div className="flex gap-4 items-center">
                                <BookOpenIcon className=' fill-green-600 w-12 h-12' />
                                <span className='md:text-xl w-fit font-medium'>{'เหมาะสำหรับงานแผ่นพับ โปสเตอร์ นิตยสาร แคตตาล็อก บรรจุภัณฑ์กระดาษ งานพิมพ์ใช้ในสำนักงาน'}</span>
                            </div>
                        </div>
                        <div className='flex w-full'>
                            <Link href='/service/digital-offset' className='flex md:w-fit group bg-green-600 px-8 py-4 rounded-full text-white font-bold gap-4 hover:scale-105 transition-transform duration-300'>
                                {'ดูตัวอย่างผลงาน'} <ArrowSmallRightIcon className='w-6 group-hover:translate-x-1 transition-transform duration-300' />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Sticker */}

                <div className="flex flex-col md:flex-row w-full px-6 md:px-0 gap-6 md:gap-0">
                    <div className="flex  md:w-1/2">
                        <Image src='/assets/hero/sticker-card.png' width={800} height={800} className='w-[30rem] object-contain rounded-3xl' />
                    </div>
                    <div className="flex flex-col md:w-1/2 gap-12">
                        <div className="flex flex-col w-full">
                            <span className="text-2xl font-bold">{'งานพิมพ์'}</span>
                            <span className="text-2xl font-bold text-green-600">{'สติกเกอร์ม้วน'}</span>
                        </div>
                        <div className="flex flex-col w-full gap-6">
                            <div className="flex gap-4 items-center">
                                <SwatchIcon className=' fill-green-600 w-12 h-12' />
                                <span className='md:text-xl font-medium'>{'เครื่องพิมพ์ 1 สี 2 สี 4 สี 5 สี หรือมากกว่านั้น'}</span>
                            </div>
                            <div className="flex gap-4 items-center">
                                <PhotoIcon className=' fill-green-600 w-12 h-12' />
                                <span className='md:text-xl font-medium'>{'รายละเอียดสูง ภาพสวย คมชัด'}</span>
                            </div>
                            <div className="flex gap-4 items-center">
                                <QueueListIcon className=' fill-green-600 w-12 h-12' />
                                <span className='md:text-xl font-medium'>{'ได้จำนวนพิมพ์เยอะในระดับอุตสาหกรรม'}</span>
                            </div>
                            <div className="flex gap-4 items-center">
                                <BookOpenIcon className=' fill-green-600 w-12 h-12' />
                                <span className='md:text-xl w-fit font-medium'>{'เหมาะสำหรับงานแผ่นพับ โปสเตอร์ นิตยสาร แคตตาล็อก บรรจุภัณฑ์กระดาษ งานพิมพ์ใช้ในสำนักงาน'}</span>
                            </div>
                        </div>
                        <div className='flex w-full'>
                            <Link href='/service/sticker' className='flex w-fit group bg-green-600 px-8 py-4 rounded-full text-white font-bold gap-4 hover:scale-105 transition-transform duration-300'>
                                {'ดูตัวอย่างผลงาน'} <ArrowSmallRightIcon className='w-6 group-hover:translate-x-1 transition-transform duration-300' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}