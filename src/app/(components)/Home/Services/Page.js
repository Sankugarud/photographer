import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Services = () => {

    let arr = [
        {
            type: "fasion",
            text: "Fashion Photography",
            img: "https://photographysite.mywpsite.org/wp-content/uploads/2022/03/behrouz-sasani-khMxnuosSV4-unsplash-1365x2048.jpg",
            discription: "Get amazing potraits in matter of minutes. Book 2 days prior."
        },
        {
            type: "event",
            text: "Event Photography",
            img: "https://photographysite.mywpsite.org/wp-content/uploads/2022/03/pexels-pham-hoang-kha-3785642.jpg",
            discription: "Capture your Events in the most amazing way.Book befor a week"
        },
        {
            type: "videoGraphy",
            text: "videoGraphy",
            img: "https://photographysite.mywpsite.org/wp-content/uploads/2022/03/kal-visuals-tn9tmUmQA4A-unsplash-1365x2048.jpg",
            discription: "Your life and events a cinema. Top notch filmmaking for your budget."
        },
    ];

    return (
        <div>
            <div className='border-b-2  text-center text-5xl my-5 sm:my-2'>Our Services</div>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-11/12 gap-10 py-10 m-auto'>
            {arr.map((item, i) => (
                <div key={i} className="m-auto w-10/12 flex flex-col gap-5 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
                  
                        <Image src={item.img} alt="serviceCard" style={{ width: '100%', height: 'auto' }} width={300} height={600}/>
                   
                    <div className="py-5 flex flex-col gap-5">

                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.text}</h5>
                    
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.discription}</p>
                        <Link href="/contact" className="items-center px-5 py-3 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                            Book Now
                        </Link>
                    </div>
                </div>
            ))}
            </div>
           
        </div>
    )
}

export default Services;
