import Navbar from './components/navbar'
import HeroSection from './components/heroSection'

export default function App() {
  return (
  <div className="bg-[linear-gradient(to_right,var(--custom-a0),var(--custom-a10),var(--custom-a20),var(--custom-a30),var(--custom-a40))] w-full  py-4 md:h-screen">
  <div className='sticky top-0'>
    <Navbar/>
  </div>
  <HeroSection/>
    </div>
  )
}
