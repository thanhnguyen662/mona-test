import React from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs';
import Radio from '../../../Radio';

function SearchCardHeader(props) {
   return (
      <>
         <div className='flex gap-6'>
            <Radio label='One way / Round-trip' />
            <Radio label='Multi-city' />
         </div>
         <div className='flex items-center gap-4'>
            <span>
               <strong className='text-purple'>02 </strong>
               Adult, <strong className='text-purple'>01 </strong>
               children
            </span>
            <BsFillCaretDownFill className='text-purple text-sm' />
         </div>
         <div className='flex items-center gap-4'>
            <div>Business Class</div>
            <BsFillCaretDownFill className='text-purple text-sm' />
         </div>
      </>
   );
}

export default SearchCardHeader;
