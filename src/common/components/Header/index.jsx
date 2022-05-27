import React from 'react';
import Logo from '../Logo';
import HeaderMenu from './subComponents/HeaderMenu';
import LanguageButton from './subComponents/LanguageButton';

function Header(props) {
   return (
      <div className='bg-purple'>
         <div className='md:container md:mx-auto flex justify-between items-center h-24'>
            <div className='flex-1 flex gap-4 h-full items-center'>
               <Logo />
               <LanguageButton />
            </div>
            <div className='flex-2'>
               <HeaderMenu />
            </div>
            <div className='flex-1 flex justify-end'>
               <button className='bg-white px-5 py-3 rounded-xl font-semibold text-purple'>
                  Booking now
               </button>
            </div>
         </div>
      </div>
   );
}

export default Header;
