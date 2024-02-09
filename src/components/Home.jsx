import React from 'react'
import Header from './Header'
import styled, { keyframes } from 'styled-components';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa6";
import Contact from './Contact';
import About from './About';
import Services from './Services';




const oscillate = keyframes`
  0% {
    transform: translateX(15px);
  }
  100% {
    transform: translateX(-15px);
  }
`;
const BurningSun = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ffcc00;
  border-radius: 50%;
  position: relative;
  animation: ${oscillate} 2s infinite alternate;
  box-shadow: inset 0 0 30px 0 #ffcc00, inset 20px 0 30px #fc6600, inset -20px 0 30px red, inset 20px 0 300px #ff40d6, inset -20px 0 300px #e3ff4b, 0 0 50px #fff, -10px 0 100px #fbff00, 10px 0 80px #FFA600;
`;




const Home = () => {
  return (
    <>
      <Header />




      <div className="home w-screen h-screen bg-cover bg-center bg relative pt-16 select-none">
        <div className='absolute top-36 left-[56%]' >
          <BurningSun />
        </div>
        <div className='main sm:flex justify-between items-center pt-60 w-screen '>

          <div className="left text-2xl ml-20 sm:flex sm:flex-col mt-40 gap-2 rounded-md hidden w-screen ">
            <FaFacebookSquare className='bg-gray-200 rounded-md' />
            <FaTwitterSquare className='bg-gray-200 rounded-md' />
            <FaInstagramSquare className='bg-gray-200 rounded-md' />
            <FaGithubSquare className='bg-gray-200 rounded-md' />
            <FaLinkedin className='bg-gray-200 rounded-md' />
            <div className='h-[100px] border-l-2 border-white mt-3 ml-2'></div>
          </div>


          <div className="right text-gray-300 sm:mr-[550px] sm:-mt-64 w-screen mr-0 text-center ml-0  ">
            <p className='Roboto text-[18px]  mt-1'>Hi, my name is</p>
            <h1 className='Exo text-5xl font-[700]  uppercase'>Muhammad Hanan</h1>
            <p className='Roboto text-[18px]   pt-1'>Full Stack Web Developer based in Pakistan</p>
          
           
          <Link to="/contact"><button className='Roboto text-[18px] uppercase  mt-2 border-2 border-red-500 w-fit px-3 text-white py-2 bg-red-600 rounded-3xl hover:bg-red-700'>Get in touch</button></Link>
          <a className='Roboto uppercase text-[18px] ml-2 sm:ml-1 mt-2 border-2 border-red-500 w-fit px-11 text-red-500 hover:text-white py-[9px]  rounded-3xl hover:bg-red-700 ' href="/My Resume.pdf">Resume</a> 
          <div className=" sm:hidden flex justify-center items-center text-4xl  mt-2 gap-2 ">
            <span className='' ><FaLinkedin /></span><span><FaGithub /></span>
            </div> 
            
          </div>

         

        </div>
      </div>


   
     <About/>

     <Services/>


     


      <Contact/>

    </>
  )
}

export default Home