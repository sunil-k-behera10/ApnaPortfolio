import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";
import img from '../images/img.jpg'
import image from '../images/image.jpg'

const Hero = () => {
  return (
    <div className='relative overflow-hidden bg-purple-800 lg:py-20 py-8'>
      <div className='h-[50px] bg-white absolute -bottom-7 -left-[30px] -right-[30px] py-3 px-[-30px] rounded-[50%] '></div>
        <div className='xl:w-[1200px] mx-auto px-3 lg:flex items-center justify-between'>
          <div className='text-white lg:w-1/2'>
            <h1 className='lg:text-7xl text-2xl leading-normal pb-8 font-medium'>Architects with <span className=' italic text-orange-300'>innovative</span>{" "}approach{" "}</h1>
            <p className='lg:2/3 pb-8'>
              {" "}Architecture is the art and technique of designing and building, as distinguished from the skills
            </p>

            <div className='flex items-center gap-x-2'>
              <button className='rounded-full px-3 py-2 flex items-center text-sm bg-orange-300 hover:bg-white text-black gap-2 transition ease-out duration-300 transform hover:scale-110'>
                <p>Our Services</p>
                <IoMdArrowDropright className='text-xl' />
              </button>

              <button className='rounded-full px-3 py-2 flex items-center text-sm bg-white text-black hover:bg-orange-300 gap-2 transition ease-out duration-300 transform hover:scale-110'>
                <p>View Projects</p>
                <IoMdArrowDropright className='text-xl' />
              </button>

            </div>
          </div>
          <div className='lg:w-[35% w-72 relative lg:mx-0 mx-auto flex justify-end lg:py-0 py-8]'>
            <img src={img} alt="" className='lg:w-full  hover:transform hover:scale-110 duration-300 rounded-xl cursor-pointer' />
            <img src={image} alt=""  className='sm:block h-[270px] hidden lg:w-44 w-1/4 absolute bottom-16 lg:-left-20 -left-10 rounded-xl hover:transform hover:scale-110 duration-300  cursor-pointer '/>
          </div>
        </div>
    </div>
  )
}

export default Hero