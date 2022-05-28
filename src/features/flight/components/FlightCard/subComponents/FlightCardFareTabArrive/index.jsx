import React from 'react';
import ArriveLine from '../../../../../../common/components/ArriveLine';
import getLocationByCode from '../../../../../../constants/locationCode';
import FlightCardAirlineProfile from '../FlightCardAirlineProfile';

function FlightCardFareTabArrive({
   airlineCode,
   flightNumber,
   groupClass,
   startPoint,
   endPoint,
   fareClass,
   isNotRefund,
}) {
   return (
      <div className='flex flex-col gap-5'>
         <h4 className='font-semibold text-xl'>CONDITIONS</h4>
         <FlightCardAirlineProfile
            airlineCode={airlineCode}
            flightNumber={flightNumber}
            groupClass={groupClass}
         />
         <div className='flex items-start justify-between gap-4'>
            <div>
               <h4 className='text-lg'>{getLocationByCode(startPoint).city}</h4>
               <h4 className='text-lg text-purple'>{fareClass}</h4>
            </div>
            <div className='flex-1 mt-2'>
               <ArriveLine direction='horizontal' />
            </div>
            <h4 className='text-lg'>{getLocationByCode(endPoint).city}</h4>
         </div>
         <div className='text-lg'>{isNotRefund && 'None - '}Refundable</div>
      </div>
   );
}

export default FlightCardFareTabArrive;
