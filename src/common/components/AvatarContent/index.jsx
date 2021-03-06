import React from 'react';
import PropTypes from 'prop-types';

AvatarContent.propTypes = {
   children: PropTypes.node,
   bg: PropTypes.string,
};

AvatarContent.defaultProps = {
   bg: 'gray-400',
};

function AvatarContent({ children, bg }) {
   return (
      <div
         className={`col-span-2 w-full flex items-center justify-center aspect-square rounded-full ${bg} font-semibold text-lg`}
      >
         {children}
      </div>
   );
}

export default AvatarContent;
