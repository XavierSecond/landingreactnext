import MobileNav from '@/components/MobileNav/MobileNav'
import Nav from '@/components/Nav/Nav'
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

    </div>
  </div>
)}

export default HomePage