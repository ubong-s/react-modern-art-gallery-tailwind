import React from 'react';

const LocationInfo = () => {
   return (
      <div className='bg-themeDarker text-white py-12 md:py-20'>
         <div className='wrapper md:grid md:grid-cols-5 md:gap-12'>
            <h2 className='uppercase mb-8 text-5xl lg:text-6xl col-span-2'>
               Our Location
            </h2>
            <div className='col-span-3'>
               <h3 className='uppercase text-3xl mb-4 text-themeOrange'>
                  99 King Street
               </h3>
               <p className='mb-4'>
                  Newport <br /> RI 02840 <br /> United States of America
               </p>
               <p>
                  Our newly opened gallery is located near the Edward King House
                  on 99 King Street, the Modern Art Gallery is free to all
                  visitors and open seven days a week from 8am to 9pm.
               </p>
            </div>
         </div>
      </div>
   );
};

export default LocationInfo;
