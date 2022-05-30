import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import SearchCardFlyTime from './subComponents/SearchCardFlyTime';
import SearchCardFromTo from './subComponents/SearchCardFromTo';
import SearchCardHeader from './subComponents/SearchCardHeader';

function SearchCard(props) {
   return (
      <div className='bg-white rounded-3xl px-8 pt-8 pb-14 shadow-xl flex flex-col gap-6 relative'>
         <div className='flex items-center gap-24 text-lg'>
            <SearchCardHeader />
         </div>
         <div className='flex gap-6'>
            <div className='flex-1'>
               <SearchCardFromTo />
            </div>
            <div className='flex-1'>
               <SearchCardFlyTime />
            </div>
         </div>
         <div className='absolute top-[100%] left-[calc(100%-2rem)] translate-y-[-50%] translate-x-[-100%] w-fit'>
            <SearchButton />
         </div>
      </div>
   );
}

function SearchButton() {
   const navigate = useNavigate();

   return (
      <button
         onClick={() => navigate('/flight')}
         className='flex items-center gap-4 bg-purple px-6 py-3 rounded-xl text-white text-lg h-16'
      >
         <div className='font-semibold flex-1'>Search Flights</div>
         <BsArrowRight />
      </button>
   );
}

export default SearchCard;
