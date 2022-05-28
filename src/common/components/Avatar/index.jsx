import React from 'react';
import PropTypes from 'prop-types';

Avatar.propTypes = {
   src: PropTypes.string,
};

function Avatar({ src }) {
   return (
      <div className='border-2 rounded-[12px] max-w-[50px]'>
         <img
            src={src}
            alt='avatar'
            className='aspect-square rounded-[12px] object-cover '
         />
      </div>
   );
}

export default Avatar;
