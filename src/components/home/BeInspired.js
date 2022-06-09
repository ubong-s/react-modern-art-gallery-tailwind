const BeInspired = () => {
   return (
      <div className='wrapper pb-32 lg:pb-48'>
         <div className='grid gap-4 md:grid-cols-10 md:grid-rows-2 lg:gap-6'>
            <div className='md:col-span-6 md:row-start-1 md:row-end-3 '>
               <img
                  src='/images/mobile/image-grid-2.jpg'
                  alt='Come Be Inspired 2'
                  className='md:hidden'
               />
               <img
                  src='/images/mobile/image-grid-2.jpg'
                  alt='Come Be Inspired 2'
                  className='hidden md:block lg:hidden h-full object-cover'
               />
               <img
                  src='/images/desktop/image-grid-2.jpg'
                  alt='Come Be Inspired 2'
                  className='hidden lg:block h-full object-cover'
               />
            </div>
            <div className='md:col-span-4 md:row-start-1 md:row-end-2'>
               <img
                  src='/images/mobile/image-grid-3.jpg'
                  alt='Come Be Inspired 3'
                  className='md:hidden'
               />
               <img
                  src='/images/tablet/image-grid-3.jpg'
                  alt='Come Be Inspired 3'
                  className='hidden md:block lg:hidden'
               />
               <img
                  src='/images/desktop/image-grid-3.jpg'
                  alt='Come Be Inspired 3'
                  className='hidden lg:block h-full object-cover'
               />
            </div>
            <div className='bg-themeDarker text-white px-6 py-12 md:col-span-4 md:row-start-2 md:row-end-3 lg:flex lg:flex-col justify-center lg:px-10 '>
               <h2 className='uppercase text-5xl mb-5 lg:text-6xl lg:mb-6'>
                  Come {'&'} be <br /> Inspired
               </h2>
               <p>
                  We’re excited to welcome you to our gallery and see how our
                  collections influence you.
               </p>
            </div>
         </div>
      </div>
   );
};

export default BeInspired;
