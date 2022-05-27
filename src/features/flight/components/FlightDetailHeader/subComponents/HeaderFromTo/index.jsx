import React from 'react';
import { RiArrowUpDownFill } from 'react-icons/ri';

function HeaderFromTo(props) {
   return (
      <div className='flex gap-16 items-center'>
         <FromInfo />
         <div className='rotate-90 text-2xl text-gray-500'>
            <RiArrowUpDownFill />
         </div>
         <ToInfo />
      </div>
   );
}

function FromInfo() {
   return (
      <div className='flex flex-col'>
         <h4 className='font-semibold text-purple text-xl'>Da Nang (DAD)</h4>
         <h5 className='text-[#3f3f3f]'>Fri, 22 Mar, 2022</h5>
      </div>
   );
}

function ToInfo() {
   return (
      <div className='flex flex-col'>
         <h4 className='font-semibold text-purple text-xl'>
            Ho Chi Minh (SGN)
         </h4>
         <h5 className='text-[#3f3f3f]'>Fri, 22 Mar, 2022</h5>
      </div>
   );
}

export default HeaderFromTo;
