import { BeInspired, HelmetSeo, Hero, YourDay } from '../components';

const Home = () => {
   return (
      <>
         <HelmetSeo
            title='Home'
            description={
               'The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.'
            }
         />
         <Hero />
         <YourDay />
         <BeInspired />
      </>
   );
};

export default Home;
