import React from 'react'

export const Offers = () => {
  return (
    <div className=" w-[100vw] h-[88vh] bg-services bg-cover grid justify-center">
        <div className="grid grid-flow-row auto-rows-max gap-8 justify-center content-center">
            <div className="w-[100vw]"><h1 className="text-[3rem] text-white font-semibold leading-[3.3rem] w-[40vw] h-fit mx-auto w-full text-center">Our Services</h1></div>
            <div className="grid grid-flow-col auto-cols-max justify-evenly w-[100vw] ">
            <div className="p-8 rounded-[2rem] max-w-[28rem] h-max bg-white shadow-xl grid grid-flow-row auto-rows-max gap-6 content-center self-center">
                <img className="h-[9rem] w-[9rem] mx-auto" src="/images/audit-green.png"></img>
                <h1 className="text-[#343432] font-medium text-center mx-auto text-4xl underline">Auditing Services</h1>
                <h4 className="text-[#343432] font-normal mx-auto text-2xl text-center">Safety auditing involves a comprehensive evaluation of an organization's safety protocols, procedures, and compliance with relevant health and safety regulations.</h4>
            </div>
            <div className="p-8 rounded-[2rem] max-w-[28rem] h-max bg-white shadow-xl grid grid-flow-row auto-rows-max gap-6 content-center self-center">
                <img className="h-[9rem] w-[9rem] mx-auto" src="/images/audit-green.png"></img>
                <h1 className="text-[#343432] font-medium text-center mx-auto text-4xl underline">Auditing Services</h1>
                <h4 className="text-[#343432] font-normal mx-auto text-2xl text-center">Safety auditing involves a comprehensive evaluation of an organization's safety protocols, procedures, and compliance with relevant health and safety regulations.</h4>
            </div>
        </div>
        </div>
      
    </div>
  )
}
