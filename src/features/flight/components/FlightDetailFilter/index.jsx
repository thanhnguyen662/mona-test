import React from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs';
import ButtonWithIcon from '../../../../common/components/ButtonWithIcon';

function FlightDetailFilter(props) {
   return (
      <div className='flex items-center gap-8'>
         <h5 className='text-gray-500 font-semibold text-lg'>FILTER</h5>
         <div className='flex gap-3'>
            <ButtonWithIcon
               rightIcon={<BsFillCaretDownFill className='text-purple' />}
               bg='white'
               content='Transit'
            />
            <ButtonWithIcon
               rightIcon={<BsFillCaretDownFill className='text-purple' />}
               bg='white'
               content='Time'
            />
            <ButtonWithIcon
               rightIcon={<BsFillCaretDownFill className='text-purple' />}
               bg='white'
               content='Airline'
            />
            <ButtonWithIcon
               rightIcon={<BsFillCaretDownFill className='text-purple' />}
               bg='white'
               content='Low Price'
            />
         </div>
      </div>
   );
}

export default FlightDetailFilter;
