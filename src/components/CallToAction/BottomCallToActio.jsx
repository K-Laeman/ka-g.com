import Image from "next/image"

export default function BottomCallToAction() {
    return (
        <div className="relative flex flex-col items-center justify-center w-full  md:pt-24 pb-12 bg-white overflow-hidden">
            <Image src={'/assets/call-to-action-bg.png'} width={1280} height={900} className={'absolute w-screen h-full object-cover opacity-10'} />
            <span className=" absolute flex w-full h-full bg-gradient-to-t from-black/50 z-10"></span>
            <div className="flex flex-col items-center justify-center md:border-t-[1px] md:border-green-500 md:w-1/2 py-12 px-6 gap-12 z-10">
                <div className="flex flex-col  justify-center items-center gap-2">
                    <h1 className="text-2xl md:text-3xl font-bold ">{'ผลิตงานคุณภาพ ส่งตรงเวลา'}</h1>
                    <h1 className="text-xl md:text-2xl font-medium text-green-600">{'Printing & Packing Production'}</h1>
                    <p className="text-base md:text-xl mt-4 first-letter:pl-12">{'พร้อมให้บริการแบบครบวงจร ตั้งแต่ขั้นตอนออกแบบ จนถึงขั้นตอนผลิต สำหรับทุกสินค้า ทุกธุรกิจ ขนาดเล็ก ขนาดใหญ่ มั่นใจได้เลยว่า ราคาถูก ประหยัด กว่าที่อื่นแน่นอน.. เพราะเรามีโรงงานผลิตเอง และเครื่องจักรรุ่นล่าสุดทันสมัย รองรับงานพิมพ์ได้ทุกรูปแบบ'}</p>
                </div>
                <a href="" className="flex w-fit rounded-full bg-green-600 text-white text-xl font-semibold px-12 py-4 hover:scale-105 transition-transform duration-300">{'สนใจร่วมงานกับเรา'}</a>
            </div>
        </div>
    )
}