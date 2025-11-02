import React, { useState } from 'react'
import BlogImg from '../assets/single-image.jpg'
import Men from '../assets/men.jpg'
import BlogImg1 from '../assets/blog-img1.jpg'
import BlogImg2 from '../assets/blog-img2.jpg'
import { IoIosSearch } from "react-icons/io";
import { FaOtter } from 'react-icons/fa'
import { RiChatSmile3Fill } from "react-icons/ri";
import Footer from './Footer'
const MyBlog = () => {
  const [sms, setSms] = useState(false)
  return (
    <>
      <div className='bg-[#fdfbf9] mt-[20vh] md:mt-[10vh] border-2 border-green-600'>
        <div className='max-w-[90%] md:max-w-[80%] mx-auto p-3 mt-5'>
          <h1 className='text-xl md:text-3xl lg:text-5xl font-bold'>How to make a pizza at home?</h1>
          <div className='flex flex-col lg:flex-row justify-between gap-3 mt-10'>
            {/* for left */}
            <div className='border-2 border-green-600 w-full lg::w-[70%] bg-white p-3'>
              <div className=''>
                <img src={BlogImg} alt='blog-page-image' />
                <div className='flex gap-2 items-center mt-5'>
                  <div className='flex  items-center gap-2'>
                    <img src={Men} alt="" />
                    <span className='text-sm md:text-lg font-semibold text-[#777a80]'>M.Twin</span>
                  </div>
                  <div>
                    <span className='inline-block h-[15px] w-0.5 bg-[#777a80]'></span>
                  </div>
                  <div>
                    <span className='text-sm md:text-lg font-semibold text-[#777a80]'>2 Nov</span>
                  </div>
                  <div className='hidden md:block'>
                    <span className='inline-block h-[15px] w-0.5 bg-[#777a80]'></span>
                  </div>
                  <div className='hidden md:block'>
                    <span className='text-lg font-semibold text-[#777a80]'>Pizza</span>
                  </div>
                </div>
                <div className='text-[#777a80] font-semibold text-sm md:text-lg mt-5'>
                  <span>And its distance, scale was and I of mellower great. Recently the contracting those what in however, chair. For to is except notice to he first were to a its wonder progress voices my day she were positives that the operations or way and her that them. Good you interesting.Then service, gleaning many repeat because of mars as his he'd you business versus it the have move quarter cold a than essential check up in at meticulous be the we day odd them merit around it's get harmonics. Pink the have such to picture his of king's bright the funds various his in concept sides and the seal to the bulk; To else. Travelling, approached his understanding hologram a king's coast by slogging to the transformed room. May help family as a there to human employed a produce me. The follow that considerations, a really have researches how gone.</span>
                </div>
                <h3 className='text-xl font-bold mt-5'>What we do in our Restaurant?</h3>
                <div className='flex flex-col gap-3'>
                  <p className='text-[#777a80] font-semibold text-sm md:text-lg mt-5'>Case he a may of the found for the it sinking a is self-interest. They the necessary to of been the there to by he though, attribute instead, posts, of price strained of create to embarrassed trade, lift calculus to have let room sofas was belly, at and title make music. Literature sentences my behind goodness. Initial thousand personalities nearby best select because can before could it the enormity</p>
                  <div className='flex flex-col md:flex-row items-center gap-2'>
                    <img src={BlogImg1} className='w-[250px]' alt="blog-images" />
                    <img src={BlogImg2} className='w-[250px]' alt="blogImages" />
                  </div>
                  <p className='text-[#777a80] font-semibold text-sm md:text-lg mt-5'>
                    Assets named receive make continued would appearance, this he there understand were the passion her by in our such, yourself big didn't best pointing necessary it he bed throughout. It why than raised as of for and founding not on bad the first me refinement is it day of go. Duck the seal to lively. Publication at the of accustomed. Self-interest, duck thousand canvassing are them.
                  </p>
                </div>

                <div className='flex flex-col gap-3'>
                  <h3 className='text-xl font-bold'>Leave a comment</h3>
                  <form className='flex  flex-wrap items-center gap-2'>
                    <div className='flex w-full gap-2'>
                      <input
                        placeholder='Name'
                        className='border-2 border-[#777a80] hover:border-[#ffa101] outline-none p-3 w-[50%] text-lg font-semibold'
                        type="text" />
                      <input
                        placeholder='Email'
                        className='border-2 border-[#777a80] hover:border-[#ffa101] outline-none p-3 w-[50%] text-lg font-semibold'
                        type="email" />
                    </div>
                    <input
                      placeholder='Website'
                      className='border-2 border-[#777a80] hover:border-[#ffa101] outline-none p-3 w-full text-lg font-semibold'
                      type="text" />
                    <textarea
                      placeholder='Your Commenets'
                      className='w-full h-[150px] outline-none border-2 border-[#777a80] hover:border-[#ffa101] p-3 text-lg font-semibold'
                      name="" id=""></textarea>
                    <button className='text-md font-bold uppercase bg-[#ffa101] hover:bg-[#d28909] cursor-pointer text-white px-3 py-1'>Add Comment</button>
                  </form>
                </div>
              </div>
            </div>
            {/* for right */}
            <div className='flex flex-col gap-3  w-full lg:w-[30%] bg-[#fdfbf9] p-3'>
              {/* search section */}
              <div className='h-[150px] border-2 border-green-500 bg-white hover:shadow-md'>
                <h1 className='text-xl font-bold p-2'>Search</h1>
                <div className='flex justify-between items-center border-2 border-[#f4f4f5] m-2'>
                  <input
                    placeholder='Search here...'
                    className='text-sm md:text-lg font-semibold outline-none p-2'
                    type="search" name="" id="" />
                  <IoIosSearch className='text-2xl font-bold text-[#d7d7db]' />
                </div>
              </div>

              {/* category section */}
              <div className='h-[50vh] border-2 border-green-500 bg-white hover:shadow-md'>
                <h1 className='text-xl font-bold p-2'>Category</h1>
                <div className='flex flex-col gap-2 items-center m-2'>
                  <div className='bg-[#f8f2e9] hover:bg-[#ffa101] text-gray-500 hover:text-white  m-2 flex justify-between w-full p-2 cursor-pointer transition-all duration-500'>
                    <span className='text-md font-semibold'>Restrurant Ideas</span>
                    <span className='text-md font-semibold'>12</span>
                  </div>
                  <div className='bg-[#f8f2e9] hover:bg-[#ffa101] text-gray-500 hover:text-white m-2 flex justify-between w-full p-2 cursor-pointer transition-all duration-500'>
                    <span className='text-md font-semibold '>Pizza Festival</span>
                    <span className='text-md font-semibold '>12</span>
                  </div>
                  <div className='bg-[#f8f2e9] hover:bg-[#ffa101] text-gray-500 hover:text-white m-2 flex justify-between w-full p-2 cursor-pointer transition-all duration-500'>
                    <span className='text-md font-semibold '>Food Festival</span>
                    <span className='text-md font-semibold '>12</span>
                  </div>
                  <div className='bg-[#f8f2e9] hover:bg-[#ffa101] text-gray-500 hover:text-white m-2 flex justify-between w-full p-2 cursor-pointer transition-all duration-500'>
                    <span className='text-md font-semibold '>Burger</span>
                    <span className='text-md font-semibold '>12</span>
                  </div>
                </div>
              </div>
              {/* tags section */}

              <div className='h-inherit border-2 border-green-500 bg-white hover:shadow-md'>
                <h1 className='text-xl font-bold p-2'>Tags</h1>
                <div className='flex flex-col flex-wrap gap-2 items-center m-2'>
                  <div className='flex flex-wrap gap-2 items-center'>
                    <span className='p-2 border-2 border-green-600 hover:text-green-600 text-semibold cursor-pointer text-gray-600 '>Paid Marketing</span>
                    <span className='p-2 border-2 border-green-600 hover:text-green-600 text-semibold cursor-pointer text-gray-600 '>Pizza</span>
                    <span className='p-2 border-2 border-green-600 hover:text-green-600 text-semibold cursor-pointer text-gray-600 '>Digital Marketing</span>
                    <span className='p-2 border-2 border-green-600 hover:text-green-600 text-semibold cursor-pointer text-gray-600 '>Covid</span>
                    <span className='p-2 border-2 border-green-600 hover:text-green-600 text-semibold cursor-pointer text-gray-600 '>Web Deesign</span>
                    <span className='p-2 border-2 border-green-600 hover:text-green-600 text-semibold cursor-pointer text-gray-600 '>Themeix</span>
                    <span className='p-2 border-2 border-green-600 hover:text-green-600 text-semibold cursor-pointer text-gray-600 '>Content Marketing</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      <div className='absolute bottom-4 right-4 fixed text-5xl font-bold text-green-500 hover:text-green-600 cursor-pointer'>
        <RiChatSmile3Fill />
      </div>
      <Footer />
    </>
  )
}

export default MyBlog