import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FaBolt } from "react-icons/fa6";
import { IoMdArrowDropdown, IoMdArrowDropright, IoMdMenu } from "react-icons/io";


const Navbar = () => {
  const [navbar,setNavbar] = useState(false)
  return (
    <nav className='sticky top-0 z-50 bg-purple-800 '>
        <div className='container mx-auto lg:flex flex-wrap items-center justify-between px-3 border-b border-b-purple-500
        '>
          <div className='lg:w-1/5 sticky top-0 flex justify-between lg:static lg:justify-start h-[10vh] items-center'>
            <a href="/" className='font-medium tracking-wider transition-colors cursor-pointer'>
              <button className='flex items-center gap-4 text-white'>
                <FaBolt className='text-2xl'/>
                <p className='text-2xl'>Apna Portfolio</p>
              </button>
            </a>
            <div className='flex items-center'>
              <button className='cursor-pointer text-xl text-white leading-none px-3 py-1 h-[3rem] block lg:hidden outline-none focus:outline-none' onClick={()=> setNavbar(!navbar)}>

                {navbar? < AiOutlineClose/> : <FaBars/>}
              </button>
            </div>
          </div>

          <div className={'lg:flex flex-grow lg:items-center items-baseline lg:h-auto h-[90vh] justify-center lg:w-4/5' + (navbar ? 'flex' : 'hidden')}>
            <ul className='flex flex-col lg:flex-row items-center justify-between w-full gap-x-4 list-none lg:ml-auto lg:transform-none lg:translate-y-[50%]'>
              <div className='flex flex-col lg:flex-row items-center justify-center gap-x-8 lg:w-2/3 lg:border-x border-purple-800'>
                <li className='py-2 flex text-white font-medium items-center leading-snug hover:text-orange-300'>
                  <a href="#">Design</a>
                </li>
                
                <li className='py-2 flex text-white font-medium items-center leading-snug hover:text-orange-300'>
                  <a href="#">About Us</a>
                </li>

                <li className='py-2 flex text-white font-medium items-center leading-snug hover:text-orange-300'>
                  <a href="#">Portfolio</a>
                </li>

                <li className='py-2 flex text-white font-medium items-center leading-snug hover:text-orange-300'>
                  <a href="#">Contact</a>
                </li>

                <li className='py-2 flex text-white font-medium items-center leading-snug hover:text-orange-300'>
                  <a href="#">Reviews</a>
                </li>

              </div>

              <div className='lg:w-1/3 flex lg:flex-row flex-col items-center justify-end gap-x-8'>
                <li className='py-2 flex items-center text-white font-medium  leading-snug hover:opacity-40'>
                  <a href="#">EN</a>
                    < IoMdArrowDropdown />
                </li>

                <li className='py-2 flex text-white font-medium items-center leading-snug hover:opacity-40'>
                  <IoMdMenu className='text-3xl cursor-pointer'/>
                </li>
                <button className='rounded-full px-3 py-2 flex items-center bg-orange-200 text-purple-900 gap-2 transition ease-out duration-300 transform hover:scale-110'>
                  <p>Profile</p>
                  <IoMdArrowDropright className='text-xl'/>
                </button>
              </div>
            </ul>
          </div>
        </div>
    </nav>
  )
}

export default Navbar