import React from 'react';
import priceFormat from '../../../../../../utils/priceFormat';

function FlightCardFareTabContent({ priceAdult, taxAdult, chargeAdult }) {
   return (
      <div className='flex gap-5 flex-col'>
         <div className='font-semibold text-xl'>PRICE DETAILS</div>
         <div className='grid grid-cols-2 grid-flow-row gap-3 py-1 text-xl rounded-2xl'>
            <p>Adult Basic Fare (x1) </p>
            <p className='font-semibold'>
               {priceFormat(priceAdult + taxAdult)} vnd
            </p>
            <p>Tax</p>
            <p>{taxAdult ? 'included' : 'excluded'}</p>
            <p>Regular Total Price</p>
            <p>{priceFormat(chargeAdult)} vnd</p>
            <p className='text-orange'>Save</p>
            <p>0 vnd</p>
            <hr className='col-span-2 w-[70%]' />
            <p>You pay</p>
            <p className='font-semibold'>
               {priceFormat(priceAdult + chargeAdult + taxAdult)} vnd
            </p>
         </div>
      </div>
   );
}

export default FlightCardFareTabContent;
