import React from 'react';
import Avatar from '../../../../../../common/components/Avatar';

function FlightCardTabContent(props) {
   return (
      <div className='flex gap-5 flex-col'>
         <div className='flex items-center gap-5'>
            <Avatar src='https://pbs.twimg.com/profile_images/981789250109632512/MV_jHh4c_400x400.jpg' />
            <div>
               <div className='font-semibold'>BAMBOO AIRWAYS</div>
               <div>QH-183 &sdot; Economy</div>
            </div>
         </div>
         <div className='grid grid-cols-2 grid-flow-row gap-3 bg-[#f4f2f9] py-5 px-6 text-lg rounded-2xl'>
            <span>
               <p className='inline'>Baggage </p>
               <p className='inline font-semibold text-purple'>20kg</p>
            </span>
            <span>
               <p className='inline'>Aircraft </p>
               <p className='inline font-semibold text-purple'>Airbus A321</p>
            </span>
            <span>
               <p className='inline'>In-flight </p>
               <p className='inline font-semibold text-purple'>Meal</p>
            </span>
            <span>
               <p className='inline'>Seat layout </p>
               <p className='inline font-semibold text-purple'>3-3</p>
            </span>
            <span>
               <p className='inline'>In-flight </p>
               <p className='inline font-semibold text-purple'>Entertainment</p>
            </span>
            <span>
               <p className='inline'>Seat pitch </p>
               <p className='inline font-semibold text-purple'>
                  29 inches (standard)
               </p>
            </span>
         </div>
      </div>
   );
}

export default FlightCardTabContent;
