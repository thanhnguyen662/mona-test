import React from 'react';
import FlightCardAirlineProfile from '../FlightCardAirlineProfile';

function FlightCardTabContent({
   airlineCode,
   flightNumber,
   groupClass,
   freebag,
   plane,
}) {
   return (
      <div className='flex gap-5 flex-col'>
         <FlightCardAirlineProfile
            airlineCode={airlineCode}
            flightNumber={flightNumber}
            groupClass={groupClass}
         />
         <div className='grid grid-cols-2 grid-flow-row gap-4 bg-[#f4f2f9] py-5 px-6 text-xl rounded-2xl'>
            <span>
               <p className='inline'>Baggage </p>
               <p className='inline font-semibold text-purple'>{freebag}</p>
            </span>
            <span>
               <p className='inline'>Aircraft </p>
               <p className='inline font-semibold text-purple'>{plane}</p>
            </span>
            <span>
               <p className='inline'>In-flight </p>
               <p className='inline font-semibold text-purple'>Meal</p>
            </span>
            <span>
               <p className='inline'>Seat layout </p>
               <p className='inline font-semibold text-purple'>3-3</p>
            </span>
            <span>
               <p className='inline'>In-flight </p>
               <p className='inline font-semibold text-purple'>Entertainment</p>
            </span>
            <span>
               <p className='inline'>Seat pitch </p>
               <p className='inline font-semibold text-purple'>
                  29 inches (standard)
               </p>
            </span>
         </div>
      </div>
   );
}

export default FlightCardTabContent;
