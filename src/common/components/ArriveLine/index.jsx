import React from 'react';
import { BsCircle, BsCircleFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

ArriveLine.propTypes = {
   direction: PropTypes.string,
};

ArriveLine.defaultProps = {
   direction: 'horizontal',
};

function ArriveLine({ direction }) {
   if (direction === 'horizontal') {
      return (
         <div className='flex w-full items-center'>
            <div className='flex-none text-purple text-sm'>
               <BsCircle />
            </div>
            <div className='flex flex-auto'>
               <hr className='border-1 w-full border-purple' />
            </div>
            <div className='text-purple text-sm'>
               <BsCircleFill />
            </div>
         </div>
      );
   }

   return (
      <div className='flex items-center flex-col'>
         <div className='flex-none text-purple text-sm'>
            <BsCircle />
         </div>
         <div className='flex flex-auto'>
            <hr className='border-l-[1px] w-full h-full border-purple ' />
         </div>
         <div className='text-purple text-sm'>
            <BsCircleFill />
         </div>
      </div>
   );
}
export default ArriveLine;
