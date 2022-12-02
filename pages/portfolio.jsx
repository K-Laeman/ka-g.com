import tapList from '../components/tab/tapList'
import productList from '../components/product/productList'

import { Tab } from '@headlessui/react'
import Image from 'next/image'
import { Fragment } from 'react'



const Portfolio = () => {
    return (
        <div className="flex flex-col max-w-6xl mx-auto w-full py-24 gap-12 px-6 md:px-0">
            <div className="flex flex-col w-full justify-center items-center md:items-start gap-2">
                <h1 className="text-3xl md:text-5xl font-bold text-green-500">{'"สื่อที่ดี ต้องขจีที่เดียว"'}</h1>
                <h1 className="text-3xl md:text-4xl px-6">{'งานพิมพ์ งานสื่อ ครบจบที่เดียว'}</h1>
                <span>
                    {''}
                </span>
            </div>

            {/* Tab : TODO => Separate to component base */}
            <div className="flex flex-col w-full">
                <Tab.Group >
                    <Tab.List className="flex w-full gap-6 pb-12">
                        {
                            tapList.map((tap, index) => {
                                return (
                                    <Tab key={index} as={Fragment}>
                                        {({ selected }) => (
                                            <button className={selected ? 'md:text-xl font-medium text-gray-800 border-b-2 border-green-400' : 'md:text-xl font-light text-gray-500'}>
                                                {tap.title}
                                            </button>
                                        )}
                                    </Tab>
                                )
                            })
                        }
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel className={' flex flex-col md:grid grid-cols-3 w-full gap-12'}>
                            {
                                productList.map((product, key) => {
                                    return (
                                        <div key={key} className='flex flex-col gap-2 w-80 h-64 overflow-hidden'>
                                            <Image src={product.coverImage} width={150} height={100} className={' object-cover w-80 h-64 overflow-hidden rounded-xl'} />
                                            <div className='flex justify-between items-start px-4'>
                                                <span className='text-xl font-bold'>{product.title}</span>
                                                <span className='w-1/2 text-end text-gray-500'>
                                                    {product.cat}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                }
                                )
                            }
                        </Tab.Panel>
                        <Tab.Panel className={'flex flex-col md:grid grid-cols-3 w-full gap-12'}>
                            {
                                productList.filter((item) => (item.cat === 's1')).map((product, key) => {
                                    return (
                                        <div key={key} className='flex flex-col gap-2 w-80 h-64 overflow-hidden'>
                                            <Image src={product.coverImage} width={150} height={100} className={'object-cover rounded-xl w-80 h-64 overflow-hidden'} />
                                            <div className='flex justify-between items-start px-4'>
                                                <span className='text-xl font-bold'>{product.title}</span>
                                                <span className='w-1/2 text-end text-gray-500'>
                                                    {product.cat}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                }
                                )
                            }
                        </Tab.Panel>
                        <Tab.Panel className={'flex flex-col md:grid grid-cols-3 w-full gap-12'}>
                            {
                                productList.filter((item) => (item.cat === 'p1')).map((product, key) => {
                                    return (
                                        <div key={key} className='flex flex-col gap-2 w-80 h-64 overflow-hidden'>
                                            <Image src={product.coverImage} width={150} height={100} className={'object-cover w-80 h-64 overflow-hidden rounded-xl'} />
                                            <div className='flex justify-between items-start px-4'>
                                                <span className='text-xl font-bold'>{product.title}</span>
                                                <span className='w-1/2 text-end text-gray-500'>
                                                    {product.cat}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                }
                                )
                            }
                        </Tab.Panel>
                        <Tab.Panel className={'flex flex-col md:grid grid-cols-3 w-full gap-12'}>
                            {
                                productList.filter((item) => (item.cat === 'po1')).map((product, key) => {
                                    return (
                                        <div key={key} className='flex flex-col gap-2 w-80 h-64 overflow-hidden'>
                                            <Image src={product.coverImage} width={150} height={100} className={'object-cover w-80 h-64 overflow-hidden rounded-xl'} />
                                            <div className='flex justify-between items-start px-4'>
                                                <span className='text-xl font-bold'>{product.title}</span>
                                                <span className='w-1/2 text-end text-gray-500'>
                                                    {product.cat}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                }
                                )
                            }
                        </Tab.Panel>

                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div >
    )
}

export default Portfolio