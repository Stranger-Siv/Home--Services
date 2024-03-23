import React from 'react'
import image1 from '../assets/image1.avif'
import logo from "../assets/logo-no-background.png"
import nn1 from "../assets/n&n1.jpg"
import nn2 from "../assets/n&n2.jpeg"
import nn3 from "../assets/n&n3.jpeg"
import mbs1 from "../assets/mbs1.jpeg"
import mbs2 from "../assets/mbs2.jpeg"
import mbs3 from "../assets/mbs3.jpeg"
import mbs4 from "../assets/mbs4.jpeg"
import sw1 from "../assets/sw1.jpeg"
import sw3 from "../assets/sw3.jpeg"
import qhr1 from "../assets/qhr1.jpeg"
import qhr2 from "../assets/qhr2.jpeg"
import qhr3 from "../assets/qhr3.jpeg"
import qhr4 from "../assets/qhr4.jpeg"
import ar2 from "../assets/ar2.jpeg"
import ar3 from "../assets/ar3.jpeg"
import ar4 from "../assets/ar4.jpeg"
import mm1 from "../assets/mm1.jpeg"
import mm2 from "../assets/mm2.jpeg"
import g1 from "../assets/g1.jpeg"
import m2 from "../assets/m2.jpeg"
import m3 from "../assets/m3.jpeg"
import m4 from "../assets/m4.jpeg"
import { FiTwitter } from "react-icons/fi";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineLinkedin } from "react-icons/ai";
import d1 from "../assets/d1.webp"
import d2 from "../assets/d2.webp"









