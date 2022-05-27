import React from 'react';
import PropTypes from 'prop-types';

Avatar.propTypes = {
   src: PropTypes.string,
};

function Avatar({ src }) {
   return (
      <div className='border-2 rounded-lg object-cover max-w-[50px]'>
         <img src={src} alt='avatar' className='aspect-square rounded-xl ' />
      </div>
   );
}

export default Avatar;
