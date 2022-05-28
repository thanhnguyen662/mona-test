import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../Logo';
import HeaderMenu from './subComponents/HeaderMenu';
import LanguageButton from './subComponents/LanguageButton';

function Header({ theme = 'light' }) {
   const navigate = useNavigate();

   const themeStyle = theme === 'light' ? 'text-white' : '';
   const themeStyleButton =
      theme === 'light' ? 'bg-white text-purple' : 'bg-purple text-white';

   return (
      <div
         onClick={() => navigate('/flight')}
         className={`md:container md:mx-auto flex justify-between items-center h-24 ${themeStyle}`}
      >
         <div className='flex-1 flex gap-4 h-full items-center'>
            <Logo />
            <LanguageButton />
         </div>
         <div className='flex-2'>
            <HeaderMenu />
         </div>
         <div className='flex-1 flex justify-end'>
            <button
               className={`px-5 py-3 rounded-xl font-semibold ${themeStyleButton}`}
            >
               Booking now
            </button>
         </div>
      </div>
   );
}

export default Header;
