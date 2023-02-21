import Image from "next/image"
import blogData from "./blogData"

export default function HongThai() {

    return (
        <div className="flex w-full mt-24 max-w-3xl mx-auto md:py-12 px-6">
            <div className="flex flex-col w-full gap-12 py-6">
                {/* Top Section */}
                <div className="flex flex-col w-full gap-6">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        {blogData[0].title}
                    </h1>
                    <Image src={blogData[0].img} width={900} height={600} className={'rounded-3xl'} />
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-bold text-green-600">
                            {blogData[0].firstHead}
                        </h1>
                        <p className="text-xl ">
                            {
                                blogData[0].firstPa
                            }
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-bold text-green-600">{blogData[0].secHead}</h1>
                        <p className="text-xl">
                            {blogData[0].secPa}
                        </p>
                    </div>
                </div>

            </div>
        </div >
    )
}