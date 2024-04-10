import Features from "./components/Features"
import Header from "./components/Header"
import Home from "./components/Home"
import Pricing from "./components/Pricing"
import Testimonial from "./components/Testimonial"



function App() {

  return (
    <>
      <div className='bg-blue-50'>
        <Header/>
        <Home />
        <Features/>
        <Pricing/>
        <Testimonial/>
      </div>
    </>
  )
}

export default App
