import ValueProposition from "../components/feature/ValueProp";
import HeroSection from "../components/hero";
import ServiceMenu from "../components/services";
import OurClient from "../components/testimonial/OurClient";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <div className="flex flex-col w-full">
        <HeroSection />
        <ValueProposition />
        <OurClient />
        <ServiceMenu />
      </div>
    </>
  )
}
