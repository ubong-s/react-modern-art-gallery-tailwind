import React from 'react';

const YourDay = () => {
   return (
      <div className='wrapper pb-4 grid  gap-4 md:gap-12 lg:gap-40 md:items-center md:grid-cols-5 md:grid-rows-1 lg:pb-6 pt-32 lg:pt-44'>
         <div className='md:col-start-3 md:col-end-6 bg-red-400'>
            <img
               src='/images/mobile/image-grid-1.jpg'
               alt='Your Day at the Gallery'
               className='md:hidden'
            />
            <img
               src='/images/mobile/image-grid-1.jpg'
               alt='Your Day at the Gallery'
               className='hidden md:block lg:hidden h-full object-cover'
            />
            <img
               src='/images/desktop/image-grid-1.jpg'
               alt='Your Day at the Gallery'
               className='hidden lg:block h-full object-cover'
            />
         </div>
         <div className='md:col-start-1 md:col-span-2 md:row-start-1'>
            <h2 className='uppercase text-5xl lg:text-6xl mb-5 lg:mb-6'>
               Your Day at <br /> the Gallery
            </h2>
            <p>
               Wander through our distinct collections and find new insights
               about our artists. Dive into the details of their creative
               process.
            </p>
         </div>
      </div>
   );
};

export default YourDay;
