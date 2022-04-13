import React from 'react'
import './App.css'
import './index.css'
import Body from './components/body/Body'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Modal from './components/Modal/Modal'
import HamburgerMenu from './components/Hamburger/HamburgerMenu'

const App = () => {
  

  return (
    <div className="App">
       <Navbar/>
        <Body/>
        <Footer />
        <Modal/>
        <HamburgerMenu />
    </div>
  )
}

export default App
