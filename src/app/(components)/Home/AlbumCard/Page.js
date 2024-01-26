import Image from 'next/image';
import React from 'react';

const AlbumCard = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-4/5 gap-5 py-10 m-auto'>
      <div className=' md:w-full  sm:w-full m-auto flex flex-col gap-10 py-10'>
        <h1 className='text-center text-4xl text-orange-700'>Get Album at offer price for each booking</h1>
        <p>
          We are really amazed to provide you this offer and make your events memorable. This will be an amazing addition to all your events. And of course, print has always a special feel and place in your heart.
        </p>
      </div>
      <div>
        <Image
          src='https://images.squarespace-cdn.com/content/v1/54800ef9e4b0787f2c715d92/1631522427605-SEVIFP8ZDLZN9V3YG18S/LOVELENSCAPES+PHOTOGRAPHY+%E2%80%A2+WEDDING+ALBUMS+%26+MAGAZINES+%E2%80%A2+BERLIN+BRISBANE+BEYOND+%E2%80%A2+118.jpg'
          alt='Album Image'
          priority
          width={500}
          height={1000}
        />
      </div>
    </div>
  );
};

export default AlbumCard;
