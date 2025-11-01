import React from 'react'
import BlogImg from '../assets/single-image.jpg'

const MyBlog = () => {
  return (
    <>
      <div className='bg-[#fdfbf9] mt-[20vh] md:mt-[10vh] border-2 border-green-600'>
        <div className='max-w-[90%] md:max-w-[80%] mx-auto p-3 mt-5'>
          <h1 className='text-5xl font-bold'>How to make a pizza at home?</h1>
          <div className='flex gap-3 mt-10'>
            <div className='border-2 border-green-600 w-[70%] bg-white p-3'>
              <div className='grow'>
                <img src={BlogImg} alt='blog-page-image' />
              </div>
            </div>
            <div className='border-2 border-green-600 w-[30%] bg-white'>
              <div className='h-5'>
                <h1 className='h-inherit'>Search</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyBlog