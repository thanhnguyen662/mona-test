import { format, intervalToDuration, parseISO } from 'date-fns';
import React from 'react';
import ArriveLine from '../../../../../../common/components/ArriveLine';
import getLocationByCode from '../../../../../../constants/locationCode';

function FlightDetailTabArrive({
   startTime,
   endTime,
   startPoint,
   endPoint,
   flyDuration,
}) {
   let duration = intervalToDuration({
      start: 0,
      end: (flyDuration ? flyDuration : 0) * 60000,
   });

   return (
      <div className='flex justify-between h-64'>
         <div className='flex flex-col justify-between'>
            <div>
               <div className='font-semibold text-lg '>
                  {format(parseISO(startTime), 'HH:mm')}
               </div>
               <div>{format(parseISO(startTime), 'dd MMM')}</div>
            </div>

            <div className='text-lg'>{`${duration.hours}h ${duration.minutes}m`}</div>

            <div>
               <div className='font-semibold text-lg'>
                  {format(parseISO(endTime), 'HH:mm')}
               </div>
               <div>{format(parseISO(endTime), 'dd MMM')}</div>
            </div>
         </div>

         <ArriveLine direction='vertical' />

         <div className='flex flex-col justify-between'>
            <div>
               <div className='font-semibold text-lg'>
                  {`${getLocationByCode(startPoint).city} (${startPoint})`}
               </div>
               <div>{getLocationByCode(startPoint).airport}</div>
            </div>
            <div>
               <div className='font-semibold text-lg'>
                  {`${getLocationByCode(endPoint).city} (${endPoint})`}
               </div>
               <div>{getLocationByCode(endPoint).airport}</div>
            </div>
         </div>
      </div>
   );
}

export default FlightDetailTabArrive;
