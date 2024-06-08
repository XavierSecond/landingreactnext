import { About } from '@/components/About/About'
import { Contact } from '@/components/Contact/Contact'
import { Footer } from '@/components/Footer/Footer'
import MobileNav from '@/components/MobileNav/MobileNav'
import Nav from '@/components/Nav/Nav'
import { Offers } from '@/components/Offers/Offers'
import { Welcome } from '@/components/Welcome/Welcome'
import React, { useState } from 'react'

const HomePage = () => {

  const [nav, setNav] = useState(false)
  const openNav = () =>setNav(true)
  const closeNav = () => setNav(false)
  return (
  <div className="overflow-x-hidden">
    <div>
      {/* Navbar */}
      <Nav openNav={openNav}/>
      <MobileNav nav={nav} closeNav={closeNav}/>
      {/* Welcome */}
      <Welcome />
      {/* Services */}
      <Offers />
      {/* About */}
      <About />
      {/* Contact */}
      <Contact />
      {/* Footer */}
      <Footer />

    </div>
  </div>
)}

export default HomePage