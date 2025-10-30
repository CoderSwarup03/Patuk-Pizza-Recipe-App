import React, { useState } from 'react'
import Logo from '../assets/brand-logo.svg'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { setSearch } from '../slice/SearchSlice';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <div className='bg-white py-0.5 md:py-3 border-b-2 border-green-500 w-full fixed top-0 z-30'>
        <div className='flex justify-evenly items-center'>
          <Link to={'/'}>
            <img src={Logo} alt="logo" className='text-lg md:text-2xl' />
          </Link>
          <div className='hidden lg:block'>
            <ul className='flex gap-5 justify-center items-center text-xl font-bold'>
              <Link to={'/'} className='text-gray-500 hover:text-[rgb(255,164,7)] hover:underline underline-offset-2 cursor-pointer'>Home</Link>
              <Link to={'/category'} className='text-gray-500 hover:text-[rgb(255,164,7)] hover:underline underline-offset-2 cursor-pointer'>Category</Link>
              <Link to={'/blog'} className='text-gray-500 hover:text-[rgb(255,164,7)] hover:underline underline-offset-2 cursor-pointer'>Blog</Link>
              <Link to={'/contact'} className='text-gray-500 hover:text-[rgb(255,164,7)] hover:underline underline-offset-2 cursor-pointer'>Contact</Link>
            </ul>
          </div>
          <div className='hidden lg:block'>
            <div className='flex justify-center items-center gap-4'>
              <div>
                <input
                  onChange={(e) => dispatch(setSearch(e.target.value))}
                  placeholder='Search Fav Pizza...'
                  className='rounded-md outline-none p-2 border-2 border-green-500 text-mg font-semibold text-gray-500'
                  type="search" name="" id="" />
              </div>
              <span className="w-[1.5px] h-10 bg-[#ffa307] inline-block pointer"></span>
              <div className='flex flex-col gap-1 justify-start items-start'>
                <span className='text-md font-bold text-gray-500'>Call For Order</span>
                <span className='text-lg font-bold text-[#ffa307]'>+91 1234567890</span>
              </div>
            </div>
          </div>

          {/* Mobile View */}
          <div className='flex lg:hidden flex-row justify-center items-center gap-3'>
            <input
              onChange={(e) => dispatch(setSearch(e.target.value))}
              placeholder='Search Fav Pizza...'
              className='rounded-md outline-none p-2 border-2 border-green-500 text-sm font-semibold text-gray-500 w-[70%] md:w-full'
              ype="search" name="" id="" />
            <GiHamburgerMenu
              onClick={() => setMenu(!menu)}
              className='text-xl font-bold text-green-500 hover:text-green-600 h-[20vh]' />
          </div>
          <div
            onClick={() => setMenu()}
            className={`flex lg:hidden gap-2 justify-between bg-gray-100 absolute top-0 right-0 w-full h-[1/2] p-3 ${menu ? 'block' : 'hidden'}`}>
            <div className='flex flex-col gap-3 w-full h-full'>
              <Link to={'/'} className='text-gray-500 hover:text-[rgb(255,164,7)] cursor-pointer'>Home</Link>
              <Link to={'/category'} className='text-gray-500 hover:text-[rgb(255,164,7)] cursor-pointer'>Category</Link>
              <Link to={'/blog'} className='text-gray-500 hover:text-[rgb(255,164,7)] cursor-pointer'>Blog</Link>
              <Link to={'/contact'} className='text-gray-500 hover:text-[rgb(255,164,7)] cursor-pointer'>Contact</Link>
            </div>
            <div>
              <RxCross1
                onClick={() => setMenu(!menu)}
                className='text-2xl font-bold' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar