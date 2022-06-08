import { HelmetSeo, LocationInfo, Map } from '../components';

const Location = () => {
   return (
      <>
         <HelmetSeo title={'Location'} />
         <Map />
         <LocationInfo />
      </>
   );
};

export default Location;
