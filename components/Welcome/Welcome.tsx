import React from 'react'
import Carousel from '../Carousel/Carousel'
import SimpleSlider from '../Carousel/Carousel'

export const Welcome = () => {
  return (
    <div className=" w-[100vw] h-[88vh] bg-cover flex">
      <div className="grid grid-cols-[repeat(2,_minmax(0,_40%))] m-auto justify-center h-[50vh]">
        <div className="grid grid-flow-row auto-cols-max text-left gap-4 h-auto w-[40vw] mx-auto">
          <h1 className="text-[4rem] text-[#a9c52e] font-semibold leading-[4.5rem] w-[40vw]">Welcome to our company</h1>
          <h4 className="text-[1.3rem] text-[#343432] leading-8 w-[40vw]">We are dedicated to building dreams and turning visions into reality. Join us as we construct a better, brighter future together. Let us be your partners in creating a masterpiece that will stand the test of time. Welcome to a world of endless possibilities with our team of skilled professionals.</h4>
        </div>
        <SimpleSlider   />
      </div>
    </div>
  )
}
