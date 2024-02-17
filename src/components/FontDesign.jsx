import React from 'react'
import { IoMdArrowDropright,  IoIosArrowUp } from "react-icons/io";
import { PiDiamondsFourFill, PiLadderSimpleThin  } from "react-icons/pi";
import { BiSolidTreeAlt } from "react-icons/bi";
import { SiLinktree,  SiIcomoon } from "react-icons/si";
import { TbStackBackward } from "react-icons/tb";


const FontDesign = () => {
  return (
    <div className='relative overflow-hidden bg-white lg:py-20 py-8'>
      <div className='h-[50px] bg-purple-700 absolute -bottom-7 -left-[30px] -right-[30px] py-3 px-[30px] rounded-[50%]'></div>
      <div className='xl:w-[1200px] mx-auto px-3 pt-8'>
        <section className='relative'>
          <p className='text-center text-orange-500'>What we do</p>
          <h1 className='text-center text-purple-700 lg:text-5xl text-xl font-bold italic'>Bringing new life to old <span className='text-orange-400'>processes</span></h1>

          <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 pt-8 '>
            
            <span className='bg-white py-8 px-6 rounded-xl hover:bg-purple-300 hover:transform hover:scale-110 duration-300 hover:text-orange-500'>
                < PiDiamondsFourFill className='text-5xl'/>
                <p className='text-xl text-purple-700 font-semibold py-8 pb-4'>Interior Design</p>
                <p className='text-black'>Interior Design is the art and science of enhancing</p>
            </span>

            <span className='bg-white py-8 px-6 hover:text-orange-500 rounded-xl hover:bg-purple-300 hover:transform hover:scale-110 duration-300 hover:cursor-pointer '>
                  <  SiLinktree className='text-5xl'/>
                  <p className='text-xl text-purple-700 font-semibold py-8 pb-4'>Decoration</p>
                  <p className='text-black'>Decorated by professional designers</p>
            </span>

            <span className='bg-white py-8 px-6 hover:text-orange-500 rounded-xl hover:bg-purple-300 hover:transform hover:scale-110 duration-300 hover:cursor-pointer'>
                  < TbStackBackward className='text-5xl'/>
                  <p className='text-xl text-purple-700 font-semibold py-8 pb-4'>Construction</p>
                  <p className='text-black'>The techniques, procedures, and materials used.</p>
            </span>

            <span className='bg-white py-8 px-6 hover:text-orange-500 rounded-xl hover:bg-purple-300 hover:transform hover:scale-110 duration-300 hover:cursor-pointer'>
                  < BiSolidTreeAlt className='text-5xl'/>
                  <p className='text-xl text-purple-700 font-semibold py-8 pb-4'>Architectural</p>
                  <p className='text-black'>The processes of planning, designing and constructing buildings</p>
            </span>
          </div>

                <PiLadderSimpleThin className='text-purple-700 text-6xl absolute top-0 left-0 opacity-20'/>
                < SiIcomoon className='text-purple-700 text-6xl absolute top-0 right-0 rotate-90 opacity-20'/>
        </section>

        <section className='lg:flex justify-between items-center relative mt-12 lg:p-8'>
          <div className='flex justify-center'>
            <img src="https://images.pexels.com/photos/2551794/pexels-photo-2551794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='lg:w-full w-80 hover:transform hover:scale-110 duration-300 rounded-xl cursor-pointer' />
          </div>


          <div className='lg:w-1/2 lg:py-0 py-20 pl-10'>
            <p className='text-purple-700'>Our Architects Journey</p>
            <h1 className='text-purple-700 lg:text-5xl text-xl font-semibold pt-4 pb-6'>Beautiful Designs & <span className='italic text-orange-400'>Achievements</span>
            </h1>

            <p className='text-black leading-8'>
              Studying architecture is demanding and is rated as one of the most challenging courses at the university. It requires long hours, commitment, and a seven-year study period.
            </p>

            <div className='flex items-center lg:gap-x-8 py-8'>
              <button className='rounded-full px-4 py-2 flex items-center text-sm bg-orange-400 text-white gap-2 transition ease-out duration-300 transform scale-100 hover:bg-purple-600'>
                <p>Read more</p>
                <IoMdArrowDropright className='text-xl'/>
              </button>

              <button className='rounded-full px-4 py-2 flex items-center text-sm text-white gap-2 transition ease-out duration-300 transform scale-100'>
                   <p>View Projects</p>
                   <IoMdArrowDropright className='text-xl'/>
              </button>
            </div>

            <div className='flex justify-between pt-4 lg:gap-0 gap-2'>
              <span>
                <h1 className='text-purple-500 font-semibold text-4xl'>18</h1>
                <p className='w-1/2 lg:text-base text-sm'>Years of Experience</p>
              </span>

              <span>
                <h1 className='text-purple-500 font-semibold text-4xl'>280</h1>
                <p className='w-1/2 lg:text-base text-sm'>Projects Completed</p>
              </span>

              <span>
                <h1 className='text-purple-500 font-semibold text-4xl'>12</h1>
                <p className='w-1/2 lg:text-base text-sm'>Awards Received</p>
              </span>
            </div>
          </div>
          <IoIosArrowUp className='text-orange-500 text-4xl absolute top-0 left-0 rotate-[315deg]'/>
          <IoIosArrowUp className='text-orange-500 text-4xl absolute top-0 right-0 rotate-45'/>
          <IoIosArrowUp className='text-orange-500 text-4xl absolute bottom-0 left-0 rotate-[225deg]'/>
          <IoIosArrowUp className='text-orange-500 text-4xl absolute bottom-0 right-0 rotate-[134deg]'/>

        </section>
      </div>

    </div>
  )
}

export default FontDesign