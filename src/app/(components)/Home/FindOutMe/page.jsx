import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const FindOutMe = () => {
  return (
    <div>
      <div className='my-10 flex gap-10 font-semibold flex-col justify-center align-middle text-center'>
        <div className='text-2xl px-5 text-center lg:w-1/2 md:w-4/5 sm:w-full m-auto'>
            “Love Nature has an amazing team of hard working professionals. It has been a pleasure to meet them.”
        </div>
        <div className='m-auto '>
            <Image src={'/image/photoLogo.png'} alt='logo' width={200} height={200}/>
        </div>
        <Button className='w-38 m-auto my-5 bg-orange-700' href='/contact' variant="contained">Book Now</Button> 

      </div>
    </div>
  )
}

export default FindOutMe
