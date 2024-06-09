import React from 'react'
import Image from 'next/image'
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-[100vw] h-[30vh] bg-[#F5F5F7] justify-center content-center grid p-6 grid-flow-row auto-rows-max gap-4">
      <div className="grid grid-flow-col auto-cols-max gap-2 justify-around w-[100vw]">
        <div className="grid self-center">
          <div className="grid grid-flow-col auto-cols-max gap-2 md:gap-4 flex-[0.6]">
            <Image
              src="/images/logo.png"
              width={100}
              height={100}
              alt="logo"
              className="flex items-center self-center"
            />
            <h1 className="text-[22px] text-[#343432] font-medium cursor-pointer gap-3 items-center grid grid-flow-row leading-5">
              Construction
              <span className="text-[#aeafa8]">Labor</span>
              <span className="text-[#a9c52e]">Solutions, LLC</span>
            </h1>
          </div>
        </div>
        <div>
          <div className="grid grid-flow-row auto-rows-max gap-2 md:gap-4 flex-[0.6]">
            <h1 className="text-[20px] text-[#343432] font-medium cursor-pointer gap-3 items-center grid grid-flow-row leading-5">
              Contact
            </h1>
            <h4 className="text-[#343432] font-normal text-[1rem] grid grid-flow-col auto-cols-max gap-2">
              <PhoneIcon className="text-[#343432] h-[1.5rem] w-[1.5rem]" /> +1 (984) 335-2877
            </h4>
            <h4 className="text-[#343432] font-normal text-[1rem] grid grid-flow-col auto-cols-max gap-2">
              <EnvelopeIcon className="text-[#343432] h-[1.5rem] w-[1.5rem]" /> info@example.com
            </h4>
            <h4 className="text-[#343432] font-normal text-[1rem] grid grid-flow-col auto-cols-max gap-2">
              <MapPinIcon className="text-[#343432] h-[1.5rem] w-[1.5rem]" /> 6609 Rossford Ln, Durham NC 27713
            </h4>
          </div>
        </div>
        <div className="my-auto">
          <a href="https://www.linkedin.com/in/construction-labor-solution-llc-48448230b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
            <Image
              src="/images/linkedin.png"
              width={50}
              height={50}
              alt="LinkedIn"
              className="flex items-center self-center"
            />
          </a>
        </div>
      </div>
      <div>
        <h4 className="text-[#343432] font-normal text-[1rem] w-[80vw] text-center gap-2 mx-auto mt-3 border-t-[0.1rem] border-[#343432] pt-2">
          Construction Labor Solutions {currentYear} All Rights Reserved ©
        </h4>
      </div>
    </div>
  )
}
