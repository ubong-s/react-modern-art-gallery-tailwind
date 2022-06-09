import { Link } from 'react-router-dom';
import { Button } from '..';

const Hero = () => {
   return (
      <div className='md:grid md:grid-cols-5 lg:grid-cols-7 lg:items-start'>
         <div className='hidden lg:grid lg:col-span-2 bg-themeDarker h-full  relative'>
            <h1 className='relative transform translate-x-1/4'>
               <span
                  className={`whitespace-nowrap hidden uppercase text-8xl lg:block text-white absolute top-1/4 left-0 w-3/4 overflow-hidden z-20`}
               >
                  Modern <br /> Art Gallery
               </span>

               <span
                  className={` whitespace-nowrap hidden uppercase text-8xl lg:block text-themeDarker absolute top-1/4 left-0 `}
               >
                  Modern <br /> Art Gallery
               </span>
            </h1>
         </div>
         <div className='md:col-span-3'>
            <img
               className='md:hidden'
               src='/images/mobile/image-hero.jpg'
               alt='Hero'
            />
            <img
               className='hidden md:block lg:hidden'
               src='/images/tablet/image-hero.jpg'
               alt='Hero'
            />
            <img
               className='hidden lg:block'
               src='/images/desktop/image-hero.jpg'
               alt='Hero'
            />
         </div>
         <div className='wrapper pt-8 md:col-span-2 relative md:pt-0 lg:top-1/4'>
            <div className='md:absolute md:-left-16 md:top-1/2 md:transform md:-translate-y-1/2 lg:relative lg:top-0 lg:translate-y-0 lg:-left-20'>
               <h1 className='uppercase text-6xl md:text-7xl lg:hidden'>
                  Modern <br /> Art Gallery
               </h1>
               <p className='my-6 lg:mt-0'>
                  The arts in the collection of the Modern Art Gallery all
                  started from a spark of inspiration. Will these pieces inspire
                  you? Visit us and find out.
               </p>
               <Link to='/location'>
                  <Button title='Our Location' />
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Hero;
