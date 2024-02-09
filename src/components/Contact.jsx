import React, { useRef } from 'react'
import Header from './Header'
import emailjs from "@emailjs/browser"
import { Link } from 'react-router-dom'
import { IoMdAdd } from "react-icons/io";



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_qt32xtp", "template_jtv7czd", form.current, "1LYwEIRIUUHtPNweK")
      .then((result) => {
        console.log(result.text);
        form.current.reset();

      }, (error) => {
        console.log(error.text);


      }
      )
  }




  return (
    <>
      <Header />
      <div className="main pt-16  w-screen  bg-cover bg-center bg3 overflow-hidden ">
        <h2 className="mb-2 mt-12 text-3xl sm:text-4xl  font-[700] text-center  text-gray-200 Exo uppercase">Let's build a thing</h2>
        <p className="mb-2 text-3xl sm:text-4xl font-[700] text-center  text-lime-500  Exo uppercase">contact me</p>
        <div>
          <section class="">
            <div class="py-8  px-4 mx-auto max-w-screen-md">


              <form onSubmit={sendEmail} ref={form} class="space-y-8">
                <div className='sm:mx-0 mx-4 '>
                  <label for="name" class="block mb-2  text-white uppercase Exo ">Your name</label>
                  <input type="text" class="shadow-sm  bg-gray-200 border Roboto border-gray-300 outline-none rounded-lg  block w-full p-2.5 placeholder-black" placeholder="ENTER YOUR NAME *" required name='from_name'></input>
                </div>
                <div className='sm:mx-0 mx-4'>
                  <label for="email" class="block mb-2  text-white uppercase Exo">Your email</label>
                  <input type="email" class="shadow-sm bg-gray-200 border Roboto border-gray-300 outline-none  rounded-lg  block w-full p-2.5 placeholder-black" placeholder="ENTER YOUR EMAIL *" required name='from_email'></input>
                </div>
                <div class="sm:col-span-2 sm:mx-0 mx-4">
                  <label for="message" class="block mb-2 uppercase Exo text-white">Your message</label>
                  <textarea name='message' rows="6" class="block p-2.5 w-full Roboto  bg-gray-200  rounded-lg shadow-sm border border-gray-300 placeholder-black outline-none" placeholder="ENTER YOUR MESSAGE *"></textarea>
                </div>
                <button type="submit" class="py-3 px-5 mx-4 sm:mx-0 font-medium text-center text-white sm:rounded-none rounded-lg bg-lime-600 sm:w-fit hover:bg-lime-700  focus:outline-none uppercase Exo">Send message</button>
              </form>
            </div>
          </section>
        </div>

        <div className='lower-content '>
          <h4 className='Exo uppercase text-3xl sm:text-4xl text-gray-200 font-[700] text-center sm:px-[30%] px-[5%]'>Need a MERN Stack Web Developer? Let's build something.</h4>
          <p className='text-gray-200 text-center Roboto text-lg sm:text-[15px]  mt-2 mx-10'>If you have any Query Feel free to ask.I will response you asap. </p>
          <button className='text-white Roboto sm:w-fit sm:px-16 sm:py-4 text-[16px] w-[300px] text-center px-9 py-4 block mx-auto mt-8 bg-red-600 '>GET IN TOUCH</button>

          <div className='uppercase Exo mt-6 text-white'>
            <a className=' w-fit flex justify-center items-center pb-2  mx-[28%] gap-5' href="https://github.com/Code-with-Nani" target='_blank'><IoMdAdd className='text-red-900' /> Github</a>
            <a className=' w-fit flex justify-center items-center pb-2 mx-[28%] gap-5' href="https://github.com/Code-with-Nani" target='_blank'><IoMdAdd className='text-red-900' /> Twitter</a>
            <a className=' w-fit flex justify-center items-center pb-2 mx-[28%] gap-5' href="https://github.com/Code-with-Nani" target='_blank'><IoMdAdd className='text-red-900' /> Linkedin</a>
            <a className=' w-fit flex justify-center items-center pb-2 mx-[28%] gap-5' href="https://github.com/Code-with-Nani" target='_blank'><IoMdAdd className='text-red-900' /> Facebook</a>
            <a className=' w-fit flex justify-center items-center pb-2 mx-[28%] gap-5' href="https://github.com/Code-with-Nani" target='_blank'><IoMdAdd className='text-red-900' /> instagram</a>


          </div>
        </div>


      </div>




    </>
  )
}

export default Contact