const Dashboard = () => {
  return (
    <div className='bg-richblack-900 '>
      <div className='flex text-white text-3xl ml-[135px] mr-[135px]'>
        <div className='mt-10'>
          <h1 className='text-richblack-200'>New and noteworthy</h1>
          <div className='flex flex-row gap-5 '>
            <div>
              <img src={image1} className='w-[400px] h-[230px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
              <h1 className='text-richblack-100 text-xl mt-5 '>Smart Locks</h1>
            </div>
            <div>
              <img src={nn1} className='w-[400px] h-[230px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
              <h1 className='text-richblack-100 text-xl mt-5 '>Water Purifier</h1>
            </div>
            <div>
              <img src={nn2} className='w-[400px] h-[230px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
              <h1 className='text-richblack-100 text-xl mt-5 '>Home Painting</h1>
            </div>
            <div>
              <img src={nn3} className='w-[400px] h-[230px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
              <h1 className='text-richblack-100 text-xl mt-5 '>Furniture Assembly</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='flex text-white text-3xl ml-[135px] mr-[135px]'>
        <div className='mt-10'>
          <h1 className='text-richblack-200'>Most booked services</h1>
          <div className='flex flex-row gap-5 '>
            <div>
              <img src={mbs1} className='w-[400px] h-[230px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
              <h1 className='text-richblack-100 text-xl mt-5 '>Bathroom Cleaning</h1>
            </div>
            <div>
              <img src={mbs2} className='w-[400px] h-[230px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
              <h1 className='text-richblack-100 text-xl mt-5 '>Sofa Cleaning</h1>
            </div>
            <div>
              <img src={mbs3} className='w-[400px] h-[230px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
              <h1 className='text-richblack-100 text-xl mt-5 '>AC Service</h1>
            </div>
            <div>
              <img src={mbs4} className='w-[400px] h-[230px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
              <h1 className='text-richblack-100 text-xl mt-5 '>Pedicure</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='flex text-white text-3xl ml-[135px] mr-[135px]'>
        <div className='mt-10'>
          <h1 className='text-richblack-200'>Salon for women</h1>
          <div className='flex flex-row gap-5 '>
            <div>
              <img src={sw1} className='w-[274px] h-[215px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
              <h1 className='text-richblack-100 text-xl mt-5 '>Waxing</h1>
            </div>
            <div>
              <img src={mbs4} className='w-[274px] h-[215px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
              <h1 className='text-richblack-100 text-xl mt-5 '>Pedicure</h1>
            </div>
            <div>
              <img src={sw3} className='w-[274px] h-[215px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
              <h1 className='text-richblack-100 text-xl mt-5 '>Facial & Cleanup</h1>
            </div>

          </div>
        </div>
      </div>
      <div className='flex text-white text-3xl ml-[135px] mr-[135px]'>
        <div className='mt-10'>
          <h1 className='text-richblack-200'>Quick home repairs</h1>
          <div className='flex flex-row gap-5 '>
            <div>
              <img src={qhr1} className='w-[400px] h-[230px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
              <h1 className='text-richblack-100 text-xl mt-5 '>Tap Repair</h1>
            </div>
            <div>
              <img src={qhr2} className='w-[400px] h-[230px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
              <h1 className='text-richblack-100 text-xl mt-5 '>Fan Repair</h1>
            </div>
            <div>
              <img src={qhr3} className='w-[400px] h-[230px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
              <h1 className='text-richblack-100 text-xl mt-5 '>Switch/Socket Replacement</h1>
            </div>
            <div>
              <img src={qhr4} className='w-[400px] h-[230px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
              <h1 className='text-richblack-100 text-xl mt-5 '>Drill & Hang</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='flex text-white text-3xl ml-[135px] mr-[135px]'>
        <div className='mt-10'>
          <h1 className='text-richblack-200'>AC & appliance repair</h1>
          <div className='flex flex-row gap-5 '>
            <div>
              <img src={mbs3} className='w-[274px] h-[215px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
              <h1 className='text-richblack-100 text-xl mt-5 '>AC Repair</h1>
            </div>
            <div>
              <img src={ar2} className='w-[274px] h-[215px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
              <h1 className='text-richblack-100 text-xl mt-5 '>Washing Machine Repair</h1>
            </div>
            <div>
              <img src={ar3} className='w-[274px] h-[215px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
              <h1 className='text-richblack-100 text-xl mt-5 '>refrigerator Repair</h1>
            </div>
            <div>
              <img src={ar4} className='w-[274px] h-[215px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
              <h1 className='text-richblack-100 text-xl mt-5 '>Microwave Repair</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='flex text-white text-3xl ml-[135px] mr-[135px]'>
        <div className='mt-10'>
          <h1 className='text-richblack-200'>Message for Men</h1>
          <div className='flex flex-row gap-5 '>
            <div>
              <img src={mm2} className='w-[274px] h-[215px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
              <h1 className='text-richblack-100 text-xl mt-5 '>Pain Relief</h1>
            </div>
            <div>
              <img src={mm1} className='w-[274px] h-[215px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
              <h1 className='text-richblack-100 text-xl mt-5 '>Stress Relief</h1>
            </div>

          </div>
        </div>
      </div>

      <div className='flex text-white text-3xl ml-[135px] mr-[135px] mb-[100px]'>
        <div className='mt-10'>
          <h1 className='text-richblack-200'>Salon for kids & men</h1>
          <div className='flex flex-row gap-5 '>
            <div>
              <img src={g1} className='w-[274px] h-[215px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
              <h1 className='text-richblack-100 text-xl mt-5 '>Haircut Grooming</h1>
            </div>
            <div>
              <img src={m2} className='w-[274px] h-[215px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
              <h1 className='text-richblack-100 text-xl mt-5 '>Facial & Cleanup</h1>
            </div>
            <div>
              <img src={m3} className='w-[274px] h-[215px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
              <h1 className='text-richblack-100 text-xl mt-5 '>Pedicure & Menicure</h1>
            </div>
            <div>
              <img src={m4} className='w-[274px] h-[215px] mt-10 rounded-lg hover:scale-105 cursor-pointer' />
              <h1 className='text-richblack-100 text-xl mt-5 '>Hair Color & Hair Spa</h1>
            </div>
          </div>
        </div>
      </div>

      <footer className='bg-gray-900 w-full h-[480px]'>
        <div className='ml-[135px] pt-3'>
          <img src={logo} alt="Logo" width={170} height={15} loading="lazy" className='mt-10 hover:cursor-pointer' />
        </div>
        <div className='flex flex-row gap-[125px] text-richblack-100 pt-9 mr-[135px]'>
          <div className='ml-[135px]'>
            <h1 className='text-white text-xl'>Company</h1>
            <div className='mt-4 text-lg leading-7'>
              <h2 className='hover:cursor-pointer'>About us</h2>
              <h2 className='hover:cursor-pointer'>Terms & Conditions</h2>
              <h2 className='hover:cursor-pointer'>Privacy Policy</h2>
              <h2 className='hover:cursor-pointer'>Anti-discrimination policy</h2>
              <h2 className='hover:cursor-pointer'>UC impact</h2>
              <h2 className='hover:cursor-pointer'>Careers</h2>
            </div>
          </div>

          <div className=''>
          <h1 className='text-white text-xl'>For customers</h1>
            <div className='mt-4 text-lg leading-7'>
              <h2 className='hover:cursor-pointer'>UC reviews</h2>
              <h2 className='hover:cursor-pointer'>Categories near you</h2>
              <h2 className='hover:cursor-pointer'>Blog</h2>
              <h2 className='hover:cursor-pointer'>Contact us</h2>
            </div>
          </div>

          <div className=''>
          <h1 className='text-white text-xl'>For partners</h1>
            <div className='mt-4 text-lg leading-7'>
              <h2 className='hover:cursor-pointer'>Register as a professional</h2>
            </div>
          </div>

          <div>
          <h1 className='text-white text-xl'>Social links</h1>
            <div className='mt-4 flex flex-row'>
              <button>
                <FiTwitter className='w-9 h-9 m-1 border-solid hover:scale-105'/>
              </button>
              <button>
                <TiSocialFacebookCircular className='w-10 h-10 m-1 hover:scale-105'/>
              </button>
              <button>
                <IoLogoInstagram className='w-9 h-9 m-1 hover:scale-105'/>
              </button>
              <button>
                <AiOutlineLinkedin className='w-9 h-9 m-1 hover:scale-105'/>
              </button>
            </div>
            <div>
              <img src={d1} className='w-[120px] h-[auto] mt-8 rounded-md hover:scale-105 cursor-pointer' />
              <img src={d2} className='w-[120px] h-[auto] rounded-md hover:scale-105 cursor-pointer mt-3'/>
            </div>
          </div>
          
        </div>

      <div className='ml-[135px] mr-[135px] text-richblack-100 mt-10'>
        ___________________________________________________________________________________________________________________________________________
      </div>
      <div>
        <h1 className='text-richblack-200 text-md mt-8 ml-[135px]' > © Copyright 2022 Home Service. All rights reserved.</h1>
      </div>
      </footer>
    </div>

  )
}

export default Dashboard
