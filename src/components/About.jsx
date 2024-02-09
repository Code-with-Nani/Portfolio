import React from 'react'
import Header from './Header'
import bg2 from "../assets/bg2.webp"
import { PiHandWaving } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import Contact from './Contact';
import Services from './Services';

const About = () => {
  return (
    <>
      <Header />
      <div className="main w-screen pt-10 bg-cover bg-center bg3">

        <div className="about">
          <div className='w-screen  about px-5 sm:px-[20%] pb-10'>
            <h2 className=' uppercase Exo text-red-600 text-5xl tracking-tighter font-[600] pt-9 sm:pt-12 pb-3 '>About</h2>

            <div className='relative pt-3 text-gray-200'>
              <span className='text-3xl absolute '><PiHandWaving /></span><span className='px-10  para list font-[400] sm:text-xl leading-[1.7rem] sm:leading-[1.4rem] text-[1.1rem]'> Hi, I'm <span className='text-lime-500'>Muhammad Hanan</span> , a MERN stack web developer. I love -- making websites that work well and look good. My journey into coding started because I enjoy solving problems, I love coding and now I'm all about creating cool things on the internet.
              </span>
            </div>

            <div className='relative pt-3 text-gray-200'>
              <span className='  para list font-[400] sm:text-xl leading-[1.7rem] sm:leading-[1.4rem] text-[1.1rem]'> <span className='text-2xl'>💻</span> I'm good at using <span className='bg text-lime-500 px-2' >MongoDB</span>  ,<span className='bg text-lime-500 px-[2px]' >Express.js</span>, <span className='bg text-lime-500 px-2' >React</span>, and <span className='bg text-lime-500 px-2' >Node.js</span> - the MERN stack. It helps me build websites that can do a lot of different things. I've worked on different projects, learning how to make both the front and back ends work smoothly.

              </span>
            </div>

            <div className='relative pt-3 text-gray-200'>
              <span className='  para list font-[400] sm:text-xl leading-[1.7rem] sm:leading-[1.4rem] text-[1.1rem]'> 🚀 I enjoy challenges and am always trying to learn new things in web development. I believe in writing code that's easy to understand, talking with my team, and making things that people enjoy using.

              </span>
            </div>

            <div className='relative pt-3 text-gray-200'>
              <span className='  para list font-[400] sm:text-xl leading-[1.7rem] sm:leading-[1.4rem] text-[1.1rem]'> 🌐 Let's make something awesome together! If you need a <span className='text-lime-500'>MERN </span>stack developer who's excited about bringing ideas to life on the web, I'm here and ready to help.If you think I'm a good fit for your project, feel free to contact me. I'd love to hear from you. Thank you for visiting my portfolio.

              </span>
            </div>

            <div className='pt-9'>
              <h4 className='heading uppercase text-3xl sm:text-4xl  font-[700] text-center sm:px-[20%] px-[5%] text-lime-500'>Let's work together</h4>
              <Link to="/contact"><motion.button whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }} className='text-white Roboto hover:bg-red-700 bg-red-600  sm:w-fit sm:px-14 sm:py-3 text-[16px] w-[300px] text-center px-9 py-4 block mx-auto mt-8 rounded-[8px] '>CONTACT ME</motion.button></Link>
            </div>



          </div>
        </div>




        <div className='w-screen'>
          <img className='mx-auto opacity-70 -mt-10 sm:-mt-16 ' src={bg2} alt="" />
        </div>

      </div>
    


      


    </>
  )
}

export default About