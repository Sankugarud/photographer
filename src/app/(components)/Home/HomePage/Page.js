"use client"
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const HomePage = () => {
    
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = 3; 
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
    const imageUrl = `https://res.cloudinary.com/dbanxu4ni/image/upload/v1706170173/PhotoGraphyImages/img4.jpg`;

    return (
      <Box sx={{ width: '100%', minHeight: '70vh', margin: 'auto', flexGrow: 1 }}>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {/* Image 1 */}
          <div>
  {Math.abs(activeStep - 0) <= 2 ? (
    <Box
      component="div"
      sx={{
        width: '100%',
        display: 'block',
        overflow: 'hidden',
        height: '100vh',
        position: 'relative', // Make sure the position is relative
      }}
    >
      {/* Background Image */}
      <div
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dbanxu4ni/image/upload/v1706170173/PhotoGraphyImages/img4.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
          width: '100%',
          position: 'absolute',
          zIndex: 0,
        }}
      ></div>

      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div
        className='my-24 justify-center align-middle text-white flex gap-16 w-full lg:w-1/2 m-auto'
        style={{ position: 'relative', zIndex: 2 }}
      >
        <div className='w-7/12 flex text-center flex-col gap-5'>
          <div>One Stop-Shop For The</div>
          <div className='text-3xl'>Best Pictures</div>
          <div className='leading-7 text-base'>The Best way to preserve your Memories</div>
          <button className='m-auto transition-all text-center bg-orange-700 duration-500 hover:bg-orange-800 hover:text-black w-9/12 px-5 py-5 flex justify-between'>Book Now</button>
        </div>
      </div>
    </Box>
  ) : null}
          </div>

          {/* Image 2 */}
          <div>
  {Math.abs(activeStep - 0) <= 2 ? (
    <Box
      component="div"
      sx={{
        width: '100%',
        display: 'block',
        overflow: 'hidden',
        height: '100vh',
        position: 'relative', // Make sure the position is relative
      }}
    >
      {/* Background Image */}
      <div
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dbanxu4ni/image/upload/v1706170173/PhotoGraphyImages/img3.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
          width: '100%',
          position: 'absolute',
          zIndex: 0,
        }}
      ></div>

      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div
        className='my-24 justify-center align-middle text-white flex gap-16 w-full lg:w-1/2 m-auto'
        style={{ position: 'relative', zIndex: 2 }}
      >
        <div className='w-7/12 flex text-center flex-col gap-5'>
          <div className='lg:text-3xl'>Book</div>
          <div className='lg:text-3xl'>Your</div>
          <div className='leading-7 text-base'>PhotoGrapher Now</div>
          <button className='m-auto transition-all text-center bg-orange-700 duration-500 hover:bg-orange-800 hover:text-black w-9/12 px-5 py-5 flex justify-between'>Book Now</button>
        </div>
      </div>
    </Box>
  ) : null}
          </div>
  
          {/* Image 3 */}
          <div>
  {Math.abs(activeStep - 0) <= 2 ? (
    <Box
      component="div"
      sx={{
        width: '100%',
        display: 'block',
        overflow: 'hidden',
        height: '100vh',
        position: 'relative', // Make sure the position is relative
      }}
    >
      {/* Background Image */}
      <div
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dbanxu4ni/image/upload/v1706170173/PhotoGraphyImages/img6.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
          width: '100%',
          position: 'absolute',
          zIndex: 0,
        }}
      ></div>

      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div
        className=' my-48 justify-center align-middle text-white flex gap-16 w-full lg:w-1/2 m-auto'
        style={{ position: 'relative', zIndex: 2 }}
      >
        <div className='lg:w-7/12 px-5 flex text-center flex-col gap-5'>
         
          <div className='leading-7 text-base'>Looking to preserve your precious memories in stunning visual form? Look no further! Our photography services are tailored to provide you with exceptional images that tell your unique story.</div>
          <button className='m-auto transition-all text-center bg-orange-700 duration-500 hover:bg-orange-800 hover:text-black w-9/12 px-5 py-5 flex justify-between'>Book Now</button>
        </div>
      </div>
    </Box>
  ) : null}
          </div>
        </AutoPlaySwipeableViews>
  
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    );
  };
  
  export default HomePage;