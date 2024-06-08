
import React from 'react'

export const Contact = () => {
  return (
    <div className=" w-[100vw] h-[88vh] bg-contact bg-cover justify-center content-center grid">
      <div className="">
        <div className="grid grid-cols-2 mx-auto my-16 h-auto bg-white rounded-3xl shadow-xl w-full h-[71vh] max-h-[71vh] max-w-[80vw]">
            <div className="h-full w-full">
                <img className=" rounded-s-3xl h-full h-[71vh] max-h-[71vh]" src="/images/about.jpg"></img>
            </div>
            <div className="p-8">
                <h1 className="text-[2.5rem] text-[#343432] font-semibold leading-[3.3rem] w-[40vw] h-fit mx-auto w-full mb-6 content-center">Contact us</h1>
                <div className=" grid grid-flow-col auto-cols-max gap-8">
                   <div className=" grid grid-flow-row auto-rows-max">
                        <h4 className="text-xl text-[#343432] font-medium leading-[2rem] w-[40vw] h-fit mx-auto w-full mb-2">Fullname</h4>
                        <input className="w-[15vw] h-[3rem] mb-4 p-4 rounded-[0.6rem] shadow-xl bg-gray-200" type="text" placeholder="Fullname"></input>
                    </div>
                    <div className=" grid grid-flow-row auto-rows-max">
                        <h4 className="text-xl text-[#343432] font-medium leading-[2rem] w-[40vw] h-fit mx-auto w-full mb-2">Email</h4>
                        <input className="w-[15vw] h-[3rem] mb-4 p-4 rounded-[0.6rem] shadow-xl bg-gray-200" type="email" placeholder="Email"></input>
                    </div>
                </div>
                <h4 className="text-xl text-[#343432] font-medium leading-[2rem] w-[40vw] h-fit mx-auto w-full mb-2">Phone</h4>
                <input className="w-[15vw] h-[3rem] mb-4 p-4 rounded-[0.6rem] shadow-xl bg-gray-200" type="tel" placeholder="Phone"></input>
                <div className=" grid grid-flow-row auto-rows-max ">
                    <div className=" grid grid-flow-row auto-rows-max">
                        <h4 className="text-xl text-[#343432] font-medium leading-[2rem] w-[40vw] h-fit mx-auto w-full mb-2">Message</h4>
                        <textarea className="w-[32vw] h-[auto] p-4 rounded-[0.6rem] shadow-xl bg-gray-200" placeholder="Enter your mesagge" rows={3}></textarea>
                    </div>
                    <button className="text-[1rem] text-[white] leading-8 w-max h-fit bg-[#a9c52e] font-semibold px-8 py-3 rounded-xl cursor-pointer grid grid-flow-col auto-cols-max gap-2 shadow-2xl ml-auto mt-10 transform transition duration-500 hover:scale-110">Send</button> 

                </div>
            </div>    
        </div>     
      </div>
    </div>
  )
}
