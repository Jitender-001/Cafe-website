import React from 'react'
import { MdPinDrop,MdCall,MdMail } from "react-icons/md";
import { FaInstagram,FaFacebook,FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer mt-8 bottom-0 left-0 right-0'>
        <div className="container w-full bg-[#471E19] flex flex-col justify-center  flex-wrap sm:flex-row gap-12 px-10 py-5">
          
          {/* Logo section on footer */}

          <div className="logo w-full sm:w-3/12 border-2 flex flex-col flex-wrap p-4">
            <div className="logo-img w-2/6">
              <img src="/images/kbCafe.jpg" alt="logo-img" className='w-full' />
            </div>
            <p className='text-[#E8E6E3] mt-3 text-sm font-cursive'>Come along on a yummy journey, taste the food like homemade!</p>
            <div className="social-links flex flex-row gap-4 text-[#E8E6E3] mt-3 text-xl">
              <a href="#" ><FaInstagram /></a>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaXTwitter /></a>
            </div>
          </div>

          {/* Quick Links section */}

          <div className="quicklinks  w-full sm:w-3/12 border-2 p-4">
            quicklinks
          </div>

            {/* Connect and address section */}

          <div className="connect  w-full sm:w-3/12 border-2 p-8 flex flex-col flex-wrap justify-center">
            <h3 className='text-2xl font-bold text-[#E8E6E3] mb-2 font-merienda'>CONNECT WITH US</h3>
            <b className='text-[#E8E6E3] font-merienda'>Kharido Befikar Limited</b>

            <div className="pin flex flex-row flex-wrap items-center my-2 gap-3 ">
              <span><i className='text-3xl text-[#E8E6E3]'><MdPinDrop /> </i></span>
              <div className="adderss">
                <span className='text-[#E8E6E3] text-sm font-merienda'>1429, Block D & E, CCC, VIP Road</span><br />
                <span className='text-[#E8E6E3] font-merienda'>Zirakpur, 143603</span>
              </div>
            </div>

            <div className="phone flex flex-row flex-wrap gap-3 my-2">
              <span><i className='text-3xl text-[#E8E6E3]'><MdCall /></i></span>
              <span className='text-[#E8E6E3] font-merienda'>+91 8320121716</span>
            </div>

            <div className="phone flex flex-row flex-wrap gap-3 my-2">
              <span><i className='text-3xl text-[#E8E6E3]'><MdMail /></i></span>
              <span className='text-[#E8E6E3] font-merienda'><a href="kharidobefikar@gmail.com">kharidobefikar@gmail.com</a></span>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Footer