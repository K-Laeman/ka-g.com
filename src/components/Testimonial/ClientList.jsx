'use client'
import Marquee from "react-fast-marquee"
import Image from "next/image"

const clientList = [
    { name: 'adidas', img: '/assets/clients/adidas.png' },
    { name: 'capp', img: '/assets/clients/capp.png' },
    { name: 'afteryou', img: '/assets/clients/afteryou.png' },
    { name: 'agoda', img: '/assets/clients/agoda.png' },
    { name: 'aia', img: '/assets/clients/aia.png' },
    { name: 'cocacola', img: '/assets/clients/cocacola.png' },
    { name: 'deestine', img: '/assets/clients/deestine.png' },
    { name: 'firetiger', img: '/assets/clients/firetiger.png' },
    { name: 'grab', img: '/assets/clients/grab.png' },
    { name: 'gsb', img: '/assets/clients/gsb.png' },
    { name: 'handtea', img: '/assets/clients/handtea.png' },
    { name: 'istudio', img: '/assets/clients/istudio.png' },
    { name: 'kbank', img: '/assets/clients/kbank.png' },
    { name: 'kingkong', img: '/assets/clients/kingkong.png' },
    { name: 'kingpower', img: '/assets/clients/kingpower.png' },
    { name: 'kingkongsw', img: '/assets/clients/kingkongsw.png' },
    { name: 'kokotel', img: '/assets/clients/kokotel.png' },
    { name: 'lazada', img: '/assets/clients/lazada.png' },
    { name: 'mbk', img: '/assets/clients/mbk.png' },
    { name: 'sansiri', img: '/assets/clients/sansiri.png' },
    { name: 'sealife', img: '/assets/clients/sealife.png' },
    { name: 'shibuya', img: '/assets/clients/shibuya.png' },
    { name: 'tacobell', img: '/assets/clients/tacobell.png' },
    { name: 'tigerpas', img: '/assets/clients/tigerpas.png' },
    { name: 'timhortons', img: '/assets/clients/timhortons.png' },
    { name: 'asiacap', img: '/assets/clients/asiacap.png' },
    { name: 'bigdog', img: '/assets/clients/adidas.png' },

]

export default function ClientList() {
    return (
        <div className="flex flex-col w-full gap-12">
            <div className="flex justify-center pt-16 w-full px-6 md:px-0">
                <h1 className="text-2xl md:text-4xl font-bold text-center md:text-start">{'ลูกค้าที่ไว้วางใจเลือกใช้บริการ'} <span className="text-green-600">{'KING PACKING'}</span></h1>
            </div>
            <div className="flex flex-col w-full">
                <Marquee>
                    {clientList.slice(0, 4).map((client, index) => (
                        <Image key={index} src={client.img} width={200} height={200} />
                    ))}
                </Marquee>
                <Marquee direction={'right'} >
                    {clientList.slice(15).map((client, index) => (
                        <Image key={index} src={client.img} width={200} height={200} />
                    ))}
                </Marquee>
            </div>

            <div className="flex flex-col w-full bg-green-50 py-12 gap-20">
                <div className="flex flex-col w-full justify-center items-center gap-2 md:gap-4">
                    <h1 className="text-3xl font-bold">{'การันตีคุณภาพ'}</h1>
                    <h1 className="text-2xl md:text-4xl font-bold text-green-600">{'ด้วยเทคโนโลยีและประสบการณ์'}</h1>
                </div>
                <div className="flex flex-col md:flex-row w-full justify-center gap-12 md:gap-20">
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="text-4xl font-black">{'มากกว่า 50 ปี'}</h1>
                        <span className="text-2xl font-bold text-green-600">{'ประสบการณ์'}</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="text-4xl font-black">{'มากกว่า 1,000'}</h1>
                        <span className="text-2xl font-bold text-green-600">{'แบรนด์ชั้นนำ'}</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="text-4xl font-black">{'1 ล้านชิ้น'}</h1>
                        <span className="text-2xl font-bold text-green-600">{'ผลงานของเรา'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}