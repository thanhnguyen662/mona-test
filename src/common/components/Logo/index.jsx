import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logo(props) {
   const navigate = useNavigate();

   return (
      <div onClick={() => navigate('/')}>
         <h1 className='text-2xl font-bold leading-none cursor-pointer'>
            Baycungban
         </h1>
      </div>
   );
}

export default Logo;
