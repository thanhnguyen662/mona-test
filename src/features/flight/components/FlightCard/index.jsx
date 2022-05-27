import React from 'react';
import FlightCardHeader from './subComponents/FlightCardHeader';
import FlightCardMenu from './subComponents/FlightCardMenu';
import FlightCardTabContent from './subComponents/FlightCardTabContent';
import FlightDetailTabArrive from './subComponents/FlightDetailTabArrive';

function FlightCard(props) {
   return (
      <div className='flex flex-col bg-white px-6 pt-6 pb-8 gap-8 rounded-xl'>
         <FlightCardHeader />
         <FlightCardMenu />
         <div className='grid grid-cols-12 gap-8'>
            <div className='col-span-4'>
               <FlightDetailTabArrive />
            </div>
            <div className='col-span-8'>
               <div className='flex flex-col'>
                  <FlightCardTabContent />
               </div>
            </div>
         </div>
      </div>
   );
}

export default FlightCard;
