import './globals.css'
import { IBM_Plex_Sans_Thai_Looped } from '@next/font/google'
import NavBar from '@/components/Navigation/NavBar'
import Footer from '@/components/Footer'

const IMB_Plex = IBM_Plex_Sans_Thai_Looped(
  {
    subsets: ['thai', 'latin'],
    style: ['normal'],
    weight: ['100', '200', '300', '400', '500', '600', '700']
  }
)

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={IMB_Plex.className}>
        <div className='fixed flex w-full z-50 h-20'>
          <NavBar />
        </div>
        <div className='flex flex-col w-full'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
