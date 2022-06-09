import { Link } from 'react-router-dom';
import { Button } from '../components';

const NotFound = () => {
   return (
      <div className='wrapper h-96 flex flex-col items-center justify-center md:h-screen'>
         <h1 className='uppercase text-5xl mb-8 md:mb-12 md:text-6xl lg:text-8xl'>
            Page Not Found
         </h1>
         <Link to='/'>
            <Button title='Back to Home' />
         </Link>
      </div>
   );
};

export default NotFound;
