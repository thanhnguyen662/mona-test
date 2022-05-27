import React from 'react';
import HeaderFromTo from './subComponents/HeaderFromTo';
import HeaderInfo from './subComponents/HeaderInfo';
import { BsSearch } from 'react-icons/bs';
import ButtonWithIcon from '../../../../common/components/ButtonWithIcon';

function FlightDetailHeader(props) {
   return (
      <div className='flex justify-between items-center'>
         <HeaderFromTo />
         <HeaderInfo />
         <ButtonWithIcon
            rightIcon={<BsSearch />}
            bg='orange'
            textColor='white'
            fontWeight='semibold'
            content='Change Flight'
         />
      </div>
   );
}

export default FlightDetailHeader;
