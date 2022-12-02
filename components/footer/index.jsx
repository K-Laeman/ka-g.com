import Image from "next/image"

const Footer = () => {
    return (
        <div className="flex w-full py-6 md:py-24 z-50 shadow-[0_-2px_24px_rgba(0,0,0,0.15)]">
            <div className="flex flex-col md:flex-row max-w-6xl mx-auto w-full gap-6">
                <div className="flex flex-col items-center md:items-start md:flex-row md:w-2/3 gap-12">
                    <Image src={'/logo.png'} alt={'ka-g logo'} width={164} height={180} />
                    <p className="font-light md:text-xl px-6 md:px-0">
                        {`King of Advertising and Graphic Co.,Ltd.
                        บริษัท คิงออฟแอดเวอร์ไทซิ่งแอนด์กราฟฟิค จำกัด/url
                        เลขที่ 204/6-7 ถนนสุรวงศ์  แขวงสี่พระยา เขตบางรัก กรุงเทพฯ 10500`}
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center md:w-1/3 gap-4" >
                    <h1 className="text-2xl font-medium">{'ช่องทางการติดต่อ'}</h1>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/profile.php?id=100086407581616&mibextid=ZbWKwL" target={'_blank'} rel={'noreferrer'} className="hover:opacity-80">
                            <svg className="w-12" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 40 40">
                                <linearGradient id="a" x1="-277.375" x2="-277.375" y1="406.6018" y2="407.5726" gradientTransform="matrix(40 0 0 -39.7778 11115.001 16212.334)" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="#0062e0" />
                                    <stop offset="1" stopColor="#19afff" />
                                </linearGradient>
                                <path fill="url(#a)" d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z" />
                                <path fill="#fff" d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z" />
                            </svg>
                        </a>
                        <a href="https://manager.line.biz/invitation/tofNbyb9JA4D7C3glNx3LikM6niNbQ" target={'_blank'} rel={'noreferrer'} className="hover:opacity-80">
                            <svg id="Layer_1" data-name="Layer 1" className="fill-green-600 w-12 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.92 39.89">
                                <path className="cls-1" d="M259.94,239a7.06,7.06,0,0,0-7.23-7.16H227.26a6.87,6.87,0,0,0-1,0,7.23,7.23,0,0,0-6.21,7.26c.07,4.21,0,8.43,0,12.64s0,8.43,0,12.64a8,8,0,0,0,.2,1.84,7,7,0,0,0,6.84,5.44c8.59,0,17.18,0,25.77,0a5.74,5.74,0,0,0,.85,0,7.1,7.1,0,0,0,6.21-7.13Q260,251.79,259.94,239ZM252,256.7a31.88,31.88,0,0,1-6.69,5.83c-1.54,1.05-3.14,2-4.73,3a4.39,4.39,0,0,1-1.18.48c-.52.13-.8-.11-.76-.64s.19-1.26.23-1.9c.08-1.19-.19-1.52-1.37-1.7a16.82,16.82,0,0,1-5.83-1.93,11.76,11.76,0,0,1-5.89-6.93,9.9,9.9,0,0,1,2.62-10.1,14.56,14.56,0,0,1,8.26-4.31,16.83,16.83,0,0,1,11.87,2,11.59,11.59,0,0,1,5.79,7.44,17.26,17.26,0,0,1,.27,1.8A10.64,10.64,0,0,1,252,256.7Z" transform="translate(-220.04 -231.85)" /><path className="cls-1" d="M244.24,247.5c0-.55-.29-.85-.76-.83s-.67.28-.68.83c0,.92,0,1.85,0,2.77q0,.28,0,.55l-.14,0c-.12-.14-.24-.28-.34-.43-.81-1.1-1.63-2.2-2.43-3.31a.82.82,0,0,0-1-.42c-.42.15-.47.52-.47.92,0,1.74,0,3.48,0,5.23,0,.09,0,.18,0,.27a.72.72,0,0,0,.76.72.68.68,0,0,0,.67-.74q0-1.28,0-2.56,0-.44,0-.88a1.07,1.07,0,0,1,.47.39l2.46,3.35c.24.33.52.55.95.39a.79.79,0,0,0,.49-.86q0-2.05,0-4.11C244.24,248.39,244.25,247.95,244.24,247.5Z" transform="translate(-220.04 -231.85)" /><path className="cls-1" d="M247.27,248.05c.52,0,1,0,1.55,0s.84-.26.86-.67-.3-.71-.81-.72c-.91,0-1.81,0-2.72,0-.57,0-.78.25-.78.84,0,.91,0,1.81,0,2.72q0,1,0,2.08c0,1.55,0,1.58,1.58,1.57.68,0,1.35,0,2,0a.7.7,0,0,0,.71-.72c0-.39-.33-.67-.79-.68h-1.12c-1.1,0-.93.14-1-1,0-.45.17-.54.56-.53.57,0,1.14,0,1.7,0a.62.62,0,0,0,.61-.68.64.64,0,0,0-.67-.68h-1.17c-1.17,0-1,.19-1-1.06C246.78,248.13,246.94,248,247.27,248.05Z" transform="translate(-220.04 -231.85)" /><path className="cls-1" d="M234.29,252.45c-.51,0-1,0-1.54,0s-.66-.13-.65-.63c0-1.44,0-2.87,0-4.31,0-.59-.24-.86-.71-.85s-.67.26-.67.83c0,.92,0,1.85,0,2.77h0c0,.94,0,1.88,0,2.82,0,.42.19.73.6.74,1,0,2.05,0,3.08,0a.62.62,0,0,0,.59-.74A.63.63,0,0,0,234.29,252.45Z" transform="translate(-220.04 -231.85)" /><path className="cls-1" d="M237.23,247.51c0-.57-.22-.82-.67-.84s-.72.26-.72.84q0,2.74,0,5.49c0,.54.25.84.67.85s.71-.29.72-.86c0-.92,0-1.85,0-2.77S237.24,248.42,237.23,247.51Z" transform="translate(-220.04 -231.85)" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer