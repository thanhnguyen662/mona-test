import React from 'react';
import FlightDetailHeader from '../../components/FlightDetailHeader';

FlightDetailPage.propTypes = {};

function FlightDetailPage(props) {
   return (
      <div>
         <div className='flex items-center h-24 bg-white'>
            <div className='md:container md:mx-auto'>
               <FlightDetailHeader />
            </div>
         </div>
         <div className='md:container md:mx-auto bg-[#f4f2f9] mt-10'>
            <h1>This is content</h1>
         </div>
      </div>
   );
}

export default FlightDetailPage;
