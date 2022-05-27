import React from 'react';
import ArriveLine from '../../../../../../common/components/ArriveLine';

function FlightDetailTabArrive(props) {
   return (
      <div className='flex justify-between h-64'>
         <div className='flex flex-col justify-between'>
            <div>
               <div className='font-semibold text-lg '>21:40</div>
               <div>11 Feb</div>
            </div>

            <div className='text-lg'>1h30m</div>

            <div>
               <div className='font-semibold text-lg'>21:40</div>
               <div>11 Feb</div>
            </div>
         </div>

         <ArriveLine direction='vertical' />

         <div className='flex flex-col justify-between'>
            <div>
               <div className='font-semibold text-lg'>Da nang (DAD)</div>
               <div>Da Nang Airport</div>
            </div>
            <div>
               <div className='font-semibold text-lg'>
                  Ho Chi Minh City (SGN)
               </div>
               <div>Tansonnhat Intl</div>
            </div>
         </div>
      </div>
   );
}

export default FlightDetailTabArrive;
