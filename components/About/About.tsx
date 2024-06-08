
import React from 'react'

export const About = () => {
  return (
    <div className=" w-[100vw] h-[88vh] bg-[#a9c52e] bg-cover justify-center">
      <div className="grid grid-cols-2 h-full w-full">
        <div className="grid content-center grid-flow-row auto-rows-max mx-24">
            <img className="h-[12rem] w-[12rem] m-auto" src="/images/sobre-nosotros.png"></img>
            <h1 className="text-[3rem] text-[#343432] font-semibold leading-[3.3rem] w-[40vw] underline h-fit mx-auto w-full mb-8 content-center">About us</h1>
            <h4 className="text-2xl text-[#343432] font-medium leading-[2rem] w-[40vw] h-fit mx-auto w-full italic">Our mission is to provide high-quality, personalized staffing solutions to
                companies in the construction industry, providing satisfying jobs to
                candidates and supporting the growth and success of our clients. We are
                committed to excellence, confidentiality and diversity, and we strive to
                create lasting relationships with our clients and candidates
            </h4>
        </div>
        <div className="h-full w-full ">
            <img className="h-full h-full m-auto object-cover shadow-2xl rounded-ss-[10rem] rounded-es-[33rem]" src="/images/women.jpg "></img>
            <img className="h-[15rem] w-[15rem] shadow-2xl m-auto rounded-full absolute top-[240%] righ-[38rem]" src="/images/logo-competo.jpg"></img>
        </div>
            
      </div>
    </div>
  )
}
