import React, { useState, useEffect } from 'react';
import { About } from '@/components/About/About';
import { Contact } from '@/components/Contact/Contact';
import { Footer } from '@/components/Footer/Footer';
import MobileNav from '@/components/MobileNav/MobileNav';
import Nav from '@/components/Nav/Nav';
import { Offers } from '@/components/Offers/Offers';
import { Welcome } from '@/components/Welcome/Welcome';

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  useEffect(() => {
    // Scroll to the top when the component mounts
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // slight delay to ensure it works across all browsers
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div>
        {/* Navbar */}
        <Nav openNav={openNav} />
        <MobileNav nav={nav} closeNav={closeNav} />
        {/* Welcome */}
        <div id="home">
          <Welcome />
        </div>
        {/* Services */}
        <div id="services">
          <Offers />
        </div>
        {/* About */}
        <div id="about">
          <About />
        </div>
        {/* Contact */}
        <div id="contact">
          <Contact />
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
