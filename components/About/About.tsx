
import React from 'react'

export const About = () => {
  return (
    <div className=" w-[100vw] h-[88vh] bg-cover justify-center">
      <div className="grid-flow-row auto-rows-max grid">
        <div className="h-[30vh] bg-cover bg-about grid content-center border-b-[1.3rem] border-[#a9c52e] shadow-2xl">
          <h1 className="text-[3rem] text-[#b3c079] font-bold leading-[3.3rem] w-[100vw] h-fit mx-auto w-full content-center text-center">Construction Labor Solutions, LLC</h1>

        </div>
        <div className="grid grid-cols-2 w-full h-[58vh]">
          <div className="grid grid-flow-row auto-rows-max mx-24 my-auto h-[58vh] content-center">

              <h1 className="border-l-[0.5rem] border-[#a9c52e] pl-2 text-[5rem] text-[#343432] font-semibold leading-[3rem] w-[40vw] h-fit mx-auto w-full mb-8 content-center">About us</h1>
              
              <h4 className="text-xl text-[#343432] font-medium leading-[2rem] w-[40vw] h-fit mx-auto w-full italic">Our mission is to provide high-quality, personalized staffing solutions to
                  companies in the construction industry, providing satisfying jobs to
                  candidates and supporting the growth and success of our clients. We are
                  committed to excellence, confidentiality and diversity, and we strive to
                  create lasting relationships with our clients and candidates
              </h4>
          </div>
          <div className="h-[58vh] w-full">
              <img className=" h-[58vh] w-full m-auto object-cover shadow-2xl rounded-ss-[10rem] rounded-es-[33rem]" src="/images/women.jpg "></img>
              <img className="h-[13rem] w-[13rem] shadow-2xl m-auto rounded-full absolute top-[247%] righ-[38rem]" src="/images/logo-competo.jpg"></img>
          </div>
              
        </div>
      </div>
    </div>
  )
}
