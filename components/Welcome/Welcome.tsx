import { BuildingOfficeIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

export const Welcome = () => {
  const headerHeight = -115; // Ajusta este valor según la altura de tu encabezado

  return (
    <div className="w-[100vw] h-[100vh] bg-cover flex bg-welcome">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto justify-center h-full w-full">
        <div className="grid grid-flow-row auto-rows-max text-left gap-8 h-max w-[90vw] md:w-[40vw] mx-auto self-center">
          <motion.h4
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
            className="text-[1.3rem] text-[#343432] leading-8 w-[90vw] md:w-[40vw] h-fit"
          >
            The right <span className="text-[#a9c52e]">people</span> in the right<span className="text-[#a9c52e]"> place</span>
          </motion.h4>
          <motion.h1
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 50, delay: 0.4 }}
            className="text-[2rem] md:text-[3rem] text-[#a9c52e] font-semibold leading-[2.3rem] md:leading-[3.3rem] w-[90vw] md:w-[40vw] h-fit"
          >
            We are dedicated to building dreams and turning visions into reality
          </motion.h1>
          <motion.h4
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 50, delay: 0.4 }}
            className="text-[1.3rem] text-[#343432] leading-8 w-[90vw] md:w-[40vw] h-fit"
          >
            Join us as we construct a better, brighter future together. Let us be your partners in creating a masterpiece that will stand the test of time. Welcome to a world of endless possibilities with our team of skilled professionals.
          </motion.h4>
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            offset={headerHeight}
            className="text-[1.5rem] text-white leading-8 w-max h-fit bg-[#a9c52e] font-medium px-6 py-3 rounded-xl cursor-pointer grid grid-flow-col auto-cols-max gap-2 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-[#8fbf2d]"
          >
            See our Services
            <BuildingOfficeIcon className="text-white h-[2rem] w-[2rem]" />
          </ScrollLink>
        </div>
        <img src="/images/carousel/01.jpg" className="object-cover rounded-tl-full h-full w-full shadow-xl z-[-10]" alt="carousel" />
      </div>
    </div>
  );
}
