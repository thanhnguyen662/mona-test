import React from 'react';
import ArriveLine from '../../../../common/components/ArriveLine';
import Tag from '../../../../common/components/Tag';

function FlightDetailTime(props) {
   return (
      <div className='flex justify-between items-center gap-6'>
         <div className='flex flex-col gap-2'>
            <div className='flex font-semibold text-xl justify-center '>
               21:40
            </div>
            <div className='flex justify-center'>
               <Tag>
                  <p className='text-sm'>DAD</p>
               </Tag>
            </div>
         </div>
         <div className='w-full'>
            <div className='flex flex-col leading-none'>
               <div className='flex justify-center text-lg'>1h30m</div>
               <ArriveLine />
               <div className='flex justify-center text-lg'>Direct</div>
            </div>
         </div>
         <div className='flex flex-col gap-2'>
            <div className='flex font-semibold text-xl justify-center '>
               21:40
            </div>
            <div className='flex justify-center'>
               <Tag>
                  <p className='text-sm'>DAD</p>
               </Tag>
            </div>
         </div>
      </div>
   );
}

export default FlightDetailTime;
