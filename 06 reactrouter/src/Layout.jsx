import React from 'react'
import Header from './Components/Header/header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import About from './Components/About/About'

function Layout() {
  return (
   <> 
   <Header />
   <Outlet />
   <Footer />
   <About />

   </>
  )
}

export default Layout
