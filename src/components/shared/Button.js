const Button = ({ backIcon, title = 'Click here' }) => {
   return (
      <button className='border-0 uppercase font-bigShoulders font-black tracking-widest text-xl flex items-stretch'>
         {backIcon === 'true' && (
            <span className='bg-themeOrange w-14 flex items-center justify-center'>
               <svg width='10' height='24' xmlns='http://www.w3.org/2000/svg'>
                  <path stroke='#FFF' fill='none' d='M9 24 1 12 9 0' />
               </svg>
            </span>
         )}
         <span className='bg-themeDarker text-white py-6 px-9 '>{title}</span>
         {!backIcon && (
            <span className='bg-themeOrange w-14 flex items-center justify-center'>
               <svg width='10' height='24' xmlns='http://www.w3.org/2000/svg'>
                  <path stroke='#FFF' fill='none' d='m1 0 8 12-8 12' />
               </svg>
            </span>
         )}
      </button>
   );
};

export default Button;
