'use client'
import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import items from './items'
import Image from 'next/image'

const tabMenu = [
    { title: 'ทั้งหมด' },
    { title: 'แผ่นพับ ใบปลิว โปสเตอร์', cat: 'pos' },
    { title: 'แคตตาล๊อค', cat: 'menu' },
    { title: 'ถุงกระดาษ', cat: 'bag' },
    { title: 'กล่อง', cat: 'box' },
]

export default function DigitalOffset() {
    return (
        <div className="flex flex-col w-full mt-16 py-24 max-w-6xl mx-auto px-6 md:px-0">
            <div className="flex flex-col gap-4 md:w-1/2">
                <h1 className="text-3xl font-bold">{'งานพิมพ์ระบบดิจิตอล ออฟเซ็ท'}</h1>
                <h1 className="text-xl font-medium">{'แผ่นพับ ใบปลิว โปสเตอร์ หนังสือ วารสาร นิตยสาร โบรชัวร์ แคตตาล็อก บรรจุภัณฑ์กระดาษ งานพิมพ์ใช้ในสำนักงาน ฯลฯ'}</h1>
            </div>

            <div className='flex w-full my-12 justify-center'>
                <Tab.Group as='div' className={'flex flex-col md:w-full gap-12'}>
                    <Tab.List className={'flex gap-6 w-80 overflow-x-scroll'}>
                        {
                            tabMenu.map((tab, index) => (
                                <Tab key={index} as={Fragment}>
                                    {({ selected }) => (
                                        <button

                                            className={`${selected ? 'border-b-2 border-green-600 font-bold' : 'border-0 font-light'} text-xl min-w-fit`}
                                        >
                                            {tab.title}
                                        </button>
                                    )}
                                </Tab>
                            ))
                        }
                    </Tab.List>
                    <Tab.Panels className={'flex justify-center items-center w-full'}>
                        {
                            tabMenu.map((menu, index) => (
                                menu.title === 'ทั้งหมด' ?
                                    <Tab.Panel key={index} className={'flex flex-col  md:grid md:grid-cols-4 w-full gap-12'}>
                                        {
                                            items.map((item, index) => (
                                                <div key={index} className='flex flex-col gap-4 aspect-square w-full'>
                                                    <Image src={item.img} width={300} height={300} className='w-full h-full object-cover rounded-3xl overflow-hidden' />
                                                    <span className='text-xl font-bold'>{item.title}</span>
                                                </div>
                                            ))
                                        }
                                    </Tab.Panel> :
                                    <Tab.Panel key={index} className={'flex flex-col md:grid md:grid-cols-4 w-full gap-12'}>
                                        {
                                            items.filter((fil) => fil.cat === menu.cat).map((item, index) => (
                                                <div key={index} className='flex flex-col gap-4 aspect-square'>
                                                    <Image src={item.img} width={300} height={300} className='w-full h-full object-cover rounded-3xl overflow-hidden' />
                                                    <span className='text-xl font-bold'>{item.title}</span>
                                                </div>
                                            ))
                                        }
                                    </Tab.Panel>
                            ))
                        }
                    </Tab.Panels>
                </Tab.Group>
            </div>

        </div>
    )
}