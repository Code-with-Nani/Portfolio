import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";


const Footer = () => {
  const defaultOptions = {
    reverse:        false,  
    max:            35,   
    perspective:    1000,   
    scale:          1.1,   
    speed:          1000,   
    transition:     true,  
    axis:           null,   
    reset:          true,    
    easing:         "cubic-bezier(.03,.98,.52,.99)",    
  }
  return (
    <div className='bg3 bg-cover bg-center w-screen  '>
      
      <div>
        <div className='flex justify-center items-center text-4xl pt-3 cursor-pointer w-fit mx-auto text-gray-100'>
    <FaFacebookSquare />
    <FaTwitterSquare />
    <FaInstagramSquare />
    <FaGithubSquare />
    <FaLinkedin />
    </div>
    <div className="text-gray-200 text-3xl flex justify-center items-center mt-3"><IoMdRocket /></div>
    <div className='text-center Roboto  pt-3 pb-5 text-white' >
      © Copyright 2024 - <a href="/">Muhammad Hanan</a></div>
    <div className='foot'></div>
    </div>
    
  </div>
  )
}

export default Footer