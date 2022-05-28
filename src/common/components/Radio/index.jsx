import React from 'react';

function Radio({ label }) {
   return (
      <div className='flex items-center'>
         <input
            id='default-radio-1'
            type='radio'
            value=''
            name='default-radio'
            className='w-6 h-6 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
         />
         <label
            htmlFor='default-radio-1'
            className='ml-2 font-medium text-gray-900 dark:text-gray-300'
         >
            {label}
         </label>
      </div>
   );
}

export default Radio;
