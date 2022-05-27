import React from 'react';

function HeaderInfo(props) {
   return (
      <div className='flex gap-5 font-bold divide-x text-lg'>
         <div>
            <h5>Round-trip</h5>
         </div>
         <div className='pl-5'>
            <span className='flex gap-1'>
               <p className='text-purple'>02</p>
               <p>Adult, </p>
               <p className='text-purple'>01</p>
               <p>children</p>
            </span>
         </div>
         <div className='pl-5'>
            <h5>Business Class</h5>
         </div>
      </div>
   );
}

export default HeaderInfo;
