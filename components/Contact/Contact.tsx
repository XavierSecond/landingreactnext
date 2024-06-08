
import React from 'react'

export const Contact = () => {
  return (
    <div className=" w-[100vw] bg-contact bg-cover justify-center content-center grid">
      <div className="">
        <div className="grid content-center grid-flow-col auto-cols-max mx-12 my-16 h-auto bg-white rounded-3xl p-8 shadow-xl w-full gap-8">
            <img className="h-[22rem] w-[20rem] m-auto" src="/images/contactenos.png"></img>
            <div>
                <h1 className="text-[2.5rem] text-[#343432] font-semibold leading-[3.3rem] w-[40vw] h-fit mx-auto w-full mb-6 content-center">Contact us</h1>
                <h4 className="text-2xl text-[#343432] font-medium leading-[2rem] w-[40vw] h-fit mx-auto w-full mb-2">Fullname</h4>
                <input className="w-[20vw] h-[3rem] mb-4 p-4 rounded-[0.6rem] shadow-xl bg-gray-200" type="text" placeholder="Fullname"></input>
                <h4 className="text-2xl text-[#343432] font-medium leading-[2rem] w-[40vw] h-fit mx-auto w-full mb-2">Email</h4>
                <input className="w-[20vw] h-[3rem] mb-4 p-4 rounded-[0.6rem] shadow-xl bg-gray-200" type="email" placeholder="Email"></input>
                <h4 className="text-2xl text-[#343432] font-medium leading-[2rem] w-[40vw] h-fit mx-auto w-full mb-2">Message</h4>
                <textarea className="w-[30vw] h-[auto] p-4 rounded-[0.6rem] shadow-xl bg-gray-200" placeholder="Enter your mesagge" rows={4}></textarea>
                <button className="text-[1.3rem] text-[white] leading-8 w-max h-fit bg-[#a9c52e] font-semibold px-8 py-3 rounded-xl cursor-pointer grid grid-flow-col auto-cols-max gap-2 shadow-2xl ml-auto mt-6 transform transition duration-500 hover:scale-110">Send</button>

                
            </div>
            
        </div>
            
      </div>
    </div>
  )
}
