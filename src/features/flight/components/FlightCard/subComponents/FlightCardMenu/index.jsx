import React from 'react';

function FlightCardMenu(props) {
   return (
      <div className='flex items-center gap-10 font-semibold'>
         <div className='w-fit underline text-purple cursor-pointer'>
            FLIGHT DETAIL
         </div>
         <div className='w-fit text-gray-400 cursor-pointer'>FARE INFO</div>
         <hr className='flex-auto' />
      </div>
   );
}

export default FlightCardMenu;
