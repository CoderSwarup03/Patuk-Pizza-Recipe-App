import React from 'react'
import HeroImage from '../assets/hero-image.png'
import GooglePlay from '../assets/play-store.svg'
import AppStore from '../assets/apps-store.svg'
import { TbTruckDelivery } from "react-icons/tb";

const Hero = () => {
  return (
    <div className='bg-[#fdf8f1] h-[90vh] mt-[150px] md:mt-[82px]'>
      <div className='max-w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center gap-[25px]'>
        <div className='flex flex-col gap-2 items-center md:items-start mt-5'>
          <div className='flex justify-center items-center gap-3 bg-[#fcdca1] px-3 py-1 w-[220px] md:w-[400px]'>
            <TbTruckDelivery className='text-3xl md:text-2xl font-bold text-[#ff8f29]' />
            <span className='text-sm md:text-xl font-bold text-[#797777]'>Fastest Delivery Guaranted</span>
          </div>
          <h1 className='text-[30px] md:text-[50px] font-bold text-center md:text-start md:none'>Welcome to <span className='text-[#ffa101]'>PETUK</span> Restaurant</h1>
          <span className='text-gray-600 text-sm md:text-lg font-semibold text-center md:text-start m-2'>Get 10% instant off for all order and $200 signup bonus today for new registration!</span>
          <div className='flex flex-col md:flex-row gap-2 justify-center items-center'>
            <img src={GooglePlay} alt="google-play"  className='cursor-pointer w-[150px] md:w-full'/>
            <img src={AppStore} alt="app-store" className='cursor-pointer w-[150px] md:w-full' />
          </div>
        </div>
        <div className='flex justify-center items-center mt-[30px]'>
          <img src={HeroImage} alt="" className='w-2xl h-[70%] rotate-360 duration-10' />
        </div>
      </div>
    </div>
  )
}

export default Hero