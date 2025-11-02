import React from 'react'
import Logo from '../assets/brand-logo.svg'
import GooglePlay from '../assets/play-store.svg'
import AppStore from '../assets/apps-store.svg'

const Footer = () => {
    return (
        <>
            <div className='bg-[#fdfbf9] border-t border-green-600'>
                <div className='max-w-[90%] md:max-w-[80%] mx-auto p-3 mt-5 '>
                    <div className='flex flex-col md:flex-row justify-between gap-2 p-2'>
                        {/* footer left */}
                        <div className='w-full md:w-[40%] flex flex-col items-center md:items-start gap-4'>
                            <img src={Logo} alt="" />
                            <ul className='flex flex-col md:flex-row gap-4 items-start '>
                                <li className='text-[#6b6f76] hover:text-[#ffa101] font-semibold text-sm md:text-lg'>
                                    <a href="#facebook">Facebook</a></li>
                                <li className='text-[#6b6f76] hover:text-[#ffa101] font-semibold text-sm md:text-lg'>
                                    <a href="#instagram">Instagram</a></li>
                                <li className='text-[#6b6f76] hover:text-[#ffa101] font-semibold text-sm md:text-lg'>
                                    <a href="#pinterest">Pinterest</a></li>
                            </ul>

                            <div className='flex flex-col items-center md:items-start md:none gap-4 mt-5'>
                                <h4 className='text-md md:text-2xl font-bold text-center md:text-start'>Ready to get started?</h4>
                                <div className='flex flex-col md:flex-row gap-2'>
                                    <img src={GooglePlay} alt="googleplay"
                                        className='h-[35px] md:h-[50px] w-[100px] md:w-[150px] cursor-pointer'
                                    />
                                    <img src={AppStore} alt="appstote"
                                        className='h-[35px] md:h-[50px] w-[100px] md:w-[150px] cursor-pointer'
                                    />
                                </div>
                            </div>
                        </div>
                        {/* footer right */}
                        <div className='w-full md:w-[60%]'>
                            <div className='flex flex-col md:flex-row justify-end gap-5 items-start'>
                                <div className='flex flex-col gap-2'>
                                    <h4 className='text-sm md:text-lg lg:text-xl font-bold'>Quick links</h4>
                                    <ul className='flex flex-col gap-3'>
                                        <li className='text-sm md:text-lg font-semibold text-[#6b6f76]  hover:text-[#ffa101]'><a href="#">Pizza</a></li>
                                        <li className='text-sm md:text-lg font-semibold text-[#6b6f76] hover:text-[#ffa101]'><a href="#">Burger</a></li>
                                        <li className='text-sm md:text-lg font-semibold text-[#6b6f76] hover:text-[#ffa101]'><a href="#">Cake</a></li>
                                        <li className='text-sm md:text-lg font-semibold text-[#6b6f76] hover:text-[#ffa101]'><a href="#">Choklate</a></li>
                                        <li className='text-sm md:text-lg font-semibold text-[#6b6f76] hover:text-[#ffa101]'><a href="#">Ice Cream</a></li>
                                    </ul>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h4 className='text-sm md:text-lg lg:text-xl font-bold'>Important Links</h4>
                                    <ul className='flex flex-col gap-3'>
                                        <li className='text-sm md:text-lg font-semibold text-[#6b6f76]  hover:text-[#ffa101]'><a href="#">About</a></li>
                                        <li className='text-sm md:text-lg font-semibold text-[#6b6f76] hover:text-[#ffa101]'><a href="#">Blog</a></li>
                                        <li className='text-sm md:text-lg font-semibold text-[#6b6f76] hover:text-[#ffa101]'><a href="#">Shop</a></li>
                                        <li className='text-sm md:text-lg font-semibold text-[#6b6f76] hover:text-[#ffa101]'><a href="#">FAQ</a></li>
                                        <li className='text-sm md:text-lg font-semibold text-[#6b6f76] hover:text-[#ffa101]'><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h4 className='text-sm md:text-lg lg:text-xl font-bold'>Oppning Hours</h4>
                                    <div className='flex flex-col gap-3'>
                                        <span className='text-sm md:text-lg font-semibold text-[#6b6f76]'>Sat : 8AM - 5PM</span>
                                        <span className='text-sm md:text-lg font-semibold text-[#6b6f76]'>Sun - Thu : 12PM - 8PM</span>
                                        <span className='text-sm md:text-lg font-semibold text-[#6b6f76]'>Friday: Closed</span>
                                    </div>
                                </div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Footer