import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaBolt, FaXTwitter } from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";

const Footer = () => {
  return (
    <div className='bg-purple-700 text-white pb-16'>
        <div  className='container mx-auto px-3 lg:pt-20 pt-8 '>
          <section>
            <div className='lg:flex items-center justify-between'>
              <span className='lg:w-4/5 lg:flex items-center justify-start'>
                  <button className='lg:w-1/3 flex items-center gap-x-4 text-white'>
                      <FaBolt className='text-2xl'/>
                      <p className='text-2xl'>Apna Portfolio</p>
                  </button>
                 
              </span>
              <span className='lg:w-1/3 flex items-center gap-x-5 lg:pb-0 pb-4'>
              <button className='rounded-full px-3 py-2 flex items-center bg-white text-black gap-2 transition ease-out duration-300 transform hover:scale-105'>
                  <p>Stay Connected</p>
                  <IoMdArrowDropright/>
                </button>
                <button className='rounded-full px-3 py-2 flex items-center bg-orange-400 text-white gap-2 transition ease-out duration-300 transform hover:scale-105'>
                  <p>Contact us</p>
                  <IoMdArrowDropright/>
                </button>
              </span>
            </div>

            <div className='lg:py-20'>
              <ul className='lg:flex items-center justify-between'>
                <div className='lg:flex justify-start items-center lg:w-4/5'>
                  <li className='lg:w-1/4 lg:pb-0 pb-3 hover:text-orange-300'>
                    <a href="#">Home</a>
                  </li>
                  <li className='lg:w-1/4 lg:pb-0 pb-3 hover:text-orange-300'>
                    <a href="#">Design</a>
                  </li>
                  <li className='lg:w-1/4 lg:pb-0 pb-3 hover:text-orange-300'>
                    <a href="#">Portfolio</a>
                  </li>
                  <li className='lg:w-1/4 lg:pb-0 pb-3 hover:text-orange-300'>
                    <a href="#">About</a>
                  </li>
                </div>
                <li className='lg:w-1/3 lg:pb-0 pb-2 pl-2 '>Follow us</li>
              </ul>
              <ul className='lg:flex items-center justify-between lg:pt-8'>
                <div className='lg:flex items-center justify-start lg:w-4/5'>
                  <li className='lg:w-1/4 lg:pb-0 pb-3 hover:text-orange-300'>
                    <a href="#">Projects</a>
                  </li>
                  <li className='lg:w-1/4 lg:pb-0 pb-3 hover:text-orange-300'>
                    <a href="#">Years of Experience</a>
                  </li>
                  <li className='lg:w-1/4 lg:pb-0 pb-3 hover:text-orange-300'>
                    <a href="#">Awards</a>
                  </li>
                  <li className='lg:w-1/4 lg:pb-0 pb-3 hover:text-orange-300'>
                    <a href="#">Services</a>
                  </li>
                </div>
                <span className='gap-2 text-white lg:w-1/3 flex items-center '>
                  <FaFacebook className='cursor-pointer rounded-full border-purple-500 p-2 h-8 w-8'/>
                  <FaInstagram className='cursor-pointer rounded-full border-purple-500 p-2 h-8 w-8'/>
                  <FaLinkedin className='cursor-pointer rounded-full border-purple-500 p-2 h-8 w-8'/>
                  <FaTwitter className='cursor-pointer rounded-full border-purple-500 p-2 h-8 w-8'/>
                </span>
              </ul>
            </div>
          </section>
          <section>
            <ul className='sm:flex justify-between pt-8'>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Condition</a>
              </li>
              <li>
                <a href="#"> All rights reserved @ Apna Portfolio</a>
              </li>
            </ul>
          </section>
        </div>
    </div>
  )
}

export default Footer