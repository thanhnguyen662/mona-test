import React from 'react';
import FlightDetailFilter from '../../components/FlightDetailFilter';
import FlightDetailHeader from '../../components/FlightDetailHeader';
import YourFlight from '../../components/YourFlight';

FlightDetailPage.propTypes = {};

function FlightDetailPage(props) {
   return (
      <div>
         <div className='flex items-center h-24 bg-white'>
            <div className='md:container md:mx-auto'>
               <FlightDetailHeader />
            </div>
         </div>
         <div className='md:container md:mx-auto bg-[#f4f2f9] mt-5'>
            <div className='grid grid-cols-4 gap-4'>
               <div className='col-span-3'>
                  <div className='flex justify-end'>
                     <FlightDetailFilter />
                  </div>
               </div>
               <div className='col-span-1'>
                  <YourFlight />
               </div>
            </div>
         </div>
      </div>
   );
}

export default FlightDetailPage;
