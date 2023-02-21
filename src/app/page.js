import BottomCallToAction from '@/components/CallToAction/BottomCallToActio'
import Service from '@/components/Feature/Service'
import Technology from '@/components/Feature/Technology'
import Hero from '@/components/Header/Hero'
import Certificate from '@/components/Testimonial/Certificate'
import ClientComment from '@/components/Testimonial/ClientComment'
import ClientList from '@/components/Testimonial/ClientList'


export default function Home() {
  return (
    <main>
      <div className='flex flex-col w-full bg-green-50'>
        <Hero />
        <Technology />
      </div>
      <ClientList />
      <Service />
      <ClientComment />
      <Certificate />
      <BottomCallToAction />
    </main>
  )
}
