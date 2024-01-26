import Navbars from '@/app/Navbar/Page'
import { Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';

const About = () => {
  return (
    <div className='bg'>
        <Navbars/>
      <div className="bg-cover bg-center flex justify-center text-center h-96" style={{ backgroundImage: 'url("/image/aboutimg.jpg")' }}>
           <div className='flex text-center align-middle items-center  text-xl lg:text-5xl text-white'>About Me</div> 

      </div>
      <div className="font-semibold text-center md:w-4/5 my-10 w-full sm:w-full lg:w-1/2 p-10 text-2xl m-auto">
        A highly collaborative and supportive individual, coming together on every project to ensure our clients get the very best result.
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 justify-center align-middle pb-20 lg:grid-cols-2 xl:grid-cols-2 px-5 sm:px-52'>
        <div className='flex justify-center my-10 align-middle text-center flex-col gap-5 m-auto'>
        <Button className=' p-3 m-auto bg-red-500' href='https://mail.google.com/' variant="contained"><EmailOutlinedIcon/> abc@email.com</Button>

            <p className='text-gray-500'>Build the best product that creates the most value for our customer. use bussiness to inspire and implement environmentaly, friendly solution</p>
        </div>
        <div className='flex  justify-center align-middle text-center flex-col gap-5 m-auto'>
        <Button className=' p-3 m-auto bg-red-500' href='https://calling.com/' variant="contained"><PhoneAndroidOutlinedIcon/> +91 999 999 999</Button>
        <p className='text-gray-500'>We stive to go above and beyond for our clients no matter the challenge we aum to deliver our very best work wvery single day across our services.</p>
        </div>
      </div>

        <div className='flex m-auto pb-20'>
            <Button className='p-3 m-auto bg-blue-500' href='https://www.instagram.com/' variant="contained"><InstagramIcon/>   Follow On Instagram</Button>

        </div>


      <div className='flex mb-10 gap-5 flex-col justify-center align-middle text-center'>
        <div className='font-semibold text-2xl px-5 text-center lg:w-1/2 md:w-4/5 sm:w-full m-auto'>
            “Love Nature has an amazing team of hard working professionals. It has been a pleasure to meet them.”
        </div>
        <div className='m-auto'> <Image src={'/image/photoLogo.png'} style={{ width: '100%', height: 'auto' }} alt='logo' width={100} height={100}/></div>
        <Button className='w-38 m-auto my-5 bg-red-500' href='/contact' variant="contained">Book Now</Button> 

      </div>
    </div>
  )
}

export default About
