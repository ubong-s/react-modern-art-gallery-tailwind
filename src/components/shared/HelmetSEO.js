import { Helmet } from 'react-helmet';

const HelmetSeo = ({ title, description }) => {
   return (
      <Helmet>
         <title>{title} | Modern Art Gallery</title>
         <meta
            name='description'
            content={
               description ||
               'The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.'
            }
         />
      </Helmet>
   );
};

export default HelmetSeo;
