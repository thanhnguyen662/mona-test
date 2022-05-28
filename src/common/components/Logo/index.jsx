import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logo(props) {
   const navigate = useNavigate();

   const onClickLogo = () => {
      navigate('/');
   };

   return (
      <div>
         <h1
            className='text-2xl font-bold  cursor-pointer'
            onClick={onClickLogo}
         >
            Baycungban
         </h1>
      </div>
   );
}

export default Logo;
