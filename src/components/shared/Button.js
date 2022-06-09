const Button = ({ backIcon, title = 'Click here' }) => {
   return (
      <button className='btn'>
         {backIcon === 'true' && (
            <span className='icon'>
               <svg width='10' height='24' xmlns='http://www.w3.org/2000/svg'>
                  <path stroke='#FFF' fill='none' d='M9 24 1 12 9 0' />
               </svg>
            </span>
         )}
         <span className='py-6 px-9'>{title}</span>
         {!backIcon && (
            <span className='icon'>
               <svg width='10' height='24' xmlns='http://www.w3.org/2000/svg'>
                  <path stroke='#FFF' fill='none' d='m1 0 8 12-8 12' />
               </svg>
            </span>
         )}
      </button>
   );
};

export default Button;
