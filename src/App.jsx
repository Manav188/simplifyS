import Features from "./components/Features"
import Header from "./components/Header"
import Home from "./components/Home"
import Pricing from "./components/Pricing"



function App() {

  return (
    <>
      <div className='bg-blue-50'>
        <Header/>
        <Home />
        <Features/>
        <Pricing/>
      </div>
    </>
  )
}

export default App
