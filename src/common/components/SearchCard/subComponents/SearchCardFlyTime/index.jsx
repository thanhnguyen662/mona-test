import React from 'react';
import { BsCalendarWeek } from 'react-icons/bs';

function SearchCardFlyTime(props) {
   return (
      <div className='flex w-full border-gray-300 border-2 rounded-2xl h-full hover:border-purple transition-all'>
         <div className='flex gap-1 px-6 py-3.5 flex-col leading-none flex-1'>
            <h2 className='text-lg text-gray-500 font-semibold'>DEPARTURE</h2>
            <div className='flex items-center gap-4 text-purple '>
               <h1 className='font-semibold text-3xl'>Fri, 22 Mar, 2022</h1>
               <BsCalendarWeek className='text-xl' />
            </div>
            <div className='flex gap-4'>
               <div className='border-b-[2px] border-black'>
                  <h2 className='text-xl font-semibold mt-1 '>Prev</h2>
               </div>
               <div>
                  <h2 className='text-xl mt-1 text-gray-400'>Next</h2>
               </div>
            </div>
         </div>
         <div className='flex gap-1 px-6 py-3.5 flex-col leading-none flex-1'>
            <h2 className='text-lg text-gray-500 font-semibold'>Return</h2>
            <div className='flex items-center gap-4 text-purple '>
               <h1 className='font-semibold text-3xl'>Fri, 22 Mar, 2022</h1>
               <BsCalendarWeek className='text-xl' />
            </div>
            <div className='flex gap-4'>
               <div>
                  <h2 className='text-xl mt-1 text-gray-400'>Prev</h2>
               </div>
               <div>
                  <h2 className='text-xl mt-1 text-gray-400'>Next</h2>
               </div>
            </div>
         </div>
      </div>
   );
}

export default SearchCardFlyTime;
