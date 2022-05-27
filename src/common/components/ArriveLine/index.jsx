import React from 'react';
import { BsCircle, BsCircleFill } from 'react-icons/bs';

function ArriveLine(props) {
   return (
      <div className='flex flex-col leading-none'>
         <div className='flex justify-center text-lg'>1h30m</div>
         <div className='flex w-full items-center'>
            <div className='flex-none text-purple text-sm'>
               <BsCircle />
            </div>
            <div className='flex flex-auto'>
               <hr className='border-1 w-full border-purple' />
            </div>
            <div className='text-purple text-sm'>
               <BsCircleFill />
            </div>
         </div>
         <div className='flex justify-center text-lg'>Direct</div>
      </div>
   );
}
export default ArriveLine;
