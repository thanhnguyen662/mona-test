import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { ImSpoonKnife } from 'react-icons/im';
import Avatar from '../../../../../../common/components/Avatar';
import FlightDetailTime from '../../../FlightDetailTime';

function FlightCardHeader(props) {
   return (
      <div className='flex items-center justify-between gap-16  w-full'>
         <FlightAirline />
         <div className='flex-1'>
            <FlightDetailTime />
         </div>
         <FlightRequired />
         <FlightPrice />
         <button className='bg-[#fef0eb] text-orange px-5 py-2 rounded-xl'>
            Choose
         </button>
      </div>
   );
}

function FlightAirline() {
   return (
      <div className='flex items-center gap-5'>
         <Avatar src='https://pbs.twimg.com/profile_images/981789250109632512/MV_jHh4c_400x400.jpg' />
         <div className='font-semibold'>BAMBOO AIRWAYS</div>
      </div>
   );
}

function FlightRequired() {
   return (
      <div className='flex flex-col gap-1'>
         <div className='flex items-center gap-3 text-lg'>
            <HiOutlineShoppingBag />
            <span>
               <p className='inline'>Baggage </p>
               <p className='inline text-purple font-semibold'>20kg</p>
            </span>
         </div>
         <div className='flex items-center gap-3 text-lg'>
            <ImSpoonKnife />
            <span>
               <p className='inline'>In-flight </p>
               <p className='inline text-purple font-semibold'>Meal</p>
            </span>
         </div>
      </div>
   );
}

function FlightPrice() {
   return (
      <div className='flex flex-col gap-1 text-lg'>
         <div className='line-through text-gray-400'>1.326.000 vnd</div>
         <div className='text-orange font-semibold'>1.326.000 vnd</div>
      </div>
   );
}

export default FlightCardHeader;
