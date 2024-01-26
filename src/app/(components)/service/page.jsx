import Navbars from '@/app/Navbar/Page';
import Image from 'next/image';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import GradeIcon from '@mui/icons-material/Grade';
import RecyclingIcon from '@mui/icons-material/Recycling';
import SupportIcon from '@mui/icons-material/Support';
import { Button } from '@mui/material';

const Services = () => {
  return (
    <div>
        <Navbars/>
        <div className="bg-cover bg-center flex flex-col justify-center text-center m-auto  h-96" style={{ backgroundImage: 'url("/image/serviceimg.jpg")', backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
           <div className=' text-center align-middle items-center  text-2xl lg:text-7xl md:text-5xl sm:text-3xl text-white'>our services</div> 
           <p className=' text-center align-middle items-center lg:text-xl text-white'>Well captuorange Excellence Moments of life</p>
        </div>
             <div className=" lg:flex md:flex w-4/5 gap-5 py-10 mx-auto">
                <div className='md:w-1/2 m-auto lg:w-1/2 items-center flex'>
                    <div className=" items-center ">
                        <Image
                        src="https://images.unsplash.com/photo-1606143412458-acc5f86de897?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXQlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Album Image"
                        width={500}
                        priority
                        height={1000}
                        />
                    </div>
                </div>
      <div className="lg:px-10 md:px-6 md:w-full sm:w-full m-auto flex flex-col gap-10 py-10">
      <h1 className="text-4xl sm:text-2xl md:text-2xl lg:text-3xl text-start font-semibold text-orange-700">Portrait PhotoGraphy</h1>       
       <p className='text-gray-600 sm:text-sm md:text-xl  text-start'>
         Portrait Photography, or portraiture is a type Photography aimed toward capturing the personality of a person or group of people by using effective lighting, backdrops, and poses. A potrait photograph may be artistic or clinical .
        </p>
        <p className='text-lg	font-semibold	'>From $99</p>
        <div className="w-1/2">
        <Button type="button" className="focus:outline-none text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-900" href='/contact'>Order Now</Button>
        </div>
      </div>
      
            </div>

            <div className=" lg:flex md:flex w-4/5 gap-5 py-10 mx-auto">
              
              <div className="lg:px-10 md:px-6 md:w-full sm:w-full m-auto flex flex-col gap-10 py-10">
              <h1 className="text-4xl sm:text-2xl md:text-2xl lg:text-3xl text-start font-semibold text-orange-700">
                Event PhotoGraphy
                </h1>       
              <p className='text-gray-600 sm:text-sm md:text-xl  text-start'>
              Event photography is the practice  of photographing guests and occurrences at any Event or occasion where on may hire a photographer for. This is a coverage that is used around the world at occasion such as wedding, christening, naming ceremonies, parties, birthdays, formals, dances, ceremonies, awardceremonies, funerals, meals and engagement.
                </p>
                <p className='text-lg	font-semibold	'>From $99</p>
                <div className="w-1/2">
                <Button type="button" className="focus:outline-none text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-900" href='/contact'>Order Now</Button>
                </div>
              </div>
              <div className='md:w-1/2 m-auto lg:w-1/2 items-center flex'>
                <div className=" items-center ">
                    <Image
                    src="https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/004/188/336/new_medium/ss20220624-30630-yitn7m.jpg?1656062138"
                    alt="Album Image"
                    width={500}
                    priority 
                    height={1000}
                    
                    />
                </div>
              </div>
            </div>


            <div className="  lg:flex md:flex w-4/5 gap-5 py-10 mx-auto">
                <div className='md:w-1/2 m-auto lg:w-1/2 items-center flex` '>
                    <div className=" items-center ">
                        <Image
                        src="https://careerkarma.com/blog/wp-content/uploads/2020/12/photo-1595859703065-2259982784bb.jpeg"
                        alt="Album Image"
                        width={500}
                        priority 
                        height={1000}
                        />
                    </div>
                </div>
              
              <div className="lg:px-10 md:px-6 md:w-full sm:w-full m-auto flex flex-col gap-10 py-10">
              <h1 className="text-4xl sm:text-2xl md:text-2xl lg:text-3xl text-start font-semibold text-orange-700">VideoGraphy</h1>       
                <p className='sm:text-sm text-gray-600 md:text-xl  text-start'>
                    Videograph or Videography, is a type of videoshoot aimed toward capturing the personality of a person or group of people by using effective lighting, backdrops, and poses. A portrait & landscape videograph may be artistic or clinical.
                </p>
                <p className='font-semibold	'>Location,lighting, composition,emotion and technical settings.</p>
                <p className='text-lg	font-semibold	'>From $99</p>
                <div className="w-1/2">
                <Button type="button" className="focus:outline-none text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-900" href='/contact'>Order Now</Button>
                </div>
              </div>
              
            </div>

            <div className=' lg:py-20 md:px-10 sm:px-10 px-10 lg:px-28'>
                <h1 className='py-10 text-4xl text-orange-700 font-semibold'>why should you hire us</h1>
                <div className='lg:flex gap-20'>
                  <p className='lg:w-3/5 text-lg text-gray-600'>Your customers just learned what services you offer. Tell them why they should work with you or your team, for example you could highlight your experience and positive client reviews.</p>
                  <div className='lg:visible invisible flex flex-col text-center gap-2'> 
                    <div><MilitaryTechIcon/></div>
                    <div>8 Years Experience</div>
                  </div>
                  <div className='lg:visible invisible flex flex-col text-center gap-2'>
                    <div><GradeIcon/></div>
                    <div>5 Star Rating</div>
                  </div>
                </div>
            </div>
            <div className=' mb-20  lg:py-20 md:px-10 sm:px-10 px-10 lg:px-28'>
                <div className='lg:flex gap-20'>
                  <p className='lg:w-3/5 text-lg text-gray-600'>The badges illustrate this.  We also focus on key benefits they will get while using our services, namely quick turnaround times and dedicated support. You could also use them to show awards you won for your best work.</p>
                  <div className='lg:visible invisible	 flex flex-col text-center gap-2'> 
                    <div><RecyclingIcon/></div>
                    <div>Quick Turnaround</div>
                  </div>
                  <div className='lg:visible invisible flex flex-col text-center gap-2'>
                    <div><SupportIcon/></div>
                    <div>Dedicated Support</div>
                  </div>
                </div>
            </div>
        </div>
   
    
  );
};

export default Services;
