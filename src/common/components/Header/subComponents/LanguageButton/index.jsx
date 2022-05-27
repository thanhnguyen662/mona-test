import React from 'react';

function LanguageButton(props) {
   return (
      <div className='flex gap-4'>
         <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1024px-Flag_of_Vietnam.svg.png'
            alt='vietnamese-flag'
            className='aspect-square object-cover w-6 rounded-full'
         />
         <img
            src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png'
            alt='american-flag'
            className='aspect-square object-cover w-6 rounded-full'
         />
      </div>
   );
}

export default LanguageButton;
