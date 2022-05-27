import React from 'react';
import ArriveLine from '../../../../common/components/ArriveLine';
import Avatar from '../../../../common/components/Avatar';
import AvatarContent from '../../../../common/components/AvatarContent';
import Tag from '../../../../common/components/Tag';

function YourFlight(props) {
   return (
      <div className='flex gap-4 w-full bg-white rounded-xl flex-col '>
         <div className='w-full px-5 py-6 border-b-2'>
            <h1 className='text-xl leading-none font-semibold'>YOUR FLIGHT</h1>
         </div>
         <div className='flex gap-5 flex-col w-full px-5'>
            <YourFlightDate />
            <YourFlightAirline />
            <YourFlightTime />
            <button className='w-full bg-[#EEEDFE] h-12 rounded-xl text-purple'>
               Change departure flight
            </button>
            <hr />
            <YourFlightBackDate />
         </div>
         <div className='w-full px-5 py-6 bg-[#f8f8f8] rounded-b-xl'>
            <YourFlightSubTotal />
         </div>
      </div>
   );
}

function YourFlightDate() {
   return (
      <div className='grid grid-cols-12 gap-4 items-center'>
         <AvatarContent bg='gray-400'>
            <p className='leading-none text-white'>01</p>
         </AvatarContent>
         <div className='col-span-10'>
            <div className='text-lg'>Fri, 11 Feb, 2022</div>
            <div className='text-xl font-bold'>Da Nang - Ho Chi Minh</div>
         </div>
      </div>
   );
}

function YourFlightBackDate() {
   return (
      <div className='grid grid-cols-12 gap-4 items-center'>
         <AvatarContent bg='purple'>
            <p className='leading-none text-white'>02</p>
         </AvatarContent>
         <div className='col-span-10'>
            <div className='text-lg'>Fri, 11 Feb, 2022</div>
            <div className='text-xl font-bold'>Da Nang - Ho Chi Minh</div>
         </div>
      </div>
   );
}

function YourFlightAirline() {
   return (
      <div className='grid grid-cols-12 gap-4 items-center'>
         <div className='col-span-2 w-full'>
            <Avatar src='https://pbs.twimg.com/profile_images/981789250109632512/MV_jHh4c_400x400.jpg' />
         </div>
         <div className='col-span-10'>
            <div className='text-lg uppercase'>BAMBOO AIRWAYS</div>
            <div className='text-md underline text-purple font-semibold'>
               Details
            </div>
         </div>
      </div>
   );
}

function YourFlightTime() {
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
            <ArriveLine />
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

function YourFlightSubTotal() {
   return (
      <div className='flex flex-col'>
         <div className='text-lg'>Subtotal</div>
         <div className='text-xl text-orange font-semibold'>1,322,000 vnd</div>
      </div>
   );
}

export default YourFlight;
