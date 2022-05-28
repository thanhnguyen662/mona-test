import React from 'react';
import Avatar from '../../../../../../common/components/Avatar';
import getAirlineByCode from '../../../../../../constants/airlineCode';

function FlightCardAirlineProfile({ airlineCode, flightNumber, groupClass }) {
   return (
      <div className='flex items-center gap-5'>
         <Avatar
            src={
               getAirlineByCode(airlineCode).logo ||
               'https://pbs.twimg.com/profile_images/981789250109632512/MV_jHh4c_400x400.jpg'
            }
         />
         <div>
            <div className='font-semibold'>
               {getAirlineByCode(airlineCode).name || 'Bamboo Airways'}
            </div>
            <div>
               {flightNumber} &sdot; {groupClass}
            </div>
         </div>
      </div>
   );
}

export default FlightCardAirlineProfile;
