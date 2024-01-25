import React from 'react'
import { navLinks } from '../constants'
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='bg-black text-white flex justify-center '>
      <div className='xl:max-w-[1280px] w-full md:p-15 mmd:p-10 p-5 flex flex-col justify-center items-center'>
        <div className='flex justify-around w-full border-b-1 border-white p-10'>
        <ul className='flex gap-10 h-full'>
          {navLinks.map((navlink, index) => (
            <li key={index}>
              {navlink.title}
            </li>
          ))}
        </ul>
        <p className='hidden lg:flex text-6xl text-right'>example@gmail.com</p>
        </div>
        <div className='flex lg:justify-start justify-center items-center lg:flex-row flex-col w-full mt-10'>
            <div className='flex-1 lg:ml-20'>
              <div className='flex flex-col '>
                <p>123 Sakura Street</p>
                <p>Tokyo, 123-4567,</p>
                <p>Japan.</p>
              </div>
            <h1 className='text-8xl mt-10'>SHIEN®</h1>
            </div>
            <div className='flex-1 flex-row flex justify-center gap-10 items-center h-full text-4xl lg:mt-0 mt-10'>
              <a href='/'>
                <BsFacebook/>
              </a>
              <a href='/'>
                <BsInstagram/>
              </a>
              <a href='/'>
                <FaXTwitter/>
              </a>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Footer