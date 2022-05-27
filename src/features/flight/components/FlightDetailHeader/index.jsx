import React from 'react';
import HeaderFromTo from './subComponents/HeaderFromTo';
import HeaderInfo from './subComponents/HeaderInfo';
import { BsSearch } from 'react-icons/bs';

function FlightDetailHeader(props) {
   return (
      <div className='flex justify-between items-center'>
         <HeaderFromTo />
         <HeaderInfo />
         <button className='flex items-center gap-3 bg-orange px-5 py-3 rounded-xl font-semibold text-white'>
            Change Flight
            <BsSearch />
         </button>
      </div>
   );
}

export default FlightDetailHeader;
