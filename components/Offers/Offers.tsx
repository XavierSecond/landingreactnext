import { EnvelopeIcon } from '@heroicons/react/24/outline'
import React from 'react'

export const Offers = () => {
  return (
    <div className=" w-[100vw] h-[88vh] bg-services bg-cover grid justify-center">
      <div className="grid grid-flow-row auto-rows-max gap-4 justify-center content-center">
        <div className="w-[100vw]"><h4 className="text-2xl text-[white] font-medium leading-[2rem] w-[40vw] h-fit mx-auto w-full text-center">Work with us</h4></div>
            <div className="w-[100vw]"><h1 className="text-[3rem] text-[#343432] font-semibold leading-[3.3rem] w-[40vw] h-fit mx-auto w-full text-center mb-8">Our Services</h1></div>
              <div className="grid grid-flow-col auto-cols-max justify-evenly w-[100vw] ">

              <div className="p-8 rounded-[2rem] max-w-[20vw]  min-h-[49vh] max-h-[49vh] bg-white shadow-xl grid grid-flow-row auto-rows-max gap-4 transform transition duration-500 hover:scale-110 hover:shadow-lg hover:shadow-gray-400 content-center self-center">
                  <img className="h-[7rem] w-[7rem] mx-auto" src="/images/survey.png"></img>
                  <h1 className="text-[#343432] font-semibold text-center mx-auto text-2xl">Auditing Services</h1>
                  <h4 className="text-[#343432] font-normal mx-auto text-lg text-center">Safety auditing involves a comprehensive evaluation of an organization's safety protocols, procedures, and compliance with relevant health and safety regulations.</h4>
              </div>
              <div className="p-8 rounded-[2rem] max-w-[20vw]  min-h-[49vh] max-h-[49vh] bg-white shadow-xl grid grid-flow-row auto-rows-max gap-4 transform transition duration-500 hover:scale-110 hover:shadow-lg hover:shadow-gray-400 content-center self-center">
                  <img className="h-[7rem] w-[7rem] mx-auto" src="/images/ingeniero.png"></img>
                  <h1 className="text-[#343432] font-semibold text-center mx-auto text-2xl">People</h1>
                  <h4 className="text-[#343432] font-normal mx-auto text-lg text-center">Supply of workers, technicians, security personnel, assistants,
                  mechanics, electricians and safety personnel</h4>
              </div>
              <div className="p-8 rounded-[2rem] max-w-[20vw]  min-h-[49vh] max-h-[49vh] bg-white shadow-xl grid grid-flow-row auto-rows-max gap-4 transform transition duration-500 hover:scale-110 hover:shadow-lg hover:shadow-gray-400 content-center self-center">
                  <img className="h-[7rem] w-[7rem] mx-auto" src="/images/entrenamiento.png"></img>
                  <h1 className="text-[#343432] font-semibold text-center mx-auto text-2xl">Training</h1>
                  <h4 className="text-[#343432] font-normal mx-auto text-lg text-center">Comprehensive OSHA Training and Coaching Services designed to enhance workplace safety and compliance. </h4>
              </div>
              <div className="p-8 rounded-[2rem] max-w-[20vw]  min-h-[49vh] max-h-[49vh] bg-white shadow-xl grid grid-flow-row auto-rows-max gap-4 transform transition duration-500 hover:scale-110 hover:shadow-lg hover:shadow-gray-400 content-center self-center">
                  <img className="h-[7rem] w-[7rem] mx-auto" src="/images/formacion.png"></img>
                  <h1 className="text-[#343432] font-semibold text-center mx-auto text-2xl">Mentoring Services</h1>
                  <h4 className="text-[#343432] font-normal mx-auto text-lg text-center">Safety mentoring provides personalized guidance to help individuals and organizations develop and implement effective safety practices. </h4>
              </div>
              
        </div>
            <a href="mailto:xilohe.revelo@clsolution.net" target="_blank"><button className="text-[1.3rem] text-[#343432] leading-8 w-max h-fit bg-[white] font-medium px-6 py-3 rounded-xl cursor-pointer grid grid-flow-col auto-cols-max gap-2 shadow-2xl mx-auto mt-8 transform transition duration-500 hover:scale-110">More information<EnvelopeIcon className="text-[#343432] h-[2rem] w-[2rem]" ></EnvelopeIcon></button></a>
      </div>
    </div>
  )
}
