import Features from "./components/Features"
import Header from "./components/Header"
import Home from "./components/Home"



function App() {

  return (
    <>
      <div className='bg-blue-50'>
        <Header/>
        <Home />
        <Features/>
      </div>
    </>
  )
}

export default App
