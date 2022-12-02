import Image from 'next/image'
import Marquee from "react-fast-marquee"


import clientList from './clientList'


const OurClient = () => {
    return (
        <div className="flex flex-col w-full my-12">
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 px-6 md:px-0">
                <span className="text-3xl md:text-5xl font-bold text-gray-700 text-center md:text-start">{'ลูกค้าที่ไว้วางใจเลือกใช้บริการ'}</span>
                <span className="text-5xl font-bold text-green-500">{'KA-G'}</span>
            </div>
            <div className="flex flex-col w-full h-[520px] py-12">
                <Marquee speed={15} direction={'left'} className='flex h-fit'>
                    {
                        clientList.slice(0, 14).map((item, index) => (
                            <img key={index} src={item.path} alt={item.name} className=' w-fit h-full' />
                        ))
                    }
                </Marquee>
                <Marquee speed={15} direction={'right'} className='flex h-fit'>
                    {
                        clientList.slice(14).map((item, index) => (
                            <img key={index} src={item.path} alt={item.name} className=' w-fit h-full' />
                        ))
                    }
                </Marquee>
            </div>
            <div className='flex flex-col py-12 w-full bg-green-50 px-6 md:px-0'>
                <div className='flex flex-col gap-4 w-full justify-center items-center'>
                    <span className='text-2xl md:text-3xl text-gray-700'>{'ด้วยความพร้อมและคุณภาพใน'}</span>
                    <h1 className='text-4xl md:text-5xl font-bold text-green-500'>{'ในทุกกระบวนการผลิต'}</h1>
                </div>
                <div className='flex flex-col md:flex-row w-full justify-center gap-24 max-w-6xl mx-auto pt-16'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <span className='text-2xl text-gray-500'>
                            {'ด้วยประสบการณ์'}
                        </span>
                        <span className='text-8xl text-gray-700 font-black'>{'20'} <span className='text-5xl'>{'ปี'}</span></span>
                        <span className='text-2xl font-bold text-gray-700'>
                            {'ในการทำงานด้านสื่อสิ่งพิมพ์'}
                        </span>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <span className='text-2xl text-gray-500'>
                            {'มากกว่า'}
                        </span>
                        <span className='text-8xl text-gray-700 font-black'>{'1,000'}</span>
                        <span className='text-2xl font-bold text-gray-700'>
                            {'แบรนด์ชั้นนำทั่วประเทศ'}
                        </span>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <span className='text-2xl text-gray-500'>
                            {'ผลิตผลงานมากกว่า'}
                        </span>
                        <span className='text-8xl text-gray-700 font-black'>{'1'} <span className='text-5xl'>{'ล้าน'}</span></span>
                        <span className='text-2xl font-bold text-gray-00'>
                            {'ที่สั่งสมประสบการณ์'}
                        </span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default OurClient