import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Products from './components/Products'
import AllRoutes from './Routes/AllRoutes'

const App = () => {
  return (
    <div className="mt-[138px] ">
      <Navbar />
    <AllRoutes/>
      <Footer />
    </div>
  )
}

export default App
