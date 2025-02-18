import Footer from "./components/Footer"
import Images from "./components/Images"
import Landing from "./components/Landing"
import Nav from "./components/Nav"
import Reel from "./components/Reel"
import Spread from "./components/Spread"
import Work from "./components/Work"
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen overflow-hidden overflow-y-auto font-["Roboto"] select-none'>
      <Nav />
      <Landing />
      <Work />
      <Reel />
      <Images />
      <Spread />
      <Footer />
    </div>
  )
}

export default App
