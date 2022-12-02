import serviceList from './serviceList'
import Image from 'next/image'
import Link from 'next/link'

const ServiceMenu = () => {
    return (
        <div className="flex flex-col max-w-6xl mx-auto w-full pt-6 pb-24 gap-12">
            <div className="flex flex-col w-full justify-center items-center gap-2">
                <span className='text-2xl md:text-3xl'>{'เลือกชมผลงานและ'}</span>
                <h1 className='text-4xl md:text-5xl font-bold'>{'บริการของ'} <span className='text-green-500'>{'KA-G'}</span></h1>
            </div>
            <div className="flex flex-col md:grid grid-cols-3 w-full gap-12 px-8 md:px-0">
                {
                    serviceList.map((item, index) => {
                        return (
                            <Link href={item.path} key={index} className='relative col-span-1 flex flex-col w-full h-60 bg-gradient-to-tr from-green-500 to-green-400 rounded-3xl overflow-hidden hover:opacity-75'>
                                <span className='absolute object-cover flex w-full '>
                                    <Image src={item.image} width={100} height={100} className={'object-cover w-full rounded-xl object-center'} />
                                </span>
                                <div className='flex w-full h-60'></div>
                                <div className='flex w-full justify-center px-4 mb-4 text-2xl font-bold text-gray-800  z-20'>
                                    {item.title}
                                </div>
                                <span className='absolute bottom-0 flex h-44 w-full bg-gradient-to-t from-white/90 z-10'></span>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ServiceMenu