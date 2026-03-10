import Nav from '../components/Nav'
import Hero from '../components/Hero'
import MarqueeStrip from '../components/MarqueeStrip'
import NewDrop from '../components/NewDrop'
import Bestsellers from '../components/Bestsellers'
import Lookbook from '../components/Lookbook'
import Philosophy from '../components/Philosophy'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <MarqueeStrip />
      <NewDrop />
      <Bestsellers />
      <Lookbook />
      <Philosophy />
      <Subscribe />
      <Footer />
    </>
  )
}
