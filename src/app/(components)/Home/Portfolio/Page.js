import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const PortFolio = () => {
  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  const itemData = [
    {
      img: 'https://res.cloudinary.com/dbanxu4ni/image/upload/v1706170173/PhotoGraphyImages/img1.jpg',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/dbanxu4ni/image/upload/v1706170173/PhotoGraphyImages/img2.jpg',
      title: 'Burger',
    },
    {
      img: 'https://res.cloudinary.com/dbanxu4ni/image/upload/v1706170173/PhotoGraphyImages/img3.jpg',
      title: 'Camera',
    },
    {
      img: 'https://res.cloudinary.com/dbanxu4ni/image/upload/v1706170173/PhotoGraphyImages/img4.jpg',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/dbanxu4ni/image/upload/v1706170173/PhotoGraphyImages/img5.jpg',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/dbanxu4ni/image/upload/v1706170173/PhotoGraphyImages/img6.jpg',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/dbanxu4ni/image/upload/v1706170173/PhotoGraphyImages/img7.jpg',
      title: 'Basketball',
    },
    {
      img: 'https://res.cloudinary.com/dbanxu4ni/image/upload/v1706170173/PhotoGraphyImages/img8.jpg',
      title: 'Fern',
    },
    {
      img: 'https://res.cloudinary.com/dbanxu4ni/image/upload/v1706170173/PhotoGraphyImages/img9.jpg',
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/dbanxu4ni/image/upload/v1706170173/PhotoGraphyImages/img10.jpg',
      title: 'Tomato basil',
    },
    {
      img: 'https://res.cloudinary.com/dbanxu4ni/image/upload/v1706170173/PhotoGraphyImages/img11.jpg',
      title: 'Sea star',
    },
    {
      img: 'https://res.cloudinary.com/dbanxu4ni/image/upload/v1706170173/PhotoGraphyImages/img12.jpg',
      title: 'Bike',
      cols: 2,
    },
  ];
  return (
    <div className='py-10'>
    <div className='text-center text-5xl border-b-2 py-5'>PortFolio</div>
      <div className='w-4/5 flex justify-center   m-auto'>
      <ImageList
      sx={{ width: 1200, height: 800 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
 
      </div>
    </div>
    
  )
}

export default PortFolio