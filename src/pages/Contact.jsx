import React from 'react'
import Navbar from '../components/Navbar'
import { LuMessageSquareShare } from "react-icons/lu";
import Message1 from '../assets/message-1.svg'
import Message2 from '../assets/message-2.svg' 
import Message3 from '../assets/message-3.svg'
import ContactMen from '../assets/contact_men.svg'
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className='bg-[#fdfbf9]'>
        <div className='max-w-[80%] mx-auto py-[5vh] mt-[15vh] flex flex-col gap-8'>
          <h1 className='text-4xl font-bold latter-spacing text-[#1e1d23]'>Contact</h1>
          <div className='flex flex-col md:flex-row justify-between gap-4'>
            <div className='w-full md:w-[40%] border-2 border-green-500 bg-white flex flex-col gap-5 shadow-lg py-5'>
              <h3 className='text-xl font-bold latter-spacing text-[#1e1d23] mx-3'>Have any questions?</h3>
              <form className='flex flex-col gap-3 mx-3'>
                <span className='text-gray-500 text-semibold text-lg'>Your Name *</span>
                <input
                  placeholder=''
                  className='outline-none border-2 border-gray-500 hover:border-amber-400 px-3 py-2'
                  type="text" />
                <span className='text-gray-500 text-semibold text-lg'>Your Email *</span>
                <input
                  placeholder=''
                  className='outline-none border-2 border-gray-500 hover:border-amber-400 px-3 py-2'
                  type="text" />
                <span className='text-gray-500 text-semibold text-lg'>Subject *</span>
                <input
                  placeholder=''
                  className='outline-none border-2 border-gray-500 hover:border-amber-400 px-3 py-2'
                  type="text" />
                <span className='text-gray-500 text-semibold text-lg'>Message *</span>
                <textarea
                  className='h-[150px] outline-none border-2 border-gray-500 hover:border-amber-400 px-3 py-2'
                ></textarea>
                <button className='flex gap-2 items-center justify-center px-1 py-2 bg-[#ffa101] text-white w-[200px] cursor-pointer'>
                  <LuMessageSquareShare className='text-2xl font-bold' />
                  <span className='text-lg font-semibold uppercase'>Send Message</span>
                </button>
              </form>
            </div>
            <div className='hidden md:block w-full md:w-[60%] border-2 border-green-500 shadow-lg'>
              <div className='flex flex-col gap-[35px] py-4'>
                <img src={Message1}
                  className='w-[300px] h-[120px]'
                  alt="Message1" />
                <img src={Message2}
                  className='w-[300px] h-[120px] ml-[10vw]'
                  alt="Message2" />
                <img src={Message3}
                  className='w-[300px] h-[120px]'
                  alt="Message3" />
              </div>
              <div>
                <img className='absolute top-[60vh] right-[10vw] h-[300px] w-[350px]' src={ContactMen} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact