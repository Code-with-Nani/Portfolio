import React from 'react'
import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"
import logo4 from "../assets/logo4.png"
import logo5 from "../assets/logo5.png"
import logo6 from "../assets/logo6.jpeg"
import logo7 from "../assets/logo7.jpeg"
import logo8 from "../assets/logo8.png"
import logo9 from "../assets/logo9.png"
import logo10 from "../assets/logo10.png"
import logo11 from "../assets/logo11.png"
import { motion } from 'framer-motion';
import { FiMonitor, FiCode, FiSearch } from 'react-icons/fi'; 
import Header from "../components/Header"
import { Tilt } from 'react-tilt';









const Services = () => {
  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }
  const services = [
    {
      title: 'Frontend Development',
      description: 'Craft interactive user interfaces using HTML, CSS, and JavaScript. Leverage modern libraries and frameworks like React to enhance user experiences.',
      image: 'https://t3.ftcdn.net/jpg/02/92/88/72/360_F_292887204_2wH041phSQo70eqaE9GRqFvn5MmQ4B8w.jpg',
    },
    {
      title: 'Backend Development',
      description: 'Architect robust server-side solutions with Node.js. Employ powerful frameworks such as Express  to handle data and logic.',
      image: 'https://img.freepik.com/free-vector/back-end-typographic-header-software-development-process-website-interface-design-improvement-programming-coding-it-profession-isolated-flat-vector-illustration_613284-210.jpg',
    },
  ];
  return (
    <>

        <Header/>

       <section className="services bg3 py-16 pt-24 select-none bg-cover bg-center w-screen">
        <div className="container mx-auto">
          <h2 className="text-3xl text-white font-semibold mb-8 Exo uppercase sm:ml-28 text-center sm:text-start">What i can do for you?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 cursor-pointer px-10 sm:px-5 ">
            {services.map(per => (
              <div
                className="bg-white p-6 rounded-xl sm:rounded-lg shadow-md hover:scale-105"
              >
                <h3 className="text-xl  font-semibold mb-4 Exo">{per.title}</h3>
                <p className="text-gray-700 Roboto">{per.description}</p>
                <img src={per.image} alt={Image} className="mt-4 rounded-md" />
              </div>
            ))}
          </div>
        </div>


        <section className="bg3 py-20">
      <div className="container mx-auto px-10 sm:px-5">
          <h4 className='text-3xl text-gray-100 font-semibold mb-8 Exo uppercase sm:ml-28 text-center sm:text-start'>My Expertise</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Tilt options={defaultOptions} >
          <div className="bg-gray-200 rounded-2xl  p-8 ">
          <motion.div
              whileHover={{ scale: 1.1,  }}
              className="mx-auto mb-4 bg-blue-600 rounded-full w-20 h-20 px-5 py-6 flex justify-center items-center"
            >
              <FiMonitor className='text-5xl  text-gray-100 mx-auto' />
            </motion.div>
            <h3 className="text-xl font-semibold Exo text-blue-700 mb-4">Web Design</h3>
            <p className="text-gray-700 Roboto">We create stunning and responsive websites tailored to your needs.</p>
          </div>
          </Tilt>

          <Tilt options={defaultOptions} >
          <div className="bg-gray-200 rounded-2xl  p-8 ">
          <motion.div
              whileHover={{ scale: 1.1,  }}
              className="mx-auto mb-4 bg-blue-600 rounded-full w-20 h-20 px-5 py-6 flex justify-center items-center"
            >
              <FiCode className='text-5xl  text-gray-100 mx-auto' />
            </motion.div>
            <h3 className="text-xl font-semibold mb-4 text-blue-700 Exo">Web Development</h3>
            <p className="text-gray-700 Roboto">We develop custom web applications using the latest technologies.</p>
          </div>
          </Tilt>

          <Tilt options={defaultOptions} >
          <div className="bg-gray-200 rounded-2xl  p-8 ">
          <motion.div
              whileHover={{ scale: 1.1,  }}
              className="mx-auto mb-4 bg-blue-600 rounded-full w-20 h-20 px-5 py-6 flex justify-center items-center"
            >
              <FiSearch className='text-5xl  text-gray-100 mx-auto' />
            </motion.div>
            <h3 className="text-xl font-semibold Exo mb-4 text-blue-700">SEO Optimization</h3>
            <p className="text-gray-700 Roboto">We optimize your website for search engines to increase visibility and traffic.</p>
          </div>
          </Tilt>
        </div>
      </div>
    </section>


        <h3 className='text-gray-200 text-3xl font-semibold heading uppercase text-center mt-10'>Technologies  i use</h3>
        <div className="btn heading font-bold text-2xl px-[1%] sm:px-[20%] sm:grid sm:grid-cols-4 sm:gap-6 shadow-none  grid grid-cols-2 gap-2  mt-5">
        <motion.span whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className=" w-fit bg-gray-200 flex justify-center items-center px-4 py-2 rounded-full gap-2 cursor-pointer "><img className='h-10 ' src={logo1} alt="" /> Html5</motion.span>
        <motion.span whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}className=" w-fit bg-gray-200 flex justify-center items-center px-4 py-2 rounded-full gap-2 cursor-pointer "><img className='h-10 ' src={logo3} alt="" /> JavaScript</motion.span>
         <motion.span whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}className=" w-fit bg-gray-200 flex justify-center items-center px-4 py-2 rounded-full gap-2 cursor-pointer  "><img className='h-10 ' src={logo4} alt="" /> Bootstrap</motion.span>
         <motion.span whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}className=" w-fit bg-gray-200 flex justify-center items-center px-4 py-2 rounded-full gap-2 cursor-pointer  sm:ml-0 ml-7"><img className='h-10 ' src={logo2} alt="" /> CSS3</motion.span>
          <motion.span whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}className=" w-fit bg-gray-200 flex justify-center items-center px-4 py-2 rounded-full gap-2 cursor-pointer "><img className='h-10 mix-blend-multiply' src={logo9} alt="" /> ReactJS</motion.span>
         <motion.span whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className=" w-fit bg-gray-200 flex justify-center items-center px-4 py-2 rounded-full gap-2 cursor-pointer "><img className='h-10 mix-blend-multiply' src={logo8} alt="" /> Redux</motion.span>
         <motion.span whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}className=" w-fit bg-gray-200 flex justify-center items-center sm:px-4 py-2 px-10 rounded-full cursor-pointer  gap-2"><img className='h-10 mix-blend-multiply' src={logo7} alt="" /> TailwindCSS</motion.span>
        <motion.span whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className=" w-fit bg-gray-200 flex justify-center items-center px-4 py-2 rounded-full gap-2 cursor-pointer  sm:ml-0 ml-12 "><img className='h-10 mix-blend-multiply' src={logo5} alt="" /> Git</motion.span>
         <motion.span whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className=" w-fit bg-gray-200 flex justify-center items-center px-7 py-2 rounded-full gap-2 cursor-pointer "><img className='h-10 mix-blend-multiply' src={logo6} alt="" /> FramerMotion</motion.span>
        <motion.span whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className=" w-fit bg-gray-200 flex justify-center items-center px-4 py-2 rounded-full gap-2 cursor-pointer ml-10 "><img className='h-10 mix-blend-multiply' src={logo10} alt="" /> NextJS</motion.span>
       <motion.span whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className=" w-fit bg-gray-200 flex justify-center items-center px-4 py-2 rounded-full gap-2 cursor-pointer "><img className='h-10 mix-blend-multiply ' src={logo11} alt="" /> MongoDB</motion.span>
         <motion.span whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}className=" w-fit bg-gray-200 flex justify-center items-center px-4 py-2 rounded-full gap-2 cursor-pointer text-green-500">Express<img className='h-10 mix-blend-multiply ' src={logo3} alt="" /> </motion.span>


        </div>

          
        

        



      </section>

     
    </>

  )
}

export default Services