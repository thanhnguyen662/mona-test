import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { ImSpoonKnife } from 'react-icons/im';
import Avatar from '../../../../../../common/components/Avatar';
import getAirlineByCode from '../../../../../../constants/airlineCode';
import priceFormat from '../../../../../../utils/priceFormat';
import FlightDetailTime from '../../../FlightDetailTime';

function FlightCardHeader({
   isSelectedFareInfo,
   airlineCode,
   freebag,
   priceAdult,
   taxAdult,
   chargeAdult,
   startTime,
   endTime,
   startPoint,
   endPoint,
   flyDuration,
}) {
   const buttonStyle = isSelectedFareInfo
      ? 'text-white bg-orange'
      : 'bg-[#fef0eb] text-orange';

   return (
      <div className='flex items-center justify-between gap-16  w-full'>
         <FlightAirline airlineCode={airlineCode} />
         <div className='flex-1'>
            <FlightDetailTime
               startTime={startTime}
               endTime={endTime}
               startPoint={startPoint}
               endPoint={endPoint}
               flyDuration={flyDuration}
            />
         </div>
         <FlightRequired freebag={freebag} />
         <FlightPrice
            priceAdult={priceAdult}
            taxAdult={taxAdult}
            chargeAdult={chargeAdult}
         />
         <button className={`${buttonStyle} px-5 py-2 rounded-xl`}>
            Choose
         </button>
      </div>
   );
}

function FlightAirline({ airlineCode }) {
   return (
      <div className='flex items-center gap-5'>
         <Avatar src={getAirlineByCode(airlineCode).logo} />
         <div className='font-semibold uppercase'>
            {getAirlineByCode(airlineCode).name}
         </div>
      </div>
   );
}

function FlightRequired({ freebag }) {
   return (
      <div className='flex flex-col gap-1'>
         <div className='flex items-center gap-3 text-md'>
            <HiOutlineShoppingBag />
            <span>
               <p className='inline'>Baggage </p>
               <p className='inline text-purple font-semibold'>{freebag}</p>
            </span>
         </div>
         <div className='flex items-center gap-3 text-md'>
            <ImSpoonKnife />
            <span>
               <p className='inline'>In-flight </p>
               <p className='inline text-purple font-semibold'>Meal</p>
            </span>
         </div>
      </div>
   );
}

function FlightPrice({ priceAdult, taxAdult, chargeAdult }) {
   return (
      <div className='flex flex-col gap-1 text-lg'>
         <div className='line-through text-gray-400'>
            {priceFormat(priceAdult + taxAdult + chargeAdult)} vnd
         </div>
         <div className='text-orange font-semibold'>
            {priceFormat(priceAdult + taxAdult + chargeAdult)} vnd
         </div>
      </div>
   );
}

export default FlightCardHeader;
