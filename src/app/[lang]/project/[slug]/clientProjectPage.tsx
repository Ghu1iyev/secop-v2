import Title from '@/components/shared/Title/Title'
import { ProjectProps } from '@/types/common'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const ClientProjectPage = ({data} : {data: ProjectProps}) => {
    
  return (
    <main className="container">
      <div className=" mt-20 lg:mt-36 lg:mb-12 mb-8">
        <div className=" text-base md:text-lg lg:text-xl font-monda text-[#B0B0B099] leading-7 flex items-center gap-5">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span>
            <IoIosArrowForward />
          </span>
          <Link href="/project" className="hover:text-white">
            Projects
          </Link>
          <span>
            <IoIosArrowForward />
          </span>
          <span className="text-white font-semibold">Project Page</span>
        </div>
      </div>

      <div className="p-8 md:p-12 lg:p-20 bg-[#121212] rounded-3xl w-100% h-auto ">
        <Title title={"slug"} subtitle={"slug"} />

        <div className="w-full h-[276px] md:h-[516px] mt-10 lg:mb-14 mb-10 relative">
          <Image
            src={data?.image || ""}
            alt=""
            blurDataURL={data?.image || ""}
            placeholder='blur'
            fill
            className="object-cover rounded-[20px] "
          />
        </div>

        <p className="font-vesber text-xl md:text-2xl lg:text-3xl leading-8">
         {data?.name}
        </p>
        <div className="w-full h-[1px] bg-[#2A2A2A] my-10"></div>

        <div className="font-monda text-xs md:text-sm lg:text-base leading-8 font-normal">
          <p>
            Client: <span className="text-[#B0B0B0]">{data?.client}</span>
          </p>

          <p>
            Duration: <span className="text-[#B0B0B0]">{data?.duration}</span>
          </p>

          <p>
            Services Provided: {""}
            <span className="text-[#B0B0B0]">
             {data?.services_provided}
            </span>
          </p>
        </div>

        <div className=" mt-10 lg:mt-14">
          <p className="font-monda text-xs md:text-sm lg:text-base leading-8 font-normal text-[#B0B0B0]">
            {data?.detail_text}
          </p>
        </div>
      </div>
    </main>
  )
}

export default ClientProjectPage
