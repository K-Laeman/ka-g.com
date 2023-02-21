'use client'

import { useState } from 'react'
import Image from "next/image"
import commentList from "./CommentList"

export default function ClientComment() {
    return (
        <div className='flex w-full bg-green-50'>
            <div className="flex flex-col justify-center items-center max-w-6xl mx-auto w-full my-12 gap-12 px-6 md:px-0">
                <div className='flex flex-col items-center'>
                    <h1 className='text-3xl font-bold'>{'เสียงจากลูกค้า'}</h1>
                    <h1 className='text-3xl font-bold'>{'ของ '}<span className=' text-green-600'>{'KING PACKING'}</span></h1>
                </div>
                <div className='flex h-full w-full overflow-x-scroll '>
                    <div className='flex flex-row md:grid md:grid-cols-2 gap-4 overflow-x-scroll px-6 pb-6 md:pb-12'>
                        {commentList.map((comment, index) => (
                            <div key={index} className='flex flex-col min-w-[20rem] h-96 items-center justify-start px-4 py-4 rounded-3xl bg-white shadow-xl'>
                                <div className='md:flex hidden w-full h-24 items-center justify-center overflow-hidden'>
                                    <Image src={comment.img} width={300} height={300} className={' object-cover w-24 md:w-44'} />
                                </div>
                                <div className='flex flex-col items-center justify-between gap-2 px-4 overflow-y-scroll'>
                                    <p className='text-lg first-letter:text-3xl first-letter:font-bold'>
                                        {`"${comment.text}"`}
                                    </p>
                                    <h1 className='text-xl font-bold'>
                                        {`- ${comment.name} -`}
                                    </h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}