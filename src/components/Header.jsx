import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"


const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!isOpen)
  }

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <div className="main fixed top-0 bg-transparent z-10 ">
      <nav className="flex justify-between items-center w-screen h-16 ">
        <div className="left sm:ml-20 ml-6 ">
          <img className="cursor-pointer sm:h-10" src="/favicon.ico" alt="" />
        </div>
        <div className="right flex sm:mr-20 mr-6  ">
          <div className="list Roboto uppercase sm:flex list-none hidden space-x-8 font-medium text-red-500  ">

            <Link to="/"> <motion.li whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className="border border-red-600 px-2 py-0  rounded-[3px] bg  ">HOME</motion.li></Link>

            <Link to="/about">  <motion.li whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className="border border-red-600 px-2 py-0 bg rounded-[3px]">ABOUT</motion.li></Link>

            <Link to="/projects">  <motion.li whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className="border border-red-600 px-2 py-0 bg rounded-[3px]">PROJECTS</motion.li></Link>

            <Link to="/services"> <motion.li whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className="border border-red-600 px-2 py-0 bg rounded-[3px]">SERVICES</motion.li></Link>

            <Link to="/contact"> <motion.li whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className="border border-red-600 px-2 py-0 bg rounded-[3px]">CONTACT</motion.li></Link>

          </div>
          <div className="icon sm:hidden text-4xl text-red-600" onClick={openMenu}>
            <IoIosMenu />

          </div>


        </div>
        {
          isOpen &&
          <div className="absolute top-16 mx-auto block w-screen  bg text-red-500 list-none Roboto pt-6  text-xl " onClick={closeMenu}>
            <Link to="/"> <li className="pb-3 text-center font-medium ">HOME</li></Link>
            <Link to="/about">  <li className="pb-3 text-center font-medium">ABOUT</li></Link>
            <Link to="/projects">  <li className="pb-3 text-center font-medium">PROJECTS</li></Link>
            <Link to="/services">  <li className="pb-3 text-center font-medium">SERVICES</li></Link>
            <Link to="/contact">  <li className="pb-8 text-center font-medium ">CONTACT</li></Link>
          </div>
        }
      </nav>
    </div>
  )
}

export default Header