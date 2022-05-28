import React from 'react';

function HeaderMenu(props) {
   return (
      <div className='flex gap-14 items-center'>
         <button>Promotion</button>
         <button
         // className='bg-[#5e58fa] px-5 py-3 rounded-full'
         >
            Flight Schedule
         </button>
         <button>About us</button>
         <button>Payment Guide</button>
      </div>
   );
}

export default HeaderMenu;
