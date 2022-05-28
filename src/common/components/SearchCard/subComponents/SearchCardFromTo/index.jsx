import React from 'react';
import { RiArrowUpDownFill } from 'react-icons/ri';

function SearchCardFromTo(props) {
   return (
      <div
         className="flex gap-[20px] items-center relative
         after:content-['']
         after:w-[20px]
         after:h-[85px]
         after:bg-white
         after:absolute
         after:top-[25px]
         after:left-[50%]
         after:translate-x-[-50%]
         transition-all
      "
      >
         <div
            className="flex gap-1 px-6 py-3.5 flex-col leading-none border-gray-300 border-2 rounded-2xl flex-1 
            before:content-['']
            before:w-[40px]
            before:h-[80px]
            before:rounded-tl-full
            before:rounded-bl-full
            before:bg-white
            before:border-[2px]
            before:border-gray-300
            before:absolute
            before:top-[50%]
            before:left-[47%]
            before:translate-y-[-50%]
            before:translate-x-[-50%]
            before:hover:border-purple
   
            hover:border-purple
            transition-all
           
         "
         >
            <h2 className='text-lg text-gray-500'>FROM</h2>
            <h1 className='text-purple font-semibold text-3xl'>Da Nang</h1>
            <h2 className='text-xl font-semibold mt-1'>Viet Nam</h2>
         </div>

         <div className='rotate-90 absolute left-[50%] z-50 translate-x-[-50%]'>
            <RiArrowUpDownFill className='text-4xl leading-10' />
         </div>

         <div
            className="flex gap-1 px-6 py-3.5 flex-col leading-none border-gray-300 border-2 rounded-2xl flex-1
         
            before:content-['']
            before:w-[40px]
            before:h-[80px]
            before:rounded-tr-full
            before:rounded-br-full
            before:bg-white
            before:border-[2px]
            before:border-gray-300
            before:absolute
            before:top-[50%]
            before:left-[53%]
            before:translate-y-[-50%]
            before:translate-x-[-50%]
            before:hover:border-purple
            hover:border-purple
            transition-all
         "
         >
            <h2 className='text-lg pl-6 text-gray-500 '>TO</h2>
            <h1 className='text-purple pl-6 font-semibold text-3xl'>
               Ho Chi Minh
            </h1>
            <h2 className='text-xl pl-6 font-semibold mt-1'>Viet Nam</h2>
         </div>
      </div>
   );
}

export default SearchCardFromTo;
