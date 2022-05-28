import { format, intervalToDuration, parseISO } from 'date-fns';
import React from 'react';
import ArriveLine from '../../../../common/components/ArriveLine';
import Tag from '../../../../common/components/Tag';

function FlightDetailTime({
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
      <div className='flex justify-between items-center gap-6'>
         <div className='flex flex-col gap-2'>
            <div className='flex font-semibold text-xl justify-center '>
               {startTime ? format(parseISO(startTime), 'HH:mm') : 'Error'}
            </div>
            <div className='flex justify-center'>
               <Tag>
                  <p className='text-sm'>{startPoint || 'SGN'} </p>
               </Tag>
            </div>
         </div>
         <div className='w-full'>
            <div className='flex flex-col leading-none'>
               <div className='flex justify-center text-lg'>{`${duration?.hours}h ${duration?.minutes}m`}</div>
               <ArriveLine />
               <div className='flex justify-center text-lg'>Direct</div>
            </div>
         </div>
         <div className='flex flex-col gap-2'>
            <div className='flex font-semibold text-xl justify-center '>
               {startTime ? format(parseISO(endTime), 'HH:mm') : 'Error'}
            </div>
            <div className='flex justify-center'>
               <Tag>
                  <p className='text-sm'>{endPoint || 'DAD'}</p>
               </Tag>
            </div>
         </div>
      </div>
   );
}

export default FlightDetailTime;
