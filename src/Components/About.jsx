import React from 'react';
import Web from "../ImagesWeb/girl.jpeg";
import Common from './Common';

const About=()=>{
  return (
<>
<Common 
quotes= " ' Investment in Travel is an Investment in Yourself ' "
name="About Us" 
imgsrc={Web} 
visit="/contact"  
text=", the world's largest travel platform*,
 helps 463 million travelers each month** make every trip their best trip.
  Travelers across the globe use the Tripadvisor site and app to browse more
   than 859 million reviews and opinions of 8.6 million accommodations, 
   restaurants, experiences, airlines and cruises. Whether planning or on a trip,
    travelers turn to Tripadvisor to compare low prices on hotels, flights and cruises,
     book popular tours and attractions, as well as reserve tables at great restaurants.
      Tripadvisor, the ultimate travel companion, 
is available in 49 markets and 28 languages."
btnname="Contact Now" />
</>
  );
};
export default About;