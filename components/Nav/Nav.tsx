import React from 'react';
import Image from 'next/image';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { Link as ScrollLink } from 'react-scroll';

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const headerHeight = -115; // Ajusta este valor según la altura de tu encabezado

  return (
    <div className="w-[100%] top-0 h-[12vh] shadow-md z-[100] fixed bg-white">
      <div className="flex items-center justify-between w-[90%] lg:w-[80%] mx-auto h-[100%]">
        <div className="grid grid-flow-col auto-cols-max gap-2 md:gap-4 flex-[0.6]">
          <Image
            src="/images/logo.png"
            width={50}
            height={50}
            alt="logo"
            className="flex items-center self-center"
          />
          <h1 className="text-[19px] md:text-[25px] text-[#343432] font-medium cursor-pointer md:gap-x-2 items-center grid grid-flow-row leading-5 md:grid-flow-col grid-cols-min md:auto-cols-max">
            Construction
            <span className="text-[#d4d6c9]">Labor</span>
            <span className="text-[#a9c52e]">Solutions</span>
          </h1>
        </div>
        <div className="nav-link cursor-pointer">
          <ScrollLink to="home" smooth={true} duration={500} offset={headerHeight}>
            Home
          </ScrollLink>
        </div>
        <div className="nav-link cursor-pointer">
          <ScrollLink to="services" smooth={true} duration={500} offset={headerHeight}>
            Services
          </ScrollLink>
        </div>
        <div className="nav-link cursor-pointer">
          <ScrollLink to="about" smooth={true} duration={500} offset={headerHeight}>
            About us
          </ScrollLink>
        </div>
        <div className="nav-link cursor-pointer">
          <ScrollLink to="contact" smooth={true} duration={500} offset={headerHeight}>
            Contact
          </ScrollLink>
        </div>
        <div onClick={openNav}>
          <Bars3Icon className="h-[2rem] w-[2rem] cursor-pointer text-[#a9c52e] lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
