import Image from "next/image"

export default function About() {
    return (
        <div className="flex w-full mt-24 py-12 ">
            <div className="flex flex-col items-center justify-start max-w-6xl mx-auto w-full">
                <div className="flex flex-col gap-6 md:w-2/3 px-6 md:px-0">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-medium">{'มารู้จัก King Packaging'}</h1>
                        <h1 className="text-2xl font-bold text-green-600">{'จุดเริ่มต้นของโรงพิมพ์'}</h1>
                    </div>
                    <div className=" col-span-2 row-span-2 w-full h-full">
                        <Image src={'/assets/hero/about-cover.png'} height={420} width={544} className={' w-full object-cover rounded-3xl'} />
                    </div>

                    <div className="flex flex-col gap-2 py-12">
                        <h1 className="text-xl font-light first-letter:ml-14 leading-8">
                            {`โรงพิมพ์ผลิตสติ๊กเกอร์ม้วน ระบบ Flexo และงานกล่อง OFFSET บริการงานพิมพ์ครบวงจร ด้วยเครื่องพิมพ์ที่ทันสมัย ได้มาตรฐาน ISO ตอบโจทย์ธุรกิจ สามารถรองรับสื่อสิ่งพิมพ์จำนวนมาก ปรับแต่งให้เหมาะสมกับความต้องการ
                                ทุกบรรจุภัณฑ์ ทุกจำนวน ทุกสเปค พร้อมให้บริการแบบครบวงจร ตั้งแต่ขั้นตอนออกแบบ จนถึงขั้นตอนผลิต สำหรับทุกสินค้า ทุกธุรกิจ ขนาดเล็ก ขนาดใหญ่ 
                                มั่นใจได้เลยว่า ราคาถูก ประหยัด กว่าที่อื่นแน่นอน.. เพราะเรามีโรงงานผลิตเอง และเครื่องจักรรุ่นล่าสุดทันสมัย รองรับงานพิมพ์ได้ทุกรูปแบบ
                                ในนาม “King Packaging” เราเชื่อมั่นว่าจะสามารถสร้างสรรค์งานที่มีคุณภาพได้มาตรฐาน และตรงต่อเวลา บริการลูกค้าด้วยความประทับใจ`}
                        </h1>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-medium">{'เทคโนโลยีที่ทันสมัย'}</h1>
                        <h1 className="text-2xl font-bold text-green-600">{'เครื่องพิมพ์ของเรา'}</h1>
                    </div>

                    <div className=" col-span-2 row-span-2 w-full h-full">
                        <Image src={'/assets/hero/offset.png'} height={420} width={544} className={' w-full object-cover rounded-3xl'} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold text-green-600">{' Offset Printing | การพิมพ์ออฟเซต'}</h1>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-light first-letter:ml-14 leading-8">
                            {`เป็นระบบการพิมพ์ที่อาศัยแม่พิมพ์ (plate) โดยมีเครื่องพิมพ์หลายขนาด มีทั้ง เครื่องพิมพ์ 1 สี 2 สี 4 สี 5 สี หรือมากกว่านั้น 
                            ขึ้นอยู่กับเนื้องานและสีที่คุณต้องการ   งานที่ได้จะมีรายละเอียดสูง ภาพสวย คมชัด และได้จำนวนพิมพ์ที่เยอะในระดับอุตสาหกรรมที่มียอดการสั่งมากกว่า 500 ชุดขึ้นไป 
                            หรือมากเท่าที่คุณต้องการ`}
                        </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold text-green-600">{'งานที่เหมาะกับ งานพิมพ์ออฟเซ็ท (Offset Printing)'}</h1>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-light first-letter:ml-14 leading-8">
                            {`แผ่นพับ ใบปลิว โปสเตอร์ หนังสือ วารสาร นิตยสาร โบรชัวร์ แคตตาล็อก บรรจุภัณฑ์กระดาษ งานพิมพ์ใช้ในสำนักงาน ฯลฯ`}
                        </h1>
                    </div>

                    <div className=" col-span-2 row-span-2 w-full h-full mt-24">
                        <Image src={'/assets/hero/flexo.png'} height={420} width={544} className={' w-full object-cover rounded-3xl'} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold text-green-600">{'Flexographic Printing  | การพิมพ์ เฟล็กโซ่'}</h1>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-light first-letter:ml-14 leading-8">
                            {`หรือเครื่องพิมพ์ที่มีชื่อเรียกกันอย่างคุ้นเคยว่า เครื่องพิมพ์ Flexo เป็นเครื่องพิมพ์ที่ใช้หลักการทำงานแบบลูกกลิ้งโดยใช้แม่พิมพ์ที่ทำจากพอลิเมอร์ ส่วนที่นูนของแม่พิมพ์จะรับสีและทำให้เกิดภาพบนวัสดุที่ต้องการพิมพ์ ซึ่งเครื่องพิมพ์ระบบนี้จะใช้ระยะเวลาในการเตรียมการพิมพ์ระดับหนึ่ง โดยเฉพาะอย่างยิ่งส่วนของการปรับตั้งค่าของแม่พิมพ์สีในแต่สี เพื่อให้ได้ความแม่นยำและเที่ยงตรง
ดังนั้นการพิมพ์ระบบ Flexo นี้จึงเหมาะกับงานพิมพ์ในปริมาณที่ค่อนข้างมาก เพื่อให้คุ้มค่าต่อเวลาในการตั้งเครื่องและวัสดุพิมพ์ที่ต้องสูญเสียไปเป็นจำนวนมากในช่วงแรกของการเริ่มพิมพ์
`}
                        </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-light first-letter:ml-14 leading-8">
                            {`เครื่องพิมพ์ Flexo จะตอบโจทย์ได้ดีก็ต่อเมื่อ คุณต้องพิมพ์งาน 1 งานในปริมาณที่ค่อนข้างมาก และเป็นงานพิมพ์ลักษณะเดียวกันทั้งหมด โดยที่การพิมพ์งานในแต่ละครั้ง เราต้องลงทุนในการสร้างแม่พิมพ์, การเสียเวลาในการตั้งเครื่อง และการสูญเสียปริมาณวัสดุที่ใช้พิมพ์เป็นจำนวนมากในช่วงแรกของการพิมพ์ ดังนั้นการที่เราไม่จำเป็นจะต้องเปลี่ยนแบบบ่อยๆ วิ่งงานยาวๆ เครื่องพิมพ์ Flexo จึงตอบโจทย์คุณได้ดี

`}
                        </h1>
                    </div>

                </div>
            </div>
        </div>
    )
}