import { BuildingOfficeIcon } from '@heroicons/react/24/outline'
import React from 'react'

export const Welcome = () => {
  return (
    <div className=" w-[100vw] h-[100vh] bg-cover flex bg-welcome">
      <div className="grid grid-cols-2 m-auto justify-center h-full w-full]">
        <div className="grid grid-flow-row auto-rows-max text-left gap-8 h-max w-[40vw] mx-auto self-center">
          <h4 className="text-[1.3rem] text-[#343432] leading-8 w-[40vw] h-fit">Building Tomorrow, <span className="text-[#a9c52e]">Today!</span></h4>
          <h1 className="text-[3rem] text-[#a9c52e] font-semibold leading-[3.3rem] w-[40vw] h-fit">We are dedicated to building dreams and turning visions into reality </h1>
          <h4 className="text-[1.3rem] text-[#343432] leading-8 w-[40vw] h-fit">Join us as we construct a better, brighter future together. Let us be your partners in creating a masterpiece that will stand the test of time. Welcome to a world of endless possibilities with our team of skilled professionals.</h4>
          <button className="text-[1.5rem] text-white leading-8 w-max h-fit bg-[#a9c52e] font-medium px-6 py-3 rounded-xl cursor-pointer grid grid-flow-col auto-cols-max gap-2 shadow-lg">See our Services<BuildingOfficeIcon className="text-white h-[2rem] w-[2rem]" ></BuildingOfficeIcon></button>
        </div>
        <img src="/images/carousel/01.jpg" className="object-cover rounded-tl-full h-full w-full shadow-xl z-[-10]"></img>
      </div>
    </div>
  )
}
